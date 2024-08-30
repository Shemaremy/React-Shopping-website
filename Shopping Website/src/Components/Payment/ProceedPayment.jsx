import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


import './ProceedPayment.css'
import mastercard from './cardImages/mastercard.jpg'
import visacard from './cardImages/visacard.jpg'
import paypal from './cardImages/paypal.jpg'


import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


import {CitySelect, CountrySelect, StateSelect, LanguageSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";























































function ProceedPayment() {




    const [countryId, setCountryId] = useState('');
    let currentCountry = 'RW'

    const location = useLocation();
    const { currentProduct, totalPrice, selectedSizes } = location.state || { currentProduct: [], totalPrice: 0, selectedSizes: {} };

    

    const [content, setContent] = useState('orderSummary');
    const handleOrderSummaryClick = () => {
        setContent('orderSummary');
      };
    
      const handleCheckOutClick = () => {
        setContent('checkOut');
      };
    

















































      












    





    






































































































//-------------------------------------------------- SUMMATIONS SECTION ------------------------------------------------------------
//-------------------------------------------------- SUMMATIONS SECTION ------------------------------------------------------------
//-------------------------------------------------- SUMMATIONS SECTION ------------------------------------------------------------




// Calculating total number of items to be purchased
const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    currentProduct.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };
  const totalQuantity = calculateTotalQuantity();
  




  // Calculating the discount
  const calculateDiscount = (totalPrice) => {
    let theDiscount = 0;
    if (totalPrice > 100000 && totalPrice <= 200000) {
      theDiscount = 10000;
    }

    else if (totalPrice > 200000) {
        theDiscount = 20000;
    }

    return theDiscount;
  };
  const discount = calculateDiscount(totalPrice);
  const formattedDiscount = discount === 0 ? '0 Frw ($0)' : `-${discount / 1000},000Frw ($${discount/1000})`;
  



  // Calculating the shipping fee
  const calculateShippingFee = (totalPrice) => {
    let theShipping = 0;
    if (totalPrice > 200000) {
        theShipping = 0;
    }

    else if (totalPrice <= 200000 && totalPrice > 70000) {
        theShipping = 10000;
    }

    else if (totalPrice <= 70000 && totalPrice > 0) {
        theShipping = 5000;
    }

    return theShipping;
  };

  const shippingFee = calculateShippingFee (totalPrice);
  const formattedShippingFee = shippingFee === 0 ? '0 Frw ($0)' : `+ ${shippingFee / 1000},000 Frw ($${shippingFee/1000})`;
  




  // Final price where I deducted the discount and add the shipping fee
  const finalPrice = (totalPrice - discount) + shippingFee;










































































































//---------------------------------------------- ORDER SUMMARY SECTION ----------------------------------------------------------------
//---------------------------------------------- ORDER SUMMARY SECTION ----------------------------------------------------------------
//---------------------------------------------- ORDER SUMMARY SECTION ----------------------------------------------------------------



    // Order summary content
    const orderSummary = (
        <div className='order_summary_container'>
            <div className='lower_summary'>
                <div className='items_container_summary'>
                    {currentProduct && currentProduct.map((item, index) => (
                        <div key={index} className='item_summary_row'>
                            <div className='img_and_name'>
                                <div className='img_summary'>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className='img_description_summary'>
                                    <h3 className='item_name_summary'>{item.name}</h3>
                                    <p className='size_summary'>Size: {selectedSizes[index] || 'Not selected'}</p>
                                    <h5 className='quantity_number'>Quantity: {item.quantity}</h5>
                                </div>
                            </div>
                            <div className='summary_price'>
                                <p className='dollar_price_summary'>${(item.price / 1000)}</p>
                                <p className='price_in_rwf'>{(item.price / 1000)},000 Frw</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='small_calculations'>
                <p className='items_word_summary'>Items: <span>{totalQuantity} item(s)</span></p>
                <p className='sub_total_summary'>SubTotal ($): <span>{totalPrice / 1000},000Frw (${totalPrice/1000})</span></p>
                <p className='discount_word_summary'>Discount ($): <span>{formattedDiscount}</span></p>
                <p className='shipping_word_summary'>Shipping fee ($): <span>{formattedShippingFee}</span></p>
                <h3 className='Total_word_summary'>Total Price ($): <span>{(finalPrice) / 1000},000Frw (${(finalPrice) / 1000})</span></h3>
            </div>
        </div>
    );
    





























































































































//---------------------------------------------- CHECK OUT SECTION ----------------------------------------------------------------
//---------------------------------------------- CHECK OUT SECTION ----------------------------------------------------------------
//---------------------------------------------- CHECK OUT SECTION ----------------------------------------------------------------






//-------------------------------------- CHECK OUT FORM VALLIDATION-----------------------------------------------

const [FirstName, setFirstName] = useState('');
const [Email, setEmail] = useState('');
const [PhoneNumber, setPhoneNumber] = useState('');




const [cardholderName, setCardholderName] = useState('');
const [cardNumber, setCardNumber] = useState('');
const [expiryDate, setExpiryDate] = useState('');
const [cvc, setCvc] = useState('');
const [errors, setErrors] = useState({});
const [showCardNumber, setShowCardNumber] = useState(false);




const validateForm = () => {

    const newErrors = {};







//----------- Address Fields ----------------------
 
const addressFields = {
    FirstName: document.querySelector('input[name="FirstName"]'),
    Email: document.querySelector('input[name="EmailAddress"]'),
    PhoneNumber: document.querySelector('input[name="PhoneNumber"]'),

    FirstName1: document.querySelector('input[name="FirstName1"]'),
    Email1: document.querySelector('input[name="EmailAddress1"]'),
    PhoneNumber1: document.querySelector('input[name="PhoneNumber1"]')
};








//----------- Check out Fields ----------------------


const checkoutFields = {
    cardholderName: document.querySelector('input[name="cardholderName"]'),
    cardNumber: document.querySelector('input[name="cardNumber"]'),
    expiryDate: document.querySelector('input[name="expiryDate"]'),
    cvc: document.querySelector('input[name="cvc"]'),

    cardholderName1: document.querySelector('input[name="cardholderName1"]'),
    cardNumber1: document.querySelector('input[name="cardNumber1"]'),
    expiryDate1: document.querySelector('input[name="expiryDate1"]'),
    cvc1: document.querySelector('input[name="cvc1"]')
};




Object.values(addressFields).forEach(field => field.style.borderColor = '');
Object.values(checkoutFields).forEach(field => field.style.borderColor = '');



//------------------ Address form ---------------------------

if(!FirstName) {
    newErrors.FirstName = 'Fist name must be filled sir!';
    addressFields.FirstName.style.borderColor = 'red';
    addressFields.FirstName1.style.borderColor = 'red';
}

if(!Email) {
    newErrors.Email = 'Email Address must be filled sir!';
    addressFields.Email.style.borderColor = 'red';
    addressFields.Email1.style.borderColor = 'red';
}

if(!PhoneNumber) {
    newErrors.PhoneNumber = 'Your phone number must be filled!';
    addressFields.PhoneNumber.style.borderColor = 'red';
    addressFields.PhoneNumber1.style.borderColor = 'red';
}


    

    




//---------------------- Payment form ------------------------------

if (!cardholderName) {
    newErrors.cardholderName = 'Cardholder name must be filled';
    checkoutFields.cardholderName.style.borderColor = 'red';
    checkoutFields.cardholderName1.style.borderColor = 'red';
}

if (!cardNumber) {
    newErrors.cardNumber = 'Card number must be filled';
    checkoutFields.cardNumber.style.borderColor = 'red';
    checkoutFields.cardNumber1.style.borderColor = 'red';
} else if (cardNumber.length !== 16) {
    newErrors.cardNumber = 'Card number must be 16 digits';
    checkoutFields.cardNumber.style.borderColor = 'red';
    checkoutFields.cardNumber1.style.borderColor = 'red';
}

if (!expiryDate) {
    newErrors.expiryDate = 'Expiry date must be filled';
    checkoutFields.expiryDate.style.borderColor = 'red';
    checkoutFields.expiryDate1.style.borderColor = 'red';
}

if (!cvc) {
    newErrors.cvc = 'CVC must be filled';
    checkoutFields.cvc.style.borderColor = 'red';
    checkoutFields.cvc1.style.borderColor = 'red';
}

    return newErrors;
};














// When submitting
const navigate = useNavigate();
const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
    } else {
        console.log('Processing payment...');
        navigate('/');
        setErrors({});
    }
};





//----------------------------- Address form -------------------------------

const handleFirstNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
        setFirstName(value);

        // Clear the error for FirstName and reset the border color
        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors.FirstName;
            return newErrors;
        });

        // Reset the border color
        const firstNameInput = document.querySelector('input[name="FirstName"]');
        const firstNameInput1 = document.querySelector('input[name="FirstName1"]');
        if (firstNameInput) {
            firstNameInput.style.borderColor = '';
        }
        if (firstNameInput1) {
            firstNameInput1.style.borderColor = '';
        }
    }
};




const handleEmailChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
        setEmail(value);

        // Clear the error for Email and reset the border color
        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors.Email;
            return newErrors;
        });

        // Reset the border color
        const emailInput = document.querySelector('input[name="EmailAddress"]');
        if (emailInput) {
            emailInput.style.borderColor = '';
        }

        const emailInput1 = document.querySelector('input[name="EmailAddress1"]');
        if (emailInput1) {
            emailInput1.style.borderColor = '';
        }
    }
};




const handlePhoneChange = (value) => {

    setPhoneNumber(value);


    if (value && value.length < 13) {

        setErrors(prevErrors => ({
            ...prevErrors,
            PhoneNumber: 'Enter a 10 digit valid phone number!'
        }));

        const phoneInput = document.querySelector('input[name="PhoneNumber"]');
        if (phoneInput) {
            phoneInput.style.borderColor = 'red';
        }

    }
    
    else {

        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors.PhoneNumber;
            return newErrors;
        });

        const phoneInput = document.querySelector('input[name="PhoneNumber"]');
        if (phoneInput) {
            phoneInput.style.borderColor = '';
        }

        const phoneInput1 = document.querySelector('input[name="PhoneNumber1"]');
        if (phoneInput1) {
            phoneInput1.style.borderColor = '';
        }
    }

};




















// --------------------------------- Card Form -----------------------------------


// Handling accepting only letters and not numbers
const handleCardholderNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
        setCardholderName(value);

        // Clear the error for CardholderName and reset the border color
        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors.cardholderName;
            return newErrors;
        });

        // Reset the border color
        const cardholderNameInput = document.querySelector('input[name="cardholderName"]');
        if (cardholderNameInput) {
            cardholderNameInput.style.borderColor = '';
        }
    }
};




// Handling accepting only numbers
const handleCardNumberChange = (e) => {
    const value = e.target.value;
    
    if (/^\d*$/.test(value)) {
        setCardNumber(value);

        if (value.length < 16 && value.length > 0) {
            setErrors(prevErrors => ({
                ...prevErrors,
                cardNumber: 'Enter a valid 16 digit card number!'
            }));
            
            const cardNumberInput = document.querySelector('input[name="cardNumber"]');
            if (cardNumberInput) {
                cardNumberInput.style.borderColor = 'red';
            }
        } else {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors.cardNumber;
                return newErrors;
            });

            const cardNumberInput = document.querySelector('input[name="cardNumber"]');
            if (cardNumberInput) {
                cardNumberInput.style.borderColor = '';
            }
        }
    } else {
        setErrors(prevErrors => ({
            ...prevErrors,
            cardNumber: 'Please enter only numeric values!'
        }));
    }
};




// Handle expiry year by where I must only accept digits, no 5 numbers accepted,...
const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length > 2) {
        let month = parseInt(value.substring(0, 2), 10);

        if (month < 1 || month > 12) {
            value = '12'; // Restrict month to be between 1 and 12
        }
    
        let year = value.substring(2, 4);
        value = `${value.substring(0, 2)}/${year}`;
    }

    
    setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.expiryDate;
        return newErrors;
    });

    const expiryDateInput = document.querySelector('input[name="expiryDate"]');
    if (expiryDateInput) {
        expiryDateInput.style.borderColor = '';
    }

    setExpiryDate(value);

};



// CVC change handlin
const handleCVCChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
        setCvc(value);

        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors.cvc;
            return newErrors;
        });

        const cvcInput = document.querySelector('input[name="cvc"]');
        if (cvcInput) {
            cvcInput.style.borderColor = '';
        }
    }
};

























































































































//------------------------------------- Check out content ------------------------------------------------
//------------------------------------- Check out content ------------------------------------------------
//------------------------------------- Check out content ------------------------------------------------

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
                <form action="" className='card_form' onSubmit={handleSubmit}>
                    <div className='cardholder_name'>
                        <div className='first_name'>
                            <p className='paym-indicator'>Cardholder name</p>
                            <input type="text" placeholder='ex: Shema Remy' 
                                value={cardholderName} 
                                name="cardholderName"
                                onChange={handleCardholderNameChange}
                            />
                            {errors.cardholderName && <p className='error'>{errors.cardholderName}</p>}
                        </div>
                    </div>
                    <div className='card_number'>
                        <div className='first_name'>
                            <p className='paym-indicator'>Card number</p>
                            <input type={showCardNumber ? "text" : "password"} placeholder='1234-5678-9012-3456'
                                value={cardNumber}
                                name="cardNumber"
                                onChange={handleCardNumberChange}
                                maxLength="16"
                            />
                            <div className='see-container' type="button" onClick={() => setShowCardNumber(!showCardNumber)}>
                                {showCardNumber ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                            </div>
                            {errors.cardNumber && <p className='error'>{errors.cardNumber}</p>}
                        </div>
                    </div>
                    <div className='exp_and_cvc'>
                        <div className='first_name'>
                            <p className='paym-indicator'>Expiry date</p>
                            <input
                                type="text"
                                placeholder='MM/YY'
                                value={expiryDate}
                                name="expiryDate"
                                onChange={handleExpiryDateChange}
                                maxLength="5"
                            />
                            {errors.expiryDate && <p className='error'>{errors.expiryDate}</p>}
                        </div>
                        <div className='last_name'>
                            <p className='paym-indicator'>CVC</p>
                            <input
                                type="text"
                                placeholder='CVC'
                                value={cvc}
                                name="cvc"
                                onChange={handleCVCChange}
                                maxLength="4"
                            />
                            {errors.cvc && <p className='error'>{errors.cvc}</p>}
                        </div>
                    </div>
                    <div className='pay_now'>
                        <button className='pay_now_button' type='submit'>Pay now</button>
                    </div>
                </form>

                <div className='mobile_payment_section'>
                    <form action="" className='mobile-payment-form' onSubmit={handleSubmit}>
                        <div className='one-1'>
                            <input type="text" placeholder='Cardholder name' 
                                value={cardholderName} 
                                name="cardholderName1"
                                onChange={handleCardholderNameChange}
                            />
                            {errors.cardholderName && <p className='error'>{errors.cardholderName}</p>}
                        </div>
                        <div className='one-2'>
                            <input type={showCardNumber ? "text" : "password"} placeholder='Card number'
                                value={cardNumber}
                                name="cardNumber1"
                                onChange={handleCardNumberChange}
                                maxLength="16"
                            />
                            <div className='see-container' type="button" onClick={() => setShowCardNumber(!showCardNumber)}>
                                {showCardNumber ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                            </div>
                            {errors.cardNumber && <p className='error'>{errors.cardNumber}</p>}
                        </div>
                        <div className='one-3'>
                            <input
                                type="text"
                                placeholder='Expiration period  ( MM/YY )'
                                value={expiryDate}
                                name="expiryDate1"
                                onChange={handleExpiryDateChange}
                                maxLength="5"
                            />
                            {errors.expiryDate && <p className='error'>{errors.expiryDate}</p>}
                        </div>
                        <div className='one-4'>
                            <input
                                type="text"
                                placeholder='CVC'
                                value={cvc}
                                name="cvc1"
                                onChange={handleCVCChange}
                                maxLength="4"
                            />
                            {errors.cvc && <p className='error'>{errors.cvc}</p>}
                        </div>
                        <div className='one-5'>
                            <button className='pay_now_button' type='submit'>Pay now</button>
                        </div>
                    </form>
                </div>
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
                        <form action="" className='address_form' onSubmit={handleSubmit}>
                            <div className='names_container'>
                                <div className='first_name'>
                                    <p className='paym-indicator'>FIRST NAME</p>
                                    <input type="text" 
                                        placeholder='ex: Shema'
                                        value={FirstName}
                                        name='FirstName'
                                        onChange={handleFirstNameChange}
                                        maxLength="20"
                                    />
                                    {errors.FirstName && <p className='error'>{errors.FirstName}</p>}
                                </div>
                                <div className='last_name'>
                                    <p className='paym-indicator'>LAST NAME</p>
                                    <input type="text" placeholder='ex: Remy' maxLength="20"/>
                                </div>
                            </div>
                            <div className='street_container'>
                                <div className='first_name'>
                                    <p className='paym-indicator'>STREET ADDRESS</p>
                                    <input type="text" placeholder='Airport Avenue (SAR Motor, KN 5 Rd, Kigali)'/>
                                </div>
                            </div>
                            <div className='city_zipcode_container'>
                                <div className='first_name'>
                                    <p className='paym-indicator'>COUNTRY</p>
                                    <CountrySelect
                                        value={countryId}
                                        placeHolder="Select Country" 
                                        className='country_select'
                                    />
                                </div>
                                <div className='last_name'>
                                    <p className='paym-indicator'>CITY</p>
                                    <input type="text" placeholder='ex: Kigali'/>
                                </div>
                                
                            </div>
                            <div className='country_container'>
                                <div className='first_name'>
                                    <p className='paym-indicator'>EMAIL ADDRESS</p>
                                    <input type="text" 
                                        placeholder='ex: remyshema20@gmail.com'
                                        value={Email}
                                        name='EmailAddress'
                                        onChange={handleEmailChange}
                                    />
                                    {errors.Email && <p className='error'>{errors.Email}</p>}
                                </div>
                            </div>
                            <div className='phone_container'>
                                <div className='first_name'>
                                    <PhoneInput placeholder="Enter phone number" 
                                        value={PhoneNumber}
                                        name="PhoneNumber" 
                                        onChange={handlePhoneChange} 
                                        defaultCountry={currentCountry}  
                                        className='phone_input'
                                        maxLength="12"
                                    />
                                    {errors.PhoneNumber && <p className='error'>{errors.PhoneNumber}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mobile_form_section'>
                    <form action="" className='mobile-form' onSubmit={handleSubmit}>
                        <div className='one'>
                            <input type="text"
                                placeholder='First name'
                                value={FirstName}
                                name="FirstName1"
                                onChange={handleFirstNameChange}
                                maxLength="20"
                            />
                            {errors.FirstName && <p className='error'>{errors.FirstName}</p>}
                        </div>
                        <div className='two'>
                            <input type="text" name="LastName" placeholder='Last name' maxLength="20"/>
                        </div>
                        <div className='three'>
                            <input type="text" name="StreetAdress" placeholder='Street Adress'/>
                        </div>
                        <div className='four'>
                            <CountrySelect 
                                placeHolder="Select Country" 
                                className='country_select'
                            />
                        </div>
                        <div className='five'>
                            <input type="text" name="City" placeholder='City'/>
                        </div>
                        <div className='six'>
                            <input type="text"
                                placeholder='Email Address' 
                                value={Email}
                                name="EmailAddress1"
                                onChange={handleEmailChange}
                            />
                            {errors.Email && <p className='error'>{errors.Email}</p>}
                        </div>
                        <div className='seven'>
                            <PhoneInput placeholder="Enter phone number"
                                value={PhoneNumber}
                                name="PhoneNumber1"
                                onChange={handlePhoneChange} 
                                defaultCountry={currentCountry}  
                                className='phone_input'
                                maxLength="12"
                            />
                            {errors.PhoneNumber && <p className='error'>{errors.PhoneNumber}</p>}
                        </div>
                    </form>
                </div>
            </div>
            <div className='right_part_pay'>
                <div className='upper_right_pay'>
                    <button 
                        className={`order_summary_button ${content === 'orderSummary' ? 'active' : ''}`}
                        onClick={handleOrderSummaryClick}>
                        Order summary &nbsp; <i className="fa-solid fa-list"></i>
                    </button>

                    <button 
                        className={`check_out_button ${content === 'checkOut' ? 'active' : ''}`} 
                        onClick={handleCheckOutClick}>
                        Check out &nbsp; <i className="fa-regular fa-money-bill-1"></i>
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

