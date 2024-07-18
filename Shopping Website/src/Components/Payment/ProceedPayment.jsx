import React, {useState} from 'react';
import './ProceedPayment.css'
import mastercard from './cardImages/mastercard.jpg'
import visacard from './cardImages/visacard.jpg'
import paypal from './cardImages/paypal.jpg'


import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


import {CitySelect, CountrySelect, StateSelect, LanguageSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
























function ProceedPayment() {














    const [code, setCode] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [countryId, setCountryId] = useState('');
    let currentCountry = 'RW'

    const [content, setContent] = useState('orderSummary');
    const handleOrderSummaryClick = () => {
        setContent('orderSummary');
      };
    
      const handleCheckOutClick = () => {
        setContent('checkOut');
      };
    






























//------------------------------------------ PHONE AND COUNTRY CHOOSING SECTION-------------------------------------------------------
//------------------------------------------ PHONE AND COUNTRY CHOOSING SECTION-------------------------------------------------------
//------------------------------------------ PHONE AND COUNTRY CHOOSING SECTION-------------------------------------------------------






    // Helps us handling entering less phone digits
    const handlePhoneChange = (phoneNumber) => {
        if (!phoneNumber) {
            setCode(''); 
            setPhoneNumberError('This field cannot be empty!');
        } else {
            setCode(phoneNumber);
            if (phoneNumber.length < 13) {
                setPhoneNumberError('Enter a valid 10 digit phone number.');
            } else {
                setPhoneNumberError('');
            }
        }
    };
    





    // When an invalid country, the form doesnt accept it
    const handleCountryChange = (selectedCountry) => {
        setCountryId(selectedCountry.isoCode);
    };










































//------------------------------------------ CHECK OUT AND ORDER SUMMARY SECTION-------------------------------------------------------
//------------------------------------------ CHECK OUT AND ORDER SUMMARY SECTION-------------------------------------------------------
//------------------------------------------ CHECK OUT AND ORDER SUMMARY SECTION-------------------------------------------------------





    // Order summary content
    const orderSummary = (
        <div className='order_summary_container'>
            <div className='lower_summary'>
                <div className='items_container_summary'>
                    <div className='item_summary_row'>
                        <div className='img_and_name'>
                            <div className='img_summary'></div>
                            <div className='img_description_summary'>
                                <h3 className='item_name_summary'>Jordan 1 red</h3>
                                <p className='size_summary'>Size: 42</p>
                                <h5 className='quantity_number'>Quantity: 1</h5>
                            </div>
                        </div>
                        <div className='summary_price'>
                            <p className='dollar_price_summary'>$30</p>
                            <p className='price_in_rwf'>30,000 Frw</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='small_calculations'>
                <p className='items_word_summary'>Items: <span>5 item(s)</span></p>
                <p className='discount_word_summary'>Discount ($): <span>-30,000Frw (30)</span></p>
                <p className='shipping_word_summary'>Shipping fee ($): <span>10,000Frw (10)</span></p>
                <h3 className='Total_word_summary'>Total Price ($): <span>200,000Frw (200)</span></h3>
            </div>
        </div>
    );
    

    // Check out content
    const checkOut = (
        <div className='check_out_panel'>
            <div className='upper_check_out'>
                <h2 className='check_out_header'>Checkout</h2>
                <div className='card_images'>
                    <div className='mastercard'>
                        <img src={mastercard} alt="" />
                    </div>
                    <div className='visa'>
                        <img src={visacard} alt="" />
                    </div>
                    <div className='paypal'>
                        <img src={paypal} alt="" />
                    </div>
                </div>
            </div>
            <div className='lower_check_out_container'>
                <form action="" className='card_form'>
                    <div className='cardholder_name'>
                        <div className='first_name'>
                            <p className='indicator'>Cardholder name</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='card_number'>
                        <div className='first_name'>
                            <p className='indicator'>Card number</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='exp_and_cvc'>
                        <div className='first_name'>
                            <p className='indicator'>Expiry date</p>
                            <input type="text" placeholder='MM/YY'/>
                        </div>
                        <div className='last_name'>
                            <p className='indicator'>CVC</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='pay_now'>
                        <button className='pay_now_button'>Pay now</button>
                    </div>
                </form>
            </div>
        </div>
    );





















































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
                                    <CountrySelect 
                                        onChange={handleCountryChange} 
                                        placeHolder="Select Country" 
                                        className='country_select'
                                    />
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
                                    <PhoneInput placeholder="Enter phone number" 
                                    value={code} 
                                    onChange={handlePhoneChange} 
                                    defaultCountry={currentCountry}  
                                    className='phone_input'/>
                                    {phoneNumberError && <p className='error-text'>{phoneNumberError}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='right_part_pay'>
                <div className='upper_right_pay'>
                    <button 
                        className={`order_summary_button ${content === 'orderSummary' ? 'active' : ''}`}
                        onClick={handleOrderSummaryClick}>
                        Order summary &nbsp; <i class="fa fa-list-alt" aria-hidden="true"></i>
                    </button>

                    <button 
                        className={`check_out_button ${content === 'checkOut' ? 'active' : ''}`} 
                        onClick={handleCheckOutClick}>
                        Check out &nbsp; <i class="fa fa-credit-card" aria-hidden="true"></i>
                    </button>
                </div>
                <div className='lower_right_pay'>
                    {content === 'orderSummary' ? orderSummary : checkOut}
                </div>
            </div>
        </div>
    )


































    


    return ( 
        <>{Payment}</>
    );
}

export default ProceedPayment;

