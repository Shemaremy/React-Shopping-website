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
                            <textarea type="text" />
                            <button>Send</button>
                        </form>
                    </div>
                </div>
                <div className="Middle_part_footer">
                   <div className="About_us_container">
                        <p className="About_us_header">About Us</p>
                    </div>
                    <div className="About_us_par_container">
                        <p className="about_us_p">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz. Hi</p>
                    </div>
                </div>
                <div className="Right_part_footer">
                    <div className="Contact_container">
                        <p className="contact_header">Contact:</p>
                    </div>
                    <div className="Phone_and_email_container">
                        <p className="phone">07830674289</p>
                        <p className="email">remyshema20@gmail.com</p>
                        <div className="Icons_container">
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Whatsapp</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Lower_part_footer"></div>
        </div>
    )
}

export default C; 