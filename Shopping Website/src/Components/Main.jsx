import React, { useState } from "react";
import { useCounter } from "./Redux store/Counter";
import MyModal from "./cartPanel/MyModal";

import OurPicks from "./Ourpicks";
import TrendCards from "./TrendCards";
import Slider from "react-slick";
import './Main.css';


import '@fortawesome/fontawesome-free/css/all.css';














import Jordan1orange from '../images/Shoes products/Jordan 1 orange.png'; 
import Jordan4black from '../images/Shoes products/Jordan 4 black.png'; 
import Jordan1red from '../images/Shoes products/Jordan 1 red.png'; 
import Jordan4white from '../images/Shoes products/Jordan 4 white.png'; 
import Jordan5white from '../images/Shoes products/Jordan 5 white.png'; 
import Jordan12white from '../images/Shoes products/Jordan 12 white.png'; 
import Jordan11black from '../images/Shoes products/Jordan 11 black.png'; 
import Jordan13black from '../images/Shoes products/Jordan 13 black.png'; 
import Jordan14gray from '../images/Shoes products/Jordan 14 gray.png'; 
import Jordan13white from '../images/Shoes products/Jordan 13 white.png'; 














// CARD CONTENT FOR OUR PRODUCTS CARDS
export const Employees = [
    { name: "Jordan 1 orange", price: "28000", stars: 2, image: Jordan1orange, quantity: 1, sizes: ["40", "41", "42", "43"] },
    { name: "Jordan 4 black", price: "25000", stars: 3, image: Jordan4black, quantity: 1, sizes: ["40", "41", "42", "43"]  },
    { name: "Jordan 1 red", price: "28000", stars: 2, image: Jordan1red, quantity: 1, sizes: ["40", "41", "42", "43"]  },
    { name: "Jordan 4 white", price: "25000", stars: 4, image: Jordan4white, quantity: 1, sizes: ["40", "41", "42", "43"]  },
    { name: "Jordan 5 white", price: "32000", stars: 3, image: Jordan5white, quantity: 1, sizes: ["40", "41", "42", "43"]  },
    { name: "Jordan 12 white", price: "30000", stars: 5, image: Jordan12white, quantity: 1, sizes: ["40", "41", "42", "43"]  },
    { name: "Jordan 11 black", price: "26000", stars: 3, image: Jordan11black, quantity: 1, sizes: ["40", "41", "42", "43"]  },
    { name: "Jordan 13 black", price: "33000", stars: 4, image: Jordan13black, quantity: 1, sizes: ["40", "41", "42", "43"]  },
    { name: "Jordan 14 gray", price: "35000", stars: 2, image: Jordan14gray, quantity: 1, sizes: ["40", "41", "42", "43"]  },
    { name: "Jordan 13 white", price: "33000", stars: 5, image: Jordan13white, quantity: 1, sizes: ["40", "41", "42", "43"]  }
];



























