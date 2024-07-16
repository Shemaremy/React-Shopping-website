import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './ProceedPayment.css'
import { useState } from 'react';

function ProceedPayment() {

    const [value, setValue] = useState()





    // Payment content wrapper
    const Payment = (
        <div className='paying-wrapper'>
            <div className='left_part_pay'>
                <div className='upper_left_pay'>
                    <h1 className='address_details'>Address details</h1>
                    <p className='header_description'>Make sure to fill your address correctly, and reach out for our support if you don't get your order on time</p>
                </div>
                <div className='Form_section'>
                    <h2 className='upper_form_title'>Delivery address</h2>
                    <div className='address_form_container'>
                        <form action="" className='address_form'>
                            <div className='names_container'>
                                <div className='first_name'>
                                    <p className='indicator'>FIRST NAME</p>
                                    <input type="text" placeholder='ex: Shema'/>
                                </div>
                                <div className='last_name'>
                                    <p className='indicator'>LAST NAME</p>
                                    <input type="text" placeholder='ex: Remy'/>
                                </div>
                            </div>
                            <div className='street_container'>
                                <div className='first_name'>
                                    <p className='indicator'>STREET ADDRESS</p>
                                    <input type="text" placeholder='Airport Avenue (SAR Motor, KN 5 Rd, Kigali)'/>
                                </div>
                            </div>
                            <div className='city_zipcode_container'>
                                <div className='first_name'>
                                    <p className='indicator'>COUNTRY</p>
                                    <input type="text" placeholder='ex: Rwanda'/>
                                </div>
                                <div className='last_name'>
                                    <p className='indicator'>CITY</p>
                                    <input type="text" placeholder='ex: Kigali'/>
                                </div>
                                
                            </div>
                            <div className='country_container'>
                                <div className='first_name'>
                                    <p className='indicator'>EMAIL ADDRESS</p>
                                    <input type="text" placeholder='ex: remyshema20@gmail.com'/>
                                </div>
                            </div>
                            <div className='phone_container'>
                                <div className='first_name'>
                                    <p className='indicator'>PHONE NUMBER</p>
                                    <input type="text" placeholder='ex: (+250) 783 674 289'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='right_part_pay'></div>
        </div>
    )














    return ( 
        <>{Payment}</>
    );
}

export default ProceedPayment;

