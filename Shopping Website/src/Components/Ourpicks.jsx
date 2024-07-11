import React, { useState }  from "react";
import { useCounter } from "./counterbutton/CounterContext";
import MyModal from "./cartPanel/MyModal";

import "./Ourpicks.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        draggable: false
    };

    // Settings for the child sliders of the wardrobe
    const innersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };




































































// -------------------------- SUMMER SECTION -----------------------------------------------
// -------------------------- SUMMER SECTION -----------------------------------------------
// -------------------------- SUMMER SECTION -----------------------------------------------





    // Array containing summer items
    const summerWardrobeItems = [
        { name: 'White T-shirt', image: shortArmedTshirt, price: "16000" },
        { name: 'Gray Sweatshort', image: sweatshort, price: "25000" },
        { name: 'Dark blue sandals', image: sandals1, price: "20000" },
        { name: 'White Polo T-shirt', image: shortArmedcollarTshirt, price: "17000" },
        { name: 'Gray short', image: fitshort, price: "20000" },
        { name: 'Leather Sandals', image: coolsandals1, price: "20000" },
        { name: 'Hawaiian Shirt', image: hawaishirt, price: "16000" },
        { name: 'Dad Shorts', image: dadshort, price: "20000" },
        { name: 'Leather Sandals 2', image: coolsandals2, price: "20000" }
    ];



    // Wardrobe summer slider
    const wardrobeSummerSlider = (
        <Slider {...innersettings} className="wardrobe_slider">
            {summerWardrobeItems.map((product, index) => (
                <div className="card_2" key={index}>
                    <img src={product.image} alt={product.name} />
                    <div className="item_purchase_container">
                        <div className="name_price_pick">
                            <h3 className="name_pick">{product.name}</h3>
                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                        </div>
                        <button className="purchase_pick" onClick={() => handleClick(product)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </Slider>
    );



    // Summer slider
    const slidingSummer = (
        <Slider {...mainsettings}>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">Why don't you try these :</p>
                    <p className="short_exp_p"><i>A Polo T Shirt would match correctly on these shorts especially if you prefer shorts for the summer</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeSummerSlider}
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">Or these :</p>
                    <p className="short_exp_p"><i>A classic white v-neck t-shirt would pair effortlessly with these shorts, especially if you prefer a simple and versatile look for your summer adventures.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeSummerSlider}
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">What about these :</p>
                    <p className="short_exp_p"><i>Opting for a vibrant floral Hawaiian shirt would pair splendidly with these shorts, particularly if you enjoy embracing a tropical vibe for your summer escapades.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeSummerSlider}
                </div>
            </div>
        </Slider>
    );






























































// -------------------------- WINTER SECTION -----------------------------------------------
// -------------------------- WINTER SECTION -----------------------------------------------
// -------------------------- WINTER SECTION -----------------------------------------------




    // Array that contains items for the winter season
    const winterWardrobeItems = [
        { image: sweater1, name: 'Gray sweater', price: "20000" },
        { image: cargokhaki1, name: 'Cargo pants', price: "18000" },
        { image: jordan4, name: 'White Jordan4', price: "25000" },
        { image: sweater2, name: 'Gray sweater 2', price: "18000" },
        { image: blackjogging, name: 'Black joggings', price: "21000" },
        { image: jordan12, name: 'Gray Jordan12', price: "28000" },
        { image: hoodie1, name: 'Black hoodie', price: "20000" },
        { image: cargokhaki3, name: 'Cargo pants', price: "18000" },
        { image: jordan1, name: 'Jordan 1', price: "28000" }
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
                        <button className="purchase_pick" onClick={() => handleClick(product)}>Add to cart</button>
                        
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
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">Or these :</p>
                    <p className="short_exp_p"><i>Pairing these wool trousers with a tailored pea coat would create a sophisticated and timeless ensemble for the winter months.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeWinterSlider}
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p className="Try_on_these">What about these :</p>
                    <p className="short_exp_p"><i>A heavyweight flannel shirt would complement these cargo pants nicely, ideal for a rugged and comfortable outfit during the cold season.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeWinterSlider}
                </div>
            </div>
        </Slider>
    );

























































    // Content Wrapper
    const contentWrapper = (
        <>
            <div className="Small_navbar">
                <button className={isSummer ? "Summer summer-btn" : 'Summer'} onClick={() => setIsSummer(true)}>Summer</button>
                <div className="In_navbar_divisor"></div>
                <button className={!isSummer ? "Winter winter-btn" : 'Winter'} onClick={() => setIsSummer(false)}>Winter</button>
            </div>
            <div className="the_rest_2">
                <div className="Summer_picks_header_container">
                    <h3 className="summer_picks_header">{isSummer ? "Summer Picks" : "Winter Picks"}</h3>
                </div>

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
