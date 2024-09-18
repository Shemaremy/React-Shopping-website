require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uniqueValidator = require('mongoose-unique-validator');

const sgMail = require('@sendgrid/mail'); 

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));





// DB Connection
async function connectDB() {
  // const localUri = 'mongodb://localhost:27017/Test';
  const uri = process.env.MONGODB_URI;
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection error:', err);
  }
}
connectDB();








// -------------- Schema definition section ---------------------------------------
// -------------- Schema definition section ---------------------------------------


// User schema -----------------------
const UserSchema = new mongoose.Schema({
  UserName: { type: String, unique: true, required: true },
  Email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cart: [{
    name: { type: String, default: "" },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 1 },
    image: { type: String, default: "" },
    sizes: { type: [String], default: [] },
    stars: { type: Number, default: 1 }
  }]
});
UserSchema.plugin(uniqueValidator);
const User = mongoose.model('Users', UserSchema);



// Admin schema -----------------------
const AdminSchema = new mongoose.Schema({
  UserName: { type: String, unique: true, required: true },
  Email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
AdminSchema.plugin(uniqueValidator);
const Admin = mongoose.model('Admin', AdminSchema);






// Product Schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
  size: { type: String, required: true },
});

const Product = mongoose.model('Product', ProductSchema);










// ---------------------------------------------------- CART SETTINGS ------------------------------------------------------------
// ---------------------------------------------------- CART SETTINGS ------------------------------------------------------------
// ---------------------------------------------------- CART SETTINGS ------------------------------------------------------------



// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    //if (err) return res.sendStatus(403); // Forbidden
    if (err) {
      if (err.name === 'TokenExpiredError') {
        // req.user = null; // Expired token, continue without user context
        res.status(401).json({ message: 'Token expired' }); // Invalid token, return error
      }
    }

    req.user = user;
    next();
  });
};




// AUTO LOAD THE CART ROUTE
app.get('/api/cart', authenticateToken, async (req, res) => {
  try {
    if (!req.user) {
      // If user context is null, assume token was expired or not provided
      return res.status(200).json({ cart: [] }); // Return an empty cart or a similar response
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Return the cart data to the client
    res.status(200).json({ cart: user.cart });
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ message: 'Server error' });
  }
});




// ADD TO CART ROUTE
app.post('/api/cart', authenticateToken, async (req, res) => {
  const { name, price, quantity, image, sizes, stars } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.cart.push({ name, price, quantity, image, sizes, stars });
    await user.save();

    res.status(200).json({ message: 'Item added to cart', cart: user.cart });
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid token' }); // Send JSON response on token failure
    }
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// DELETE FROM CART ROUTE (Using Index)
app.delete('/api/cart', authenticateToken, async (req, res) => {
  const { index } = req.body; // Receive the index of the item to delete

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if index is valid
    if (index < 0 || index >= user.cart.length) {
      return res.status(404).json({ message: 'Invalid item index' });
    }

    // Remove item by index
    user.cart.splice(index, 1);

    await user.save();

    res.status(200).json({ message: 'Item removed from cart', cart: user.cart });
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid token' });
    }
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});






// ------------------------------------------------ END OF CART SETTINGS ------------------------------------------------------------
// ------------------------------------------------ END OF CART SETTINGS ------------------------------------------------------------
// ------------------------------------------------ END OF CART SETTINGS ------------------------------------------------------------




































// SIGNUP route
app.post('/api/users', async (req, res) => {
  const { UserName, Email, password } = req.body;  

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ UserName, Email, password: hashedPassword, cart: [] });
    const user = await newUser.save();
    res.json(user);
  } 
  
  catch (err) {
    console.error('Error:', err);

    if (err.name === 'ValidationError') {
      const errors = err.errors;
      const messages = Object.values(errors).map(e => e.message);
      res.status(400).send({ message: messages.join(', ') });
    } else {
      res.status(500).send({ message: 'Something went wrong, please try again later.' });
    }
  }
});

























