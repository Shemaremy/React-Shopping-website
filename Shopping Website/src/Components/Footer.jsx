import React from "react";
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

function C(){ 
    return(
        <div className="C">
            <div className="Upper_part_footer">
                <div className="Left_part_footer">
                    <div className="Tell_us_container">
                        <p className="Tell_us_par">Tell us you were here / report an issue</p>
                    </div>
                    <div className="Form_container">
                        <form action="">
                            <input type="text" />
                            <input type="text" />
                            <button className="Send_footer_button">Send</button> 
                        </form>
                    </div>
                </div>
                <div className="Middle_part_footer">
                   <div className="About_us_container">
                        <p className="About_us_header">About Us</p>
                    </div>
                    <div className="About_us_par_container">
                        <p className="about_us_p">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz. Hi ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz. Hi </p>
                    </div>
                </div>
                <div className="Right_part_footer">
                    <div className="Contact_container">
                        <p className="contact_header">Contact:</p>
                    </div>
                    <div className="Phone_and_email_container">
                        <p className="phone">
                            <i class="tel_ico fa fa-phone" aria-hidden="true"></i>07830674289
                        </p>
                        <p className="email">
                            <i class="mail_ico fa fa-envelope" aria-hidden="true"></i>remyshema20@gmail.com                            
                        </p>
                        <div className="Icons_container">
                            <p className="Social_media_border"><i class="Instagram fab fa-instagram" aria-hidden="true"></i></p>
                            <p className="Social_media_border"><i class="Twitter fab fa-twitter" aria-hidden="true"></i></p>
                            <p className="Social_media_border"><i class="Whatsapp fab fa-whatsapp" aria-hidden="true"></i></p>
                            <p className="Social_media_border"><i class="Linkedin fab fa-linkedin" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Lower_part_footer">
                <p className="Copyright_par">Copyright © 2024, Verve. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default C; 