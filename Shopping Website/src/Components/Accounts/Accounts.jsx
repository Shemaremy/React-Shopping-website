import {React, useState, useEffect} from 'react'
import './Accounts.css'
import Dialog from './Dialogs/Dialog';
import * as validator from 'email-validator';

function Accounts() {


  

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
  
  const signUpEndpoint = `${GlitchUrl}/users`;
  const loginEndpoint = `${GlitchUrl}/login`;
  const forgotEndpoint = `${GlitchUrl}/forgot`;















// Switching forms section
  const FORM_STATE = {
    LOGIN: 'login',
    SIGNUP: 'signup',
    FORGOT_PASSWORD: 'forgot_password'
  };
  const [formState, setFormState] = useState(FORM_STATE.LOGIN);
  
  const handleFormChange = (newState) => {
    setFormState(newState);
  };





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

  const handleHidePasswordOne = () => {
    setShowPasswordOne(!showPasswordOne);
  }

  const handleHidePasswordTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  }


















  // Form vallidation method
  const validateForm = () => {

    const newErrors = {};

    const BorderOne = document.querySelector('.rimwe');
    const BorderTwo = document.querySelector('.kabiri');

    if(password !== passwordTwo) {
      newErrors.passwordTwo = 'Your passwords must match sir!';
      BorderOne.style.borderColor = 'red';
      BorderTwo.style.borderColor = 'red';
    }

    if (password.length <= 8) {
      newErrors.password = 'Password must be at least 8 characters!';
      newErrors.passwordTwo = 'Password must be at least 8 characters!';
      BorderOne.style.borderColor = 'red';
      BorderTwo.style.borderColor = 'red';
    }
  
    
    
    

    return newErrors;
  };



  



  // SIGN UP SECTION
  const handleCreateUser = () => {
    const UsernameBorder = document.querySelector('.gatatu');
    const EmailBorder = document.querySelector('.kane');
    setLoading(true);

    async function registerUser() {

      try {
        const response = await fetch(signUpEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ UserName, Email, password }),
        });
    
        const data = await response.json();
        setLoading(false);
    
        if (response.ok) {
          UsernameBorder.style.borderColor = '';
          EmailBorder.style.borderColor = '';
          console.log('Success:', data);
          showDialog('Success: User registered successfully');
        } else {
          const errorMessage = data.message;
          if (errorMessage.includes("UserName")) {
            showDialog("Username already exists");
            UsernameBorder.style.borderColor = 'red';
          } else if (errorMessage.includes("Email")) {
            showDialog("Email already exists");
            UsernameBorder.style.borderColor = '';
            EmailBorder.style.borderColor = 'red';
          }
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error: Something went wrong. Please try again.');
      }
    }
    registerUser();
 
  }
  
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    const BorderOne = document.querySelector('.rimwe');
    const BorderTwo = document.querySelector('.kabiri');
    const EmailBorder = document.querySelector('.kane');
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      //Email validation
      if (!validateEmail(Email)) {
        newErrors.Email = 'Email is invalid';
        EmailBorder.style.borderColor = 'red';
      } else {
        EmailBorder.style.borderColor = '';
      }
    } 
    else {
      // navigate('/');
      // window.location.reload();
      setErrors({});
      BorderOne.style.borderColor = '';
      BorderTwo.style.borderColor = '';
      EmailBorder.style.borderColor = '';
      handleCreateUser();  
    }
  }



  // Validate email
  const validateEmail = (email) => {
    return validator.validate(email);
  };
  





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
          showDialog('Login successfull!!');
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


  


  // FORGOT PASSWORD SECTION
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    async function forgotPassword() {
      try {
        const response = await fetch(forgotEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Email: loginIdentifier }),
        });
    
        const data = await response.json();
        setLoading(false);
    
        if (response.ok) {
          showDialog('Link sent successfully! Check your inbox.');
          console.log('Success:', data);
        } else {
          showDialog("Email was not found in our database.");
          console.error('Sending failed:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error: Something went wrong. Please try again.');
      }
    }
    forgotPassword();
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



  const SignUpForm = (
    <form className='Sign-up-form' onSubmit={handleSignUpSubmit}>
      <div className='one'>
        <p className='indicator'>Username</p>
        <div className='input_container gatatu'>
          <input type="text" 
            placeholder='Enter a preferred username' 
            name='Name'
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className='two'>
        <p className='indicator'>Email</p>
        <div className='input_container kane'>
          <input type="text" 
            placeholder='Enter your email address' 
            name='Email'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {errors.Email && <p className='error'>{errors.Email}</p>}
      </div>
      <div className='two-a'>
        <p className='indicator'>Password</p>
        <div className='input_container for-password rimwe'>
          <input type={showPasswordOne ? "text" : "password"} 
            placeholder='Enter password' 
            name='FirstPassword'
            maxLength={20}
            value={password}
            onChange={(e) => setPasswordOne(e.target.value)}
            required
          />
          <div className='eye-container' type="button" onClick={handleHidePasswordOne}>
            {showPasswordOne ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
          </div>
        </div>
        {errors.password && <p className='error'>{errors.password}</p>}
      </div>
      <div className='two-b'>
        <p className='indicator'>Confirm Password</p>
        <div className='input_container for-password kabiri'>
          <input type={showPasswordTwo ? "text" : "password"} 
            placeholder='Confirm password' 
            name='ConfPassword'
            maxLength={20}
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
            required
          />
          <div className='eye-container' type="button" onClick={handleHidePasswordTwo}>
            {showPasswordTwo ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
          </div>
        </div>
        {errors.passwordTwo && <p className='error'>{errors.passwordTwo}</p>}
      </div>
      <div className='three'>
        <button className='account_button' type='submit' disabled={loading || isDialogOpen}>
           {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Sign up'}
        </button>
      </div>
    </form>
  );



  const ForgotPasswordForm = (
    <form action="" className='login_form' onSubmit={handleForgotSubmit}>
      <div className='one'>
        <p className='indicator'>Email</p>
        <div className='input_container kane'>
          <input type="text" 
            placeholder='Enter your email to receive a verification link' 
            name='Email'
            value={loginIdentifier}
            onChange={(e) => setLoginIdentifier(e.target.value)}
            maxLength={25}
            required
          />
        </div>
      </div>
      <div className='three'>
        <button className='account_button' type='submit' disabled={loading || isDialogOpen}>
          {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Send link'}
        </button>
      </div>
    </form>
  );









  
  return (
    <div className="Account-parent">
      <div className='Form-container'>
        <div className='upper_part'>
          <h1 className='upper_part'>
            {formState === FORM_STATE.LOGIN && 'Login'}
            {formState === FORM_STATE.SIGNUP && 'Sign up'}
            {formState === FORM_STATE.FORGOT_PASSWORD && 'Forgot Password'}
          </h1>
        </div>
        
        <div className='lower_part'>
          {formState === FORM_STATE.LOGIN && LoginForm}
          {formState === FORM_STATE.SIGNUP && SignUpForm}
          {formState === FORM_STATE.FORGOT_PASSWORD && ForgotPasswordForm}
          <div className='lower-part-renderer'>
            {formState === FORM_STATE.LOGIN ? 
            ( <div className='rendered-container'> 
                <p>Forgot &nbsp; <a href="#" onClick={() => handleFormChange(FORM_STATE.FORGOT_PASSWORD)}> Password </a>?</p>
                <p>Don't have an account? &nbsp;<a href="#" onClick={() => handleFormChange(FORM_STATE.SIGNUP)}>Sign up</a></p>              
              </div>
            ) : formState === FORM_STATE.SIGNUP ?
            (<p>Already have an account? &nbsp; <a href="#" onClick={() => handleFormChange(FORM_STATE.LOGIN)}>Sign in</a></p>)
              : formState === FORM_STATE.RESET_PASSWORD ?
             (<></>)
             : 
             (<p>Remember your password? &nbsp; <a href="#" onClick={() => handleFormChange(FORM_STATE.LOGIN)}>Sign in</a></p>)
            }
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


export default Accounts