// LOGIN route
app.post('/api/login', async (req, res) => {
  const { identifier, password } = req.body;

  try {

    const user = await User.findOne({ $or: [{ UserName: identifier }, { Email: identifier }]});
    if (!user) {
      res.status(400).send({ message: `There is no account with username or email: ${identifier}` });
    } 
    else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        // Generate JWT token
        const token = jwt.sign(
        { id: user._id, UserName: user.UserName }, // Payload
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
      );
        res.status(200).send({ message: 'Success', token, username: user.UserName });
      } else {
        res.status(400).send({ message: 'Invalid password!' });
      }

    }

  } 
  
  
  catch (err) {
    console.error('Error:', err);
    res.status(500).send({ message: 'Server error' });
  }


});



// Login as an admin
app.post('/api/adminlogin', async (req, res) => {
  const { identifier, password } = req.body;

  try {

    const admin = await Admin.findOne({ $or: [{ UserName: identifier }, { Email: identifier }]});
    if (!admin) {
      res.status(400).send({ message: `There is no admin account with username or email: ${identifier}` });
    } 
    else {
      const isMatch = password === admin.password;
      if (isMatch) {
        // Generate JWT token
        const token = jwt.sign(
        { id: admin._id, UserName: admin.UserName },
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
      );
        res.status(200).send({ message: 'Success', token, username: admin.UserName });
      } else {
        res.status(400).send({ message: 'Invalid password!' });
      }

    }

  } 
  
  
  catch (err) {
    console.error('Error:', err);
    res.status(500).send({ message: 'Server error' });
  }


});







// ==================================================== ADMIN ACTIONS =======================================================
// ==================================================== ADMIN ACTIONS =======================================================
// ==================================================== ADMIN ACTIONS =======================================================
// ==================================================== ADMIN ACTIONS =======================================================


// Admin add to route
app.post('/api/adminadd', async (req, res) => {
  const products = req.body.items; // Receive an array of products

  try {
    // Validate if products array is empty
    if (!products || products.length === 0) {
      return res.status(400).json({ message: 'No products to add.' });
    }

    // Insert multiple products into the database
    await Product.insertMany(products);
    res.status(200).json({ message: 'Products added successfully' });
  } catch (err) {
    console.error('Error adding products:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Admin display storage items

app.get('/api/admindisplay', async (req, res) => {
  try {
    const { category } = req.query;
    let products;
    
    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


































// FORGOT ROUTE
app.post('/api/forgot', async (req, res) => {
  const { Email } = req.body;

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ Email });
    
    if (user) {
      
      const token = jwt.sign(
        { Email: user.Email },
        process.env.JWT_SECRET,
        { expiresIn: '2m' }
      );
      //const resetLink = `http://localhost:5173/reset-password?token=${token}`;
      const resetLink = `https://v3rve.netlify.app/reset-password?token=${token}`;

      const msg = {
        to: Email,
        from: 'remyshema20@gmail.com',
        subject: 'Password Reset Request',
        html: `
          <p>Hello,</p>
          <p>You requested to reset your password. Please click the link below to reset it:</p>
          <p><a href="${resetLink}">Reset your password</a></p>
          <p>If you didn't request a password reset, please ignore this email.</p>
          <p>Thank you!</p>
        `
      };
      await sgMail.send(msg);
      res.status(200).json({ message: 'Reset password link was sent to your email.' });
    } else {
      res.status(404).json({ message: 'Email was not found in our database.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});






















// RESET PASSWORD ROUTE
app.post('/api/reset-password', async (req, res) => {
  const { token, passwordTwo } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { Email } = decoded;

    // Find the user by email
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(passwordTwo, saltRounds);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password has been reset successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ message: 'Token has expired. Please request a new password reset link.' });    
  }
});






















// SEND EMAIL TO ME FROM THE HOME PAGE
app.post('/submit', async (req, res) => {

  const { Email, Message } = req.body;
  const msg = {
    to: 'shemaremy2003@gmail.com',
    from: 'remyshema20@gmail.com',
    subject: 'Form Submission from Verve',
    html: `
      <p><strong>Email:</strong> ${Email}</p>
      <p><strong>Message:</strong> ${Message}</p>
    `
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Message has been sent successfully.' });
  }
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});














app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