function B() {


    const { handleClick } = useCounter(); // Destructure handleClick from useCounter












































// ------------------------------ TOGGLING NAV BUTTONS -------------------------------------
// ------------------------------ TOGGLING NAV BUTTONS -------------------------------------
// ------------------------------ TOGGLING NAV BUTTONS -------------------------------------



const [isToggled, setIsToggled] = useState(false);
const [activeButton, setActiveButton] = useState('Men Shoes');



// Popular button
const toggleHandler = () => {
    setIsToggled(!isToggled);
};


// Product category onclicks
const handleCategoryClick = (event) => {
    const buttonName = event.target.getAttribute('data-category');
    setActiveButton(buttonName);
};










// ------------------------------ END -------------------------------------
// ------------------------------ END -------------------------------------
// ------------------------------ END -------------------------------------





























































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
































































// ------------------------------------------------------------ OUR PRODUCTS CARDS -------------------------------------------------
// ------------------------------------------------------------ OUR PRODUCTS CARDS -------------------------------------------------
// ------------------------------------------------------------ OUR PRODUCTS CARDS -------------------------------------------------
// ------------------------------------------------------------ OUR PRODUCTS CARDS -------------------------------------------------





// Slick slider settings
const settings = {
    dots: false,
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,

    responsive: [

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },

        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3
            }
        }        
    ]
};




    // CARD CONTENT FOR OUR PRODUCTS CARDS
    const cardDraftOne = (product) => (
        <>
            <div className="draftUp">
                <div className="product_images_first_section">
                    <img src={product.image} className="Shoes" alt="one" />
                </div>
            </div>
            <div className="draftDown">
                <div className="item_name_container"><p className="item_p">{product.name}</p></div>
                <div className="stars_and_prices_container">
                    <div className="stars_container">
                        {Array.from({ length: product.stars }, (_, i) => (
                            <i key={i} className="star fa fa-star" aria-hidden="true"></i>
                        ))}
                    </div>
                    <div className="price_and_cart_container">  
                        <p className="Price">{(product.price/1000)},000 Frw</p>
                        <p className="cart" 
                            onClick={() => handleAddToCartClick(product)}
                            disabled={loading[product.name]}
                        >
                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : <i className="cart_icon fa fa-cart-plus" aria-hidden="true"></i>}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );



    // This is the final rendering in cards but this is upper section
    const TrendDraftOne = Employees.slice(0, 5).map((product, index) => (
        <div className="Trend-draft" key={index + 1} data-name={product.name}>
            <div className="card-draft">{cardDraftOne(product)}</div>
        </div>
    ));



    // Lower section for cards
    const TrendDraftTwo = Employees.slice(5).map((product, index) => (
        <div className="Trend-draft" key={index + 1} data-name={product.name}>
            <div className="card-draft">{cardDraftOne(product)}</div>
        </div>
    ));








    const mobileProductsDraft = (product) => (
        <>
            <div className="draftUp">
                <div className="product_images_first_section">
                    <img src={product.image} className="Shoes" alt="one" />
                </div>
            </div>
            <div className="draftDown">
                <div className="item_name_container"><p className="item_p">{product.name}</p></div>
                <div className="stars_and_prices_container">
                    <div className="stars_container">
                        {Array.from({ length: product.stars }, (_, i) => (
                            <i key={i} className="star fa fa-star" aria-hidden="true"></i>
                        ))}
                    </div>
                    <div className="price_and_cart_container">  
                        <p className="Price">{(product.price/1000)},000 Frw</p>
                        <p className="cart" 
                            onClick={() => handleAddToCartClick(product)}
                            disabled={loading[product.name]}
                        >
                            {loading[product.name] ? <i className="cart_icon fa-solid fa-spinner"></i> : <i className="cart_icon fa fa-cart-plus" aria-hidden="true"></i>}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );



    const mobileProductsOne = Employees.slice(0, 4).map((product, index) => (
        <div className="Trend-draft" key={index + 1} data-name={product.name}>
            <div className="card-draft">{mobileProductsDraft(product)}</div>
        </div>
    ));



    const mobileProductsTwo = Employees.slice(4).map((product, index) => (
        <div className="Trend-draft" key={index + 1} data-name={product.name}>
            <div className="card-draft">{cardDraftOne(product)}</div>
        </div>
    ));
















































































    return( 
        <div className="B">
            <div className="Upper_part_main">
                <h2 className="Our_products_header">Our Products</h2>
                <div className="Browse_by_category">
                    <div className="upper_part_category">
                        <h3 className="browse_header">Browse by category</h3>
                        <p className="browse_par">I'm looking for:</p>
                    </div>
                </div>
            </div>
            <div className="Lower_part_main">
                <div className="All_products_container">
                    <div className="Our_products_upper_part">
                        <h1 className="our-products-header">Our products</h1>
                        <p className="our-products-description">Explore our curated clothing collections, blending style and quality to elevate your wardrobe with the latest trends and timeless classics.</p>
                        <div className="our-products-nav">
                            <div className="popular-container">
                                <div className={`popular-chooser ${isToggled ? 'toggled' : ''}`}  onClick={toggleHandler}>
                                    <p>Popular</p>
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="buttons-container">
                                <button
                                    className={`browse_button ${activeButton === 'Men Shoes' ? 'active' : ''}`}
                                    data-category="Men Shoes"
                                    onClick={handleCategoryClick}
                                >
                                    Men Shoes
                                </button>
                                <button
                                    className={`browse_button ${activeButton === 'Pants' ? 'active' : ''}`}
                                    data-category="Pants"
                                    onClick={handleCategoryClick}
                                >
                                    Pants
                                </button>
                                <button
                                    className={`browse_button ${activeButton === 'T-Shirts' ? 'active' : ''}`}
                                    data-category="T-Shirts"
                                    onClick={handleCategoryClick}
                                >
                                    T-Shirts
                                </button>
                                <button
                                    className={`browse_button ${activeButton === 'Hoodies' ? 'active' : ''}`}
                                    data-category="Hoodies"
                                    onClick={handleCategoryClick}
                                >
                                    Hoodies
                                </button>
                                <button
                                    className={`browse_button ${activeButton === 'Jackets' ? 'active' : ''}`}
                                    data-category="Jackets"
                                    onClick={handleCategoryClick}
                                >
                                    Jackets
                                </button>
                                <button
                                    className={`browse_button ${activeButton === 'Caps' ? 'active' : ''}`}
                                    data-category="Caps"
                                    onClick={handleCategoryClick}
                                >
                                    Caps
                                </button>
                            </div>
                            <div className="filter-container">
                                <div className="filter-chooser">
                                    <i className="fa fa-filter" aria-hidden="true"></i>
                                    <p>Filters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Our_products_lower_part">
                        {isToggled && (
                            <div className="dropdown-parent-panel">
                                <div className="dropdown-panel">
                                    <div className="dropdown-item">Highly rated</div>
                                    <div className="dropdown-item selected">Popular</div>
                                    <div className="dropdown-item">New & Noteworthy</div>
                                </div>
                            </div>
                        )}
                        <div className="products_section_one">   
                            <div className="section-draft">
                                <div className="slider-container-draft">
                                    <Slider {...settings}>
                                        {TrendDraftOne}
                                    </Slider>
                                </div>
                            </div>
                            <div className="mobile-products-div">
                                {mobileProductsOne}
                            </div>
                        </div>
                        <div className="products_section_two">
                            <div className="section-draft">
                                <div className="slider-container-draft">
                                    <Slider {...settings}>
                                        {TrendDraftTwo}
                                    </Slider>
                                </div>
                            </div>   
                            <div className="mobile-products-div">
                                {mobileProductsTwo}
                            </div>              
                        </div>
                        <div className="mobile-view-more">
                            <p>View more &nbsp; <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </div>
                </div>
                <div className="Our_picks_container">
                    <div className="our_picks_heading_container">
                        <h4 className="our_picks_header">Our Picks</h4>
                        <p>
                            Explore our curated selections of must-have items for the season, whether you're gearing up for summer or winter, you can find the perfect outfits tailored to each season. Don't miss out on these picks 
                            &nbsp; <i className="fa-solid fa-fire"></i>
                        </p>
                    </div>
                    <div className="The_rest">
                        
                        <OurPicks/>
                    </div>
                </div>
                <div className="Trend-section">
                    <div className="Upper-part-trend">
                        <h4 className="Trending_items_header">Discover What's Trending</h4>
                        <p className="Trend-description">Stay ahead of the fashion curve with our handpicked trending items! From the latest sneaker drops to classic wardrobe staples, explore the top picks that everyone is talking about.</p>
                    </div>
                    <div className="Lower-part-trend">                        
                        <div className="TrendCards-panel">
                            <TrendCards/>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default B;
