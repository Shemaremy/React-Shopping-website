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
  const uri = 'mongodb+srv://RemyTest:mamito@testproject.qjbm0.mongodb.net/?retryWrites=true&w=majority&appName=TestProject'
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
});


UserSchema.plugin(uniqueValidator);
const User = mongoose.model('Users', UserSchema);






// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);






// SIGNUP route
app.post('/api/users', async (req, res) => {
  const { UserName, Email, password } = req.body;  

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ UserName, Email, password: hashedPassword });
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
        res.status(200).send({ message: 'Success' });
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
      const resetLink = `http://localhost:5173/reset-password?token=${token}`;

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
    console.log('Received Token:', token);
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token Payload:', decoded);
    const { Email } = decoded;

    // Find the user by email
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: 'Invalid token or user not found.' });
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








app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


