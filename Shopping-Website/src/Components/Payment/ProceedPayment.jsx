import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./ProceedPayment.css";
import mastercard from "./cardImages/mastercard.jpg";
import visacard from "./cardImages/visacard.jpg";
import paypal from "./cardImages/paypal.jpg";



function ProceedPayment() {


  const location = useLocation();

  const { currentProduct, totalPrice, selectedSizes } = location.state || {
    currentProduct: [],
    totalPrice: 0,
    selectedSizes: {},
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  //const [street, setStreet] = useState("");
  //const [country, setCountry] = useState("");
  
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");


  const navigate = useNavigate();


  const [content, setContent] = useState("orderSummary");
  const handleOrderSummaryClick = () => {
    setContent("orderSummary");
  };

  const handleCheckOutClick = () => {
    setContent("checkOut");
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
    } else if (totalPrice > 200000) {
      theDiscount = 20000;
    }

    return theDiscount;
  };



  const discount = calculateDiscount(totalPrice);
  const formattedDiscount =
    discount === 0
      ? "0 Frw ($0)"
      : `-${discount / 1000},000Frw ($${discount / 1000})`;

  
  
  
  // Calculating the shipping fee
  const calculateShippingFee = (totalPrice) => {
    let theShipping = 0;
    if (totalPrice > 200000) {
      theShipping = 0;
    } else if (totalPrice <= 200000 && totalPrice > 70000) {
      theShipping = 10000;
    } else if (totalPrice <= 70000 && totalPrice > 0) {
      theShipping = 5000;
    }

    return theShipping;
  };

  
  const shippingFee = calculateShippingFee(totalPrice);
  const formattedShippingFee =
    shippingFee === 0
      ? "0 Frw ($0)"
      : `+ ${shippingFee / 1000},000 Frw ($${shippingFee / 1000})`;

  // Final price where I deducted the discount and add the shipping fee
  const finalPrice = totalPrice - discount + shippingFee;

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //---------------------------------------------- ORDER SUMMARY SECTION ----------------------------------------------------------------
  //---------------------------------------------- ORDER SUMMARY SECTION ----------------------------------------------------------------
  //---------------------------------------------- ORDER SUMMARY SECTION ----------------------------------------------------------------

  // Order summary content
  const orderSummary = (
    <div className="order_summary_container">
      <div className="lower_summary">
        <div className="items_container_summary">
          {currentProduct &&
            currentProduct.map((item, index) => (
              <div key={index} className="item_summary_row">
                <div className="img_and_name">
                  <div className="img_summary">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="img_description_summary">
                    <h3 className="item_name_summary">{item.name}</h3>
                    <p className="size_summary">
                      Size: {selectedSizes[index] || "Not selected"}
                    </p>
                    <h5 className="quantity_number">
                      Quantity: {item.quantity}
                    </h5>
                  </div>
                </div>
                <div className="summary_price">
                  <p className="dollar_price_summary">${item.price / 1000}</p>
                  <p className="price_in_rwf">{item.price / 1000},000 Frw</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="small_calculations">
        <p className="items_word_summary">
          Items: <span>{totalQuantity} item(s)</span>
        </p>
        <p className="sub_total_summary">
          SubTotal ($):{" "}
          <span>
            {totalPrice / 1000},000Frw (${totalPrice / 1000})
          </span>
        </p>
        <p className="discount_word_summary">
          Discount ($): <span>{formattedDiscount}</span>
        </p>
        <p className="shipping_word_summary">
          Shipping fee ($): <span>{formattedShippingFee}</span>
        </p>
        <h3 className="Total_word_summary">
          Total Price ($):{" "}
          <span>
            {finalPrice / 1000},000Frw (${finalPrice / 1000})
          </span>
        </h3>
      </div>
    </div>
  );








  //---------------------------------------------- CHECK OUT SECTION ----------------------------------------------------------------
  //---------------------------------------------- CHECK OUT SECTION ----------------------------------------------------------------
  

  // When submitting  
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { firstName, lastName, city, email, phoneNumber, cardholderName, cardNumber, expiryDate, cvc };

    console.log(userData)
  };


  





  //------------------------------------- Check out content ------------------------------------------------
  //------------------------------------- Check out content ------------------------------------------------
  //------------------------------------- Check out content ------------------------------------------------

  const paymentForm = (
    <div className="check_out_panel">
      <div className="upper_check_out">
        <h2 className="check_out_header">
          Checkout &nbsp;&nbsp;{" "}
          <a href="" className="use-momo">
            (Use Momo instead)
          </a>
        </h2>
        <div className="card_images">
          <div className="mastercard">
            <img src={mastercard} alt="" />
          </div>
          <div className="visa">
            <img src={visacard} alt="" />
          </div>
          <div className="paypal">
            <img src={paypal} alt="" />
          </div>
        </div>
      </div>
      <div className="lower_check_out_container">
        <div className="card_form">
          <input
            required
            name="FirstName"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            type="text"
            placeholder="Card Owner"
          />
          <input
            name="CardNumber"
            required
            type="number"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="multi-field">
            <input
              required
              name="expiration date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              type="date"
              placeholder="Expiration Date"
            />
            <input
              required
              name="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              type="number"
              placeholder="CVC"
            />
          </div>
          <button className="pay_now_button" type="submit">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );






  // Address & Payment content wrapper
  const PageWrapper = (
      <form className="paying-wrapper" onSubmit={handleSubmit}>
        <div className="left_part_pay">
            <div className="upper_left_pay">
            <h1 className="address_details">Address details</h1>
            <p className="header_description">
                Make sure to fill your address correctly, and reach out for our
                support if you don't get your order on time
            </p>
            </div>

            {/* Address Form Section */}
            <div className="Form_section">
            <div className="address_form_container">
                <div action="" className="address_form">
                <div className="place-order-left">
                    <div className="multi-field">
                    <input
                        required
                        name="FirstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        placeholder="First name"
                    />
                    <input
                        required
                        name="LastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder="Last name"
                    />
                    </div>
                    <input
                        required
                        name="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email address"
                    />
                    <input name="street" type="text" placeholder="Street" />
                    <div className="multi-field">
                    <input
                        required
                        name="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        placeholder="City"
                    />
                    <input name="state" type="text" placeholder="State" />
                    </div>
                    <div className="multi-field">
                    <input name="zipcode" type="text" placeholder="Zip code" />
                    <input
                        required
                        name="country"
                        type="text"
                        placeholder="Country"
                    />
                    </div>
                    <input
                    required
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="text"
                    placeholder="ex: 0781234567"
                    maxLength={10}
                    minLength={10}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="right_part_pay">
            <div className="upper_right_pay">
            <button
                className={`order_summary_button ${
                content === "orderSummary" ? "active" : ""
                }`}
                onClick={handleOrderSummaryClick}
            >
                Order summary &nbsp; <i className="fa-solid fa-list"></i>
            </button>

            <button
                className={`check_out_button ${
                content === "checkOut" ? "active" : ""
                }`}
                onClick={handleCheckOutClick}
            >
                Check out &nbsp; <i className="fa-regular fa-money-bill-1"></i>
            </button>
            </div>
            <div className="lower_right_pay">
            {content === "orderSummary" ? orderSummary : paymentForm}
            </div>
        </div>
      </form>
  );






  return <>{PageWrapper}</>;
}

export default ProceedPayment;
