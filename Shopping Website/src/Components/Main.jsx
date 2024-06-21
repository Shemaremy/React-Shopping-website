import React from "react";
import { useState } from "react";
import { useCounter } from "./counterbutton/CounterContext";

import './Main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import OurPicks from "./Ourpicks";
import TrendCards from "./TrendCards";

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





import Slider from "react-slick";



function B(){
    const { handleClick } = useCounter();




    const settings = {
        dots: false,
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 5,
        speed: 500
      };



//-----------------------------------------------------------------------------------------------------------------------


    // LOOPING CARD CONTENT FOR OUR PRODUCTS CARDS
    //--------------------------------------------

    const [Employees, setEmployees] = useState (
        [
            { name: "Jordan 1 orange", price: "28,000 Frw", stars: 2, image: Jordan1orange },
            { name: "Jordan 4 black", price: "25,000 Frw", stars: 3, image: Jordan4black },
            { name: "Jordan 1 red", price: "28,000 Frw", stars: 2, image: Jordan1red },
            { name: "Jordan 4 white", price: "25,000 Frw", stars: 4, image: Jordan4white },
            { name: "Jordan 5 white", price: "32,000 Frw", stars: 3, image: Jordan5white },
            { name: "Jordan 12 white", price: "30,000 Frw", stars: 5, image: Jordan12white },
            { name: "Jordan 11 black", price: "26,000 Frw", stars: 3, image: Jordan11black },
            { name: "Jordan 13 black", price: "33,000 Frw", stars: 4, image: Jordan13black },
            { name: "Jordan 14 gray", price: "35,000 Frw", stars: 2, image: Jordan14gray },
            { name: "Jordan 13 white", price: "33,000 Frw", stars: 5, image: Jordan13white }
        ]
    );








     // CARD CONTENT FOR OUR PRODUCTS CARDS
    //-------------------------------------

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
                        <p className="Price">{product.price}</p>
                        <p className="cart" onClick={handleClick}><i class="cart_icon fa fa-cart-plus" aria-hidden="true"></i></p>
                    </div>
                </div>
            </div>
        </>
    );



    // This is the final rendering in cards
    //-------------------------------------

    const TrendDraftOne = Employees.slice(0, 5).map((product, index) => (
        <div className="Trend-draft" key={index + 1}>
            <div className="card-draft">{cardDraftOne(product)}</div>
        </div>
    ));

    const TrendDraftTwo = Employees.slice(5).map((product, index) => (
        <div className="Trend-draft" key={index + 1}>
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
                    <div className="lower_part_category">
                        <button className="browse_button">Men Shoes</button>
                        <button className="browse_button">Pants</button>
                        <button className="browse_button">T-Shirts</button>
                        <button className="browse_button">Hoodies</button>
                        <button className="browse_button">Jackets</button>
                        <button className="browse_button">Caps</button>
                    </div>
                </div>
            </div>
            <div className="Lower_part_main">
                <div className="All_products_container">
                    <div className="products_section_one">   
                        <div className="section-draft">
                            <div className="slider-container-draft">
                                <Slider {...settings}>
                                    {TrendDraftOne}
                                </Slider>
                            </div>
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
                    </div>
                </div>
                <div className="Our_picks_container">
                    <div className="our_picks_heading_container">
                        <h4 className="our_picks_header">Our Picks:</h4>
                    </div>
                    <div className="The_rest">
                        <OurPicks/>
                    </div>
                </div>
                <div className="Customer_preferences">
                    <div className="Upper_part_customers">
                        <h4 className="Trending_items_header">Trending Items</h4>
                    </div>
                    <div className="Lower_part_customers">                        
                        <div className="Trending_Section">
                            <TrendCards/>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default B;