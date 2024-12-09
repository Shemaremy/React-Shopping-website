import React, {useState} from "react";
import './Footer.css';
import Dialog from "./Accounts/Dialogs/Dialog";


function C(){ 


    const [loading, setLoading] = useState(false);
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    const [autoOpenDialog, setAutoOpenDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');



    // Dialog boxes for the message 
    const showDialog = (message) => {
        setDialogMessage(message);
        setAutoOpenDialog(true);
    };







    const handleEmailSend = (e) => {
        e.preventDefault();
        setLoading(true);
        async function loginUser() {
            try {
              const response = await fetch('https://verve-users.glitch.me/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Email, Message}),
              });
          
              const data = await response.json();
              setLoading(false);
          
              if (response.ok) {
                showDialog('Success: Your message was sent to us successfully, Thank you!');
              } else {
                showDialog(`Error: ${data.message}`);
                console.error('Login failed:', data.message);
              }
            } catch (error) {
              console.error('Error:', error);
              alert('Error: Something went wrong. Please try again.');
            }
        }
        loginUser();
    };
    
    return(
        <div className="C">
            <div className="Upper_part_footer">
                <div className="Left_part_footer">
                    <div className="Tell_us_container">
                        <p className="Tell_us_par">Tell us you were here / report an issue</p>
                    </div>
                    <div className="Form_container">
                        <form onSubmit={handleEmailSend}>
                            <input className="footer_input" 
                                type="text" placeholder="Email"
                                name="Email"
                                value={Email} 
                                onChange={(e) => setEmail(e.target.value)}
                                maxLength={60}
                                required
                            />
                            <input className="footer_input" 
                                type="text" placeholder="Your message"
                                name="Message"
                                value={Message} 
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={500}
                                required
                            />
                            <button className="Send_footer_button" type="submit">
                                {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Send'}
                            </button> 
                        </form>
                    </div>
                </div>
                <div className="Middle_part_footer">
                   <div className="About_us_container">
                        <p className="About_us_header">About Us</p>
                    </div>
                    <div className="About_us_par_container">
                        <p className="about_us_p">Verve is an independent company dedicated to revolutionizing the e-commerce landscape. Here, we curate a diverse selection of products, each chosen for its exceptional quality, style, and innovation. Our commitment to providing unparalleled shopping experiences drives us to constantly evolve and adapt to meet the ever-changing needs of our customers. With a focus on individuality and customer satisfaction, we invite you to explore our platform and embark on a journey of discovery, where every purchase tells a unique story. Join us at Verve and experience the true essence of online shopping.</p>
                    </div>
                </div>
                <div className="Right_part_footer">
                    <div className="Contact_container">
                        <p className="contact_header">Contact:</p>
                    </div>
                    <div className="Phone_and_icons_container">
                        <div className="phone_and_email_container">
                            <p className="phone">
                                <i className="tel_ico fa fa-phone" aria-hidden="true"></i>+250 783 674 289
                            </p>
                            <p className="email">
                                <i className="mail_ico fa fa-envelope" aria-hidden="true"></i>remyshema20@gmail.com                            
                            </p>
                        </div>
                        <div className="Icons_container">
                            <a href="https://www.instagram.com/shema.remy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="Social_media_border"><i className="Instagram fab fa-instagram" aria-hidden="true"></i></a>
                            <a href="https://www.instagram.com/shema.remy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="Social_media_border"><i className="Twitter fa-brands fa-x-twitter"></i></a>
                            <a href="https://discord.com/users/928425971936292874" className="Social_media_border"><i className="Discord fa-brands fa-discord"></i></a>
                            <a href=" https://linkedin.com/in/shema-remy-ba3229288" className="Social_media_border"><i className="Linkedin fab fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Lower_part_footer">
                <p className="Copyright_par">Copyright © 2024, Verve. All Rights Reserved</p>
            </div>
            <Dialog autoOpen={autoOpenDialog} message={dialogMessage} />
        </div>
    )
}

export default C; 