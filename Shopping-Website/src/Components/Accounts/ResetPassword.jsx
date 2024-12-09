import React, { useState } from 'react';
import './Accounts.css';
import Dialog from './Dialogs/Dialog';



const ResetPasswordForm = () => {

  const [errors, setErrors] = useState({});

  const [password, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const [autoOpenDialog, setAutoOpenDialog] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const [loading, setLoading] = useState(false);



  const GlitchUrl = 'https://verve-users.glitch.me/api';
  const resetEndpoint = `${GlitchUrl}/reset-password`;








  const handleHidePasswordOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };

  const handleHidePasswordTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const showDialog = (message) => {
    setDialogMessage(message);
    setAutoOpenDialog(true);
    setIsDialogOpen(true);
  };
  







  const validateForm = () => {
    const newErrors = {};
    const BorderOne = document.querySelector('.rimwe');
    const BorderTwo = document.querySelector('.kabiri');

    if (password !== passwordTwo) {
      newErrors.passwordTwo = 'Your passwords must match!';
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

















   // RESET PASSWORD SECTION
  const handleFinalReset = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    setLoading(true);
  
    if (token) {
      try {
        const response = await fetch(resetEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, passwordTwo }),
        });
    
        const data = await response.json();
        setLoading(false);
        
        if (response.ok) {
          showDialog('Password has been reset successfully!!');
        } else {
          showDialog(`Error: ${data.message}`);
          window.close();
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error: Something went wrong. Please try again.');
      }
    }
    else {
      showDialog("You are trying to access the reset form without the token!");
      window.close();
    }  
  }

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    const BorderOne = document.querySelector('.rimwe');
    const BorderTwo = document.querySelector('.kabiri');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } 
    else {
      // navigate('/');
      // window.location.reload();
      setErrors({});
      BorderOne.style.borderColor = '';
      BorderTwo.style.borderColor = '';
      handleFinalReset();  
    }
  };





















  //RESET PASSWORD FORM COMPONENT
  const ResetForm = (
    <form className='Sign-up-form' onSubmit={handlePasswordReset}>
      <div className='two-a'>
        <p className='indicator'>Password</p>
        <div className='input_container for-password rimwe'>
          <input
            type={showPasswordOne ? 'text' : 'password'}
            placeholder='Enter password'
            name='FirstPassword'
            maxLength={20}
            value={password}
            onChange={(e) => setPasswordOne(e.target.value)}
            required
          />
          <div className='eye-container' type='button' onClick={handleHidePasswordOne}>
            {showPasswordOne ? <i className='fa-regular fa-eye-slash'></i> : <i className='fa-regular fa-eye'></i>}
          </div>
        </div>
        {errors.password && <p className='error'>{errors.password}</p>}
      </div>
      <div className='two-b'>
        <p className='indicator'>Confirm Password</p>
        <div className='input_container for-password kabiri'>
          <input
            type={showPasswordTwo ? 'text' : 'password'}
            placeholder='Confirm password'
            name='ConfPassword'
            maxLength={20}
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
            required
          />
          <div className='eye-container' type='button' onClick={handleHidePasswordTwo}>
            {showPasswordTwo ? <i className='fa-regular fa-eye-slash'></i> : <i className='fa-regular fa-eye'></i>}
          </div>
        </div>
        {errors.passwordTwo && <p className='error'>{errors.passwordTwo}</p>}
      </div>
      <div className='three'>
        <button className='account_button' type='submit' disabled={loading || isDialogOpen}>
          {loading ? <i className='fa-solid fa-spinner fa-spin'></i> : 'Reset password'}
        </button>
      </div>
    </form>
  );










  


  return (
    <div className="Account-parent">
        <div className='Form-container'>
            <div className='upper_part'>
                <h1 className='upper_part'>Password Reset</h1>
            </div>
            <div className='lower_part'>{ResetForm}</div>
            <div className='lower-part-renderer'></div>
        </div>
        <Dialog autoOpen={autoOpenDialog} message={dialogMessage} />
    </div>
  );
};

export default ResetPasswordForm;
