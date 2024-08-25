import React, { useState, useEffect } from "react";
import "./Cookie.css";

function CookieFunction() {



  const [modal, setModal] = useState(false);

  
  
  // This checks localStorage when the component first loads to see if the user has already accepted or rejected cookies. If no consent is found, it shows the modal.
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setModal(true);
    }
  }, []);



  
  const acceptCookie = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setModal(false);
  };


  const rejectCookie = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setModal(false);
  };


  return (
    <>
      {modal && (
        <div className="cookie-modal-container">
          <div className="modal-content">
            <h2 className="cookie_header">Cookie Policy</h2>
            <p className="cookie_par">
            Our website uses essential cookies to improve your browsing experience and enhance functionality. 
            With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. 
            By clicking “Accept all”, you agree to our website's cookie use as described in our Cookie Policy. You can change your cookie settings 
            at any time in your browser settings.
            </p>
            <div className="cookie-buttons">
              <button className="close-modal" onClick={rejectCookie}> Reject </button>
              <button className="close-modal" onClick={acceptCookie}> Accept all </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieFunction;