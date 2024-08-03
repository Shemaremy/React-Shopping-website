import React, { useState }  from "react";
import { useCounter } from "./Redux store/Counter";
import MyModal from "./cartPanel/MyModal";

import "./Ourpicks.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

/*-------------------------------------------- SUMMER CLOTHES -----------------------------------------------------------------------*/

import shortArmedTshirt from '../images/Tops/Tshirt1.png'; 
import sweatshort from '../images/pantsandshorts/sweatshorts.png';
import sandals1 from '../images/bottoms/blue sandals.png';

import shortArmedcollarTshirt from '../images/Tops/Tshirt2.png'; 
import fitshort from '../images/pantsandshorts/dadshorts.png';
import coolsandals1 from '../images/bottoms/coolsandals1.png';

import hawaishirt from '../images/Tops/hawaii shirt.png'; 
import dadshort from '../images/pantsandshorts/otherdadshort.png';
import coolsandals2 from '../images/bottoms/coolsandals2.png';

/*----------------------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------- WINTER CLOTHES ----------------------------------------------------------------*/

import sweater1 from '../images/Tops/sweater1.png'; 
import cargokhaki1 from '../images/pantsandshorts/cargokhaki1.png';
import jordan4 from '../images/bottoms/Jordan 4 white.png';

import sweater2 from '../images/Tops/sweater2.png'; 
import blackjogging from '../images/pantsandshorts/blackjogging.png';
import jordan12 from '../images/bottoms/Jordan 12 gray.png';

import hoodie1 from '../images/Tops/hoodie1.png'; 
import cargokhaki3 from '../images/pantsandshorts/cargokhaki1.png';
import jordan1 from '../images/bottoms/Jordan 1 red.png';

/*----------------------------------------------------------------------------------------------------------------------------------------*/

































function OurPicks () {

    const [isSummer, setIsSummer] = useState(true);
    const { handleClick, currentProduct } = useCounter();

    
    


















    // Settings for the primary slider
    const mainsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 1000,
                    autoplaySpeed: 8000,
                    cssEase: "linear"
                }
            }
        ]
    };

    // Settings for the child sliders of the wardrobe
    const innersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
















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


























// ------------------------------------ AOS ----------------------------------------------
// ------------------------------------ AOS ----------------------------------------------
// ------------------------------------ AOS ----------------------------------------------
// ------------------------------------ AOS ----------------------------------------------


AOS.init();

AOS.init({
    
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });






































































// -------------------------- SUMMER SECTION -----------------------------------------------
// -------------------------- SUMMER SECTION -----------------------------------------------
// -------------------------- SUMMER SECTION -----------------------------------------------





    // Array containing summer items
    const summerWardrobeItems = [
        { name: 'White T-shirt', image: shortArmedTshirt, price: "16000", sizes: ["M", "L", "XL", "XXL"] },
        { name: 'Gray Sweatshort', image: sweatshort, price: "25000", sizes: ["M", "L", "XL", "XXL"] },
        { name: 'Dark blue sandals', image: sandals1, price: "20000", sizes: ["M", "L", "XL", "XXL"] },
        { name: 'White Polo T-shirt', image: shortArmedcollarTshirt, price: "17000", sizes: ["M", "L", "XL", "XXL"] },
        { name: 'Gray short', image: fitshort, price: "20000", sizes: ["M", "L", "XL", "XXL"] },
        { name: 'Leather Sandals', image: coolsandals1, price: "20000", sizes: ["M", "L", "XL", "XXL"] },
        { name: 'Hawaiian Shirt', image: hawaishirt, price: "16000", sizes: ["M", "L", "XL", "XXL"] },
        { name: 'Dad Shorts', image: dadshort, price: "20000", sizes: ["M", "L", "XL", "XXL"] },
        { name: 'Leather Sandals 2', image: coolsandals2, price: "20000", sizes: ["M", "L", "XL", "XXL"] }
    ];



    // Wardrobe summer slider
    const wardrobeSummerSlider = (
        <>
            <Slider {...innersettings} className="wardrobe_slider">
                {summerWardrobeItems.map((product, index) => (
                    <div className="card_2" key={index}>
                        <img src={product.image} alt={product.name}/>
                        <div className="item_purchase_container">
                            <div className="name_price_pick">
                                <h3 className="name_pick">{product.name}</h3>
                                <p className="price_pick">{(product.price/1000)},000 Frw</p>
                            </div>
                            <button className="purchase_pick" 
                                onClick={() => handleAddToCartClick(product)}
                                disabled={loading[product.name]}
                            >
                                {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : 'Add to cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );


    // Summer slider
    const slidingSummer = (
        <Slider {...mainsettings}>
            <div className="In_the_rest_4" data-aos="fade-left">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">Why don't you try these :</p>
                    <p className="short_exp_p"><i>A Polo T Shirt would match correctly on these shorts especially if you prefer shorts for the summer</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeSummerSlider}
                    <div className="mobile_picks">
                        {summerWardrobeItems.slice(0, 3).map((product, index) => (
                                <div className="card_2" key={index}>
                                    <img src={product.image} alt={product.name} />
                                    <div className="item_purchase_container">
                                        <div className="name_price_pick">
                                            <h3 className="name_pick">{product.name}</h3>
                                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                                        </div>
                                        <button className="purchase_pick" 
                                            onClick={() => handleAddToCartClick(product)}
                                            disabled={loading[product.name]}
                                        >
                                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : 'Add to cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">Or these :</p>
                    <p className="short_exp_p"><i>A classic white v-neck t-shirt would pair effortlessly with these shorts, especially if you prefer a simple and versatile look for your summer adventures.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeSummerSlider}
                    <div className="mobile_picks">
                        {summerWardrobeItems.slice(3, 6).map((product, index) => (
                                <div className="card_2" key={index}>
                                    <img src={product.image} alt={product.name} />
                                    <div className="item_purchase_container">
                                        <div className="name_price_pick">
                                            <h3 className="name_pick">{product.name}</h3>
                                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                                        </div>
                                        <button className="purchase_pick" 
                                            onClick={() => handleAddToCartClick(product)}
                                            disabled={loading[product.name]}
                                        >
                                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : 'Add to cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">What about these :</p>
                    <p className="short_exp_p"><i>Opting for a vibrant floral Hawaiian shirt would pair splendidly with these shorts, particularly if you enjoy embracing a tropical vibe for your summer escapades.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeSummerSlider}
                    <div className="mobile_picks">
                        {summerWardrobeItems.slice(6, 9).map((product, index) => (
                                <div className="card_2" key={index}>
                                    <img src={product.image} alt={product.name} />
                                    <div className="item_purchase_container">
                                        <div className="name_price_pick">
                                            <h3 className="name_pick">{product.name}</h3>
                                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                                        </div>
                                        <button className="purchase_pick" 
                                            onClick={() => handleAddToCartClick(product)}
                                            disabled={loading[product.name]}
                                        >
                                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : 'Add to cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Slider>
    );


















































































// -------------------------- WINTER SECTION -----------------------------------------------
// -------------------------- WINTER SECTION -----------------------------------------------
// -------------------------- WINTER SECTION -----------------------------------------------




    // Array that contains items for the winter season
    const winterWardrobeItems = [
        { image: sweater1, name: 'Gray sweater', price: "20000", sizes: ["M", "L", "XL", "XXL"] },
        { image: cargokhaki1, name: 'Cargo pants', price: "18000", sizes: ["M", "L", "XL", "XXL"] },
        { image: jordan4, name: 'White Jordan4', price: "25000", sizes: ["40", "41", "42", "43"] },
        { image: sweater2, name: 'Gray sweater 2', price: "18000", sizes: ["M", "L", "XL", "XXL"] },
        { image: blackjogging, name: 'Black joggings', price: "21000", sizes: ["M", "L", "XL", "XXL"] },
        { image: jordan12, name: 'Gray Jordan12', price: "28000", sizes: ["40", "41", "42", "43"] },
        { image: hoodie1, name: 'Black hoodie', price: "20000", sizes: ["M", "L", "XL", "XXL"] },
        { image: cargokhaki3, name: 'Cargo pants', price: "18000", sizes: ["M", "L", "XL", "XXL"] },
        { image: jordan1, name: 'Jordan 1 red', price: "28000", sizes: ["40", "41", "42", "43"] }
    ];



    // Wardrobe winter slider
    const wardrobeWinterSlider = (
        <Slider {...innersettings} className="wardrobe_slider">
            {winterWardrobeItems.map((product, index) => (
                <div className="card_2" key={index}>
                    <img src={product.image} alt={product.name} />
                    <div className="item_purchase_container">
                        <div className="name_price_pick">
                            <h3 className="name_pick">{product.name}</h3>
                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                        </div>
                        <button className="purchase_pick" 
                            onClick={() => handleAddToCartClick(product)}
                            disabled={loading[product.name]}
                        >
                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : 'Add to cart'}
                        </button>
                    </div>
                </div>
            ))}
        </Slider>
    );



    // Winter slider
    const slidingWinter = (
        <Slider {...mainsettings}>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">Try these :</p>
                    <p className="short_exp_p"><i>These insulated cargo pants would be well-matched with a durable parka for your winter adventures.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeWinterSlider}
                    <div className="mobile_picks">
                        {winterWardrobeItems.slice(0, 3).map((product, index) => (
                                <div className="card_2" key={index}>
                                    <img src={product.image} alt={product.name} />
                                    <div className="item_purchase_container">
                                        <div className="name_price_pick">
                                            <h3 className="name_pick">{product.name}</h3>
                                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                                        </div>
                                        <button className="purchase_pick" 
                                            onClick={() => handleAddToCartClick(product)}
                                            disabled={loading[product.name]}
                                        >
                                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : 'Add to cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">Or these :</p>
                    <p className="short_exp_p"><i>Pairing these wool trousers with a tailored pea coat would create a sophisticated and timeless ensemble for the winter months.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeWinterSlider}
                    <div className="mobile_picks">
                        {winterWardrobeItems.slice(3, 6).map((product, index) => (
                                <div className="card_2" key={index}>
                                    <img src={product.image} alt={product.name} />
                                    <div className="item_purchase_container">
                                        <div className="name_price_pick">
                                            <h3 className="name_pick">{product.name}</h3>
                                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                                        </div>
                                        <button className="purchase_pick" 
                                            onClick={() => handleAddToCartClick(product)}
                                            disabled={loading[product.name]}
                                        >
                                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : 'Add to cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">What about these :</p>
                    <p className="short_exp_p"><i>A heavyweight flannel shirt would complement these cargo pants nicely, ideal for a rugged and comfortable outfit during the cold season.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeWinterSlider}
                    <div className="mobile_picks">
                        {winterWardrobeItems.slice(6, 9).map((product, index) => (
                                <div className="card_2" key={index}>
                                    <img src={product.image} alt={product.name} />
                                    <div className="item_purchase_container">
                                        <div className="name_price_pick">
                                            <h3 className="name_pick">{product.name}</h3>
                                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                                        </div>
                                        <button className="purchase_pick" 
                                            onClick={() => handleAddToCartClick(product)}
                                            disabled={loading[product.name]}
                                        >
                                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : 'Add to cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Slider>
    );

























































    // Content Wrapper
    const contentWrapper = (
        <>
            <div className="Small_navbar">
                <div className={isSummer ? "Summer summer-btn" : 'Summer'} onClick={() => setIsSummer(true)}><i className="fa-solid fa-sun"></i></div>
                <div className="In_navbar_divisor"></div>
                <div className={!isSummer ? "Winter winter-btn" : 'Winter'} onClick={() => setIsSummer(false)}><i className="fa-solid fa-cloud"></i></div>
            </div>
            <div className="the_rest_2">
                <div className="the_rest_3">
                    <div className="Question_header_container">
                        <p className="question_header">{isSummer ? "Summer vacation ?" : "Facing winter chills ?"}</p>
                    </div>
                    <div className="the_rest_4">
                        {isSummer ? slidingSummer : slidingWinter}
                    </div>
                </div>
            </div>
        </>
    );









    return (
        <>{contentWrapper}</>
    );
}

export default OurPicks;
