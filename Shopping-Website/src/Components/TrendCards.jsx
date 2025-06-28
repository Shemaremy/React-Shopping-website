import React, { useState } from "react";
import { useCounter } from "./Redux store/Counter";


import './TrendCards.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bluesandals from '../images/Trends/coolsandals1.png';
import sweater1 from '../images/Trends/sweater1.png';
import jordan1red from '../images/Trends/Jordan 1 red.png';
import jordan4white from '../images/Trends/Jordan 4 white.png';
import tshirt2 from '../images/Trends/Tshirt2.png';
import jordan13white from '../images/Trends/Jordan 13 white.png';

import greatValue from '../images/verveofferspngs/value.png';
import world from '../images/verveofferspngs/world.png';
import pay from '../images/verveofferspngs/pay.png';
import confidence from '../images/verveofferspngs/confidence.png';
import chat from '../images/verveofferspngs/chat.png';










// Array of trending items
export const items = [
    { name: "Leather Sandals", price: "20000", image: bluesandals, stars: 5, sizes: ["M", "L", "XL", "XXL"] },
    { name: "Gray sweater", price: "25000", image: sweater1, stars: 5, sizes: ["M", "L", "XL", "XXL"] },
    { name: "Jordan 1 red", price: "28000", image: jordan1red, stars: 2, sizes: ["40", "41", "42", "43"] },
    { name: "Jordan 4 white", price: "25000", image: jordan4white, stars: 4, sizes: ["40", "41", "42", "43"] },
    { name: "White Polo T-shirt", price: "17000", image: tshirt2, stars: 4, sizes: ["M", "L", "XL", "XXL"] },
    { name: "Jordan 13 white", price: "30000", image: jordan13white, stars: 5, sizes: ["40", "41", "42", "43"] }
];












const TrendCards = () => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const { handleClick, currentProduct} = useCounter();















// ------------------------------- HANDLE ADD TO CART LOADER -----------------------------------------
// ------------------------------- HANDLE ADD TO CART LOADER -----------------------------------------
// ------------------------------- HANDLE ADD TO CART LOADER -----------------------------------------


const [buttonText, setButtonText] = useState('A');
const [loading, setLoading] = useState({});




const handleAddToCartClick = async (product) => {
    setLoading((prevLoading) => ({ ...prevLoading, [product.name]: true }));
    setButtonText('...');

    // Simulate a delay (e.g., API call duration)
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
        handleClick(product); // Simulate the asynchronous operation
    } catch (error) {
        console.error('Error adding item to cart:', error);
        setButtonText('Error');
    } finally {
        setLoading((prevLoading) => ({ ...prevLoading, [product.name]: false }));
        setTimeout(() => setButtonText('A'), 100); // Reset after 2 seconds
    }
};






















































// ------------------------------------------------------------ IMAGE LOADERS -------------------------------------------------
// ------------------------------------------------------------ IMAGE LOADERS -------------------------------------------------
// ------------------------------------------------------------ IMAGE LOADERS -------------------------------------------------


const [imgloading, setimgLoading] = useState(true);

const handleImageLoad = () => {
    setimgLoading(false);
};



const Imageloader = (
    <div className="loading-container">
        <div>Loading</div>
    </div>
);














    


    









    // Settings for the slides
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        beforeChange: (current, next) => setActiveIndex(next),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };




    
    // The html content for the card
    const card2Content = (product) => (
        <>
            <div className="card_upper">
                {imgloading && (Imageloader)}
                <img className="Trend-img" src={product.image} 
                    alt={product.name}
                    onLoad={handleImageLoad} 
                    style={{ display: imgloading ? 'none' : 'block' }}
                />
            </div>
            <div className="card_lower">
                <h2 className="name">{product.name}</h2>
                <p className="price">{(product.price / 1000)},000 Frw</p>
                <button className="cart-trend" 
                    onClick={() => handleAddToCartClick(product)}
                    disabled={loading[product.name]}
                >
                    {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner fa-spin"></i> : 'Add to cart'}
                </button>
            </div>
        </>
    );

    const card2ContentMobile = (product) => (
        <>
            <div className="card_upper">
                {imgloading && (Imageloader)}
                <img className="Trend-img" src={product.image} 
                    alt={product.name}
                    onLoad={handleImageLoad} 
                    style={{ display: imgloading ? 'none' : 'flex' }}
                />
            </div>
            <div className="card_lower">
                <h2 className="name">{product.name}</h2>
                <p className="price">{(product.price / 1000)},000 Frw</p>
                <button className="cart-trend" 
                    onClick={() => handleAddToCartClick(product)}
                    disabled={loading[product.name]}
                >
                    {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner fa-spin"></i> : 'Add to cart'}
                </button>
            </div>
        </>
    );




    // Final rendering and looping
    const slider = items.slice(0, 6).map((product, index) => (
        <div className="Trend-2" key={index + 1} data-name={product.name}>
            <div className="card-2">{card2Content(product)}</div>
        </div>
    ));




    // Final rendering and looping
    const MobileTrends = items.slice(0, 6).map((product, index) => (
        <div className="Trend-2" key={index + 1} data-name={product.name}>
            <div className="card-2">{card2ContentMobile(product)}</div>
        </div>
    ));














    return (
        <>
            <div className="main_trending_part" data-aos="fade-up">
                <div className="slider-container-2">
                    <Slider {...settings}>
                        {slider}
                    </Slider>
                    <div className="mobile-trends">
                        {MobileTrends}
                    </div>
                </div>
            </div>

            <div className="why_verve_part">
                <div className="verve-offers-you">
                    <h1 className="offers_you_header">Why Verve ?</h1>
                </div>
                <div className="service-container">
                    <div className="svg-container">
                        <div className="contain2" data-aos="fade-up">
                            <div className="svg-real"><img className="svg" src={greatValue} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Great Value</h5>
                                <p className="svg_paragraph">Verve offers various of items to select, promotions, and personalized products.</p>
                            </div>
                        </div>
                        <div className="contain2" data-aos="fade-up">
                            <div className="svg-real"><img className="svg" src={world} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Worldwide Delivery</h5>
                                <p className="svg_paragraph">Supported in more than 10 countries. Register to get 10,000Frw coupons.</p>
                            </div>
                        </div>
                        <div className="contain2" data-aos="fade-up">
                            <div className="svg-real"><img className="svg" src={pay} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Safe Payment</h5>
                                <p className="svg_paragraph">Pay with popular and secure payment methods.</p>
                            </div>
                        </div>
                        <div className="contain2" data-aos="fade-up">
                            <div className="svg-real"><img className="svg" src={confidence} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Shop with Confidence:</h5>
                                <p className="svg_paragraph">Buy high quality and popular products with verve that you won't regret.</p>
                            </div>
                        </div>
                        <div className="contain2" data-aos="fade-up">
                            <div className="svg-real"><img className="svg" src={chat} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Contact Support</h5>
                                <p className="svg_paragraph">Fast and convenient consultation and messaging to solve your problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendCards;
