import React, { useState, useEffect } from "react";
import "./Dialog.css";
import { useNavigate } from 'react-router-dom';

function Dialog({ autoOpen = false, message = '', token }) {

  const [modal, setModal] = useState(autoOpen);
  const navigate = useNavigate();



  const toggleModal = () => {
    setModal(!modal);
    if (message === "Password has been reset successfully!!") {
      window.close();
    }
    
    else if (message === "Login successfull!!") {
      localStorage.setItem('token', token);
      if (token) {
        navigate('/');
      } else {
        alert("Failed to store the token");
      }
    }
    
    else {
      window.location.reload();
    }
  };




  
  useEffect(() => {
    if (autoOpen) {
      setModal(true); 
    }
  }, [autoOpen]);
  
  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);



  

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <i className="fa-regular fa-circle-check"></i>
            <h2 className="message-header">{message ? message : "Hello Modal"}</h2>
            <button className="confirm-modal" onClick={toggleModal}> OK </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dialog;
