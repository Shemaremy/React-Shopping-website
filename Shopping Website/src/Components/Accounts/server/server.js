// This how my server from Glitch looks like
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



app.use(cors());
app.use(express.json());





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







// Schema definition
const UserSchema = new mongoose.Schema({
  UserName: { type: String, unique: true, required: true },
  Email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cart: [{
    itemName: { type: String, default: "" },
    price: { type: Number, default: 0 },
    size: { type: String, default: "" }
  }]
});


UserSchema.plugin(uniqueValidator);
const User = mongoose.model('Users', UserSchema);






// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);







// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden

    req.user = user;
    next();
  });
};

// ADD TO CART ROUTE
app.post('/api/cart', authenticateToken, async (req, res) => {
  const { itemName, price, size } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.cart.push({ itemName, price, size });
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
        process.env.JWT_SECRET, // Secret key for signing
        { expiresIn: '1h' } // Token expiration time (e.g., 1 hour)
      );
      
        res.status(200).send({ message: 'Success', token });
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



