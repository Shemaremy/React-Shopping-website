import React, { useState, useEffect } from "react";
import "./Dialog.css";
import { useNavigate } from 'react-router-dom';

function Dialog({ autoOpen = false, message = '', token, adminToken, onClose }) {

  const [modal, setModal] = useState(autoOpen);
  const [mark, setMark] = useState(true);
  const navigate = useNavigate();

  const errorMessages = [
    "Invalid password!",
    "There is no account with username or email:",
    "Email was not found in our database.",
    "Username already exists",
    "Email already exists",
    "Error",
    "You are trying to access the reset form"
  ];


  const determineMark = (message) => {
    if (errorMessages.some(substring => message.includes(substring))) {
      setMark(false);
    } else {
      setMark(true);
    }
  }



    // Give the admin short duration to access the portal
  const handleAdminToken = () => {
    const expiryTime = new Date().getTime() + 600000; // Set expiry time to 10 minutes

    localStorage.setItem('adminToken', adminToken);
    localStorage.setItem("adminTokenExpiry", expiryTime.toString());


    if (adminToken) {
      navigate('/updator');
    } else {
      alert("Failed to store the token");
    }
  }





  const toggleModal = () => {
    if (onClose) onClose();

    if (message === "Password has been reset successfully!!") {
      window.close();
    } else if (message === "Login successfull!!") {
      localStorage.setItem('token', token);
      if (token) {
        navigate('/');
      } else {
        alert("Failed to store the token");
      }
    } else if (message === 'Welcome back Admin!!') {
        handleAdminToken();
    } else if (errorMessages.some(substring => message.includes(substring))) {
      setModal(!modal);
    } else {
      window.location.reload();
    }
  };



  
  useEffect(() => {
    if (autoOpen) {
      determineMark(message);
      setModal(true); 
    }
  }, [autoOpen, message]); 



  

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="dialog-content">
            {mark ? <i className="fa-regular fa-circle-check dialog-mark"></i> : <i className="fa-solid fa-circle-exclamation dialog-mark"></i>}
            <h2 className="message-header">{message ? message : "Hello Modal"}</h2>
            <button className="confirm-modal" onClick={toggleModal}> OK </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dialog;
