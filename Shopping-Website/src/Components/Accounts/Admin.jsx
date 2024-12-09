import {React, useState, useEffect} from 'react'
import './Accounts.css'
import Dialog from './Dialogs/Dialog';
import * as validator from 'email-validator';

function Admin() {


  

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);


  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');

  const [password, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');


  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [autoOpenDialog, setAutoOpenDialog] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState(null);
  


  // Fetch URLs
  const GlitchUrl = 'https://verve-users.glitch.me/api';
  const loginEndpoint = `${GlitchUrl}/adminlogin`;




  // Dialog boxes for the message 
  const showDialog = (message) => {
    setDialogMessage(message);
    setAutoOpenDialog(true);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setAutoOpenDialog(false);
    setIsDialogOpen(false);
  };
  











  const handleHidePassword = () => {
    setShowPassword(!showPassword)
  }























  // LOGIN SECTION
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    async function loginUser() {
      try {
        const response = await fetch(loginEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier: loginIdentifier, password: loginPassword }),
        });
    
        const data = await response.json();
        setLoading(false);
    
        if (response.ok) {
          showDialog('Welcome back Admin!!');
          localStorage.setItem('username', data.username);
          setToken(data.token);
        } else {
          showDialog(data.message);
          console.error('Login failed:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error: Something went wrong. Please try again later.');
      }
    }
    loginUser();
    

  };


  







  







  // --------------------------------- FORMS SECTION ----------------------------------------------



  const LoginForm = (
    <form action="" className='login_form' onSubmit={handleLoginSubmit}>
      <div className='one'>
        <p className='indicator'>Email / Username</p>
        <div className='input_container'>
          <input type="text" 
            placeholder='Enter your username or email' 
            name='Email'
            value={loginIdentifier}
            onChange={(e) => setLoginIdentifier(e.target.value)}
            maxLength={25}
            required
          />
        </div>
      </div>
      <div className='two '>
        <p className='indicator'>Password</p>
        <div className='input_container for-password'>
          <input type={showPassword ? "text" : "password"} 
            placeholder='Enter your password' 
            name='Password'
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            maxLength={20}
            required
          />
          <div className='eye-container' type="button" onClick={handleHidePassword}>
            {showPassword ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
          </div>
        </div>
      </div>
      <div className='three'>
        <button className='account_button' type='submit' disabled={loading || isDialogOpen}>
          {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Sign in'}
        </button>
      </div>
    </form>
  );









  
  return (
    <div className="Account-parent">
      <div className='Form-container'>
        <div className='upper_part'>
          <h1 className='upper_part'> Login as an Admin</h1>
        </div>
        <div className='lower_part'>
            {LoginForm}
          <div className='lower-part-renderer'>
             <div className='rendered-container'>
                <p><i className="fa-solid fa-circle-exclamation"></i> &nbsp;To login as an admin, you must already have an account !</p>             
              </div>
          </div>
        </div>
      </div>
      <Dialog autoOpen={autoOpenDialog} 
              message={dialogMessage} 
              token={token}
              onClose={handleDialogClose}
      />
    </div>
  )
}


export default Admin
