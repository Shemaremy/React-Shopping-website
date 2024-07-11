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
        { src: shortArmedTshirt, alt: 'White T-shirt', price: "16000" },
        { src: sweatshort, alt: 'Gray Sweatshort', price: "25000" },
        { src: sandals1, alt: 'Dark blue sandals', price: "20000" },
        { src: shortArmedcollarTshirt, alt: 'White Polo T-shirt', price: "17000" },
        { src: fitshort, alt: 'Gray short', price: "20000" },
        { src: coolsandals1, alt: 'Leather Sandals', price: "20000" },
        { src: hawaishirt, alt: 'Hawaiian Shirt', price: "16000" },
        { src: dadshort, alt: 'Dad Shorts', price: "20000" },
        { src: coolsandals2, alt: 'Leather Sandals 2', price: "20000" }
    ];




    // Wardrobe summer slider
    const wardrobeSummerSlider = (
        <Slider {...innersettings} className="wardrobe_slider">
            {summerWardrobeItems.map((product, index) => (
                <div className="card_2" key={index}>
                    <img src={product.src} alt={product.alt} />
                    <div className="item_purchase_container">
                        <div className="name_price_pick">
                            <h3 className="name_pick">{product.alt}</h3>
                            <p className="price_pick">{(product.price/1000)},000 Frw</p>
                        </div>
                        <button className="purchase_pick">Add to cart</button> 
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
                    <p class="Try_on_these">Why don't you try these :</p>
                    <p class="short_exp_p"><i>A Polo T Shirt would match correctly on these shorts especially if you prefer shorts for the summer</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeSummerSlider}
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p class="Try_on_these">Or these :</p>
                    <p class="short_exp_p"><i>A classic white v-neck t-shirt would pair effortlessly with these shorts, especially if you prefer a simple and versatile look for your summer adventures.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeSummerSlider}
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p class="Try_on_these">What about these :</p>
                    <p class="short_exp_p"><i>Opting for a vibrant floral Hawaiian shirt would pair splendidly with these shorts, particularly if you enjoy embracing a tropical vibe for your summer escapades.</i></p>
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
        { src: sweater1, alt: 'Gray sweater', price: "20000" },
        { src: cargokhaki1, alt: 'Cargo pants', price: "18000" },
        { src: jordan4, alt: 'White Jordan4', price: "25000" },
        { src: sweater2, alt: 'Gray sweater 2', price: "18000" },
        { src: blackjogging, alt: 'Black joggings', price: "21000" },
        { src: jordan12, alt: 'Gray Jordan12', price: "28000" },
        { src: hoodie1, alt: 'Black hoodie', price: "20000" },
        { src: cargokhaki3, alt: 'Cargo pants', price: "18000" },
        { src: jordan1, alt: 'Jordan 1', price: "28000" }
    ];



    // Wardrobe winter slider
    const wardrobeWinterSlider = (
        <Slider {...innersettings} className="wardrobe_slider">
            {winterWardrobeItems.map((item, index) => (
                <div className="card_2" key={index}>
                    <img src={item.src} alt={item.alt} />
                    <div className="item_purchase_container">
                        <div className="name_price_pick">
                            <h3 className="name_pick">{item.alt}</h3>
                            <p className="price_pick">{(item.price/1000)},000 Frw</p>
                        </div>
                        <button className="purchase_pick">Add to cart</button> 
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
                    <p class="Try_on_these">Try these :</p>
                    <p class="short_exp_p"><i>These insulated cargo pants would be well-matched with a durable parka for your winter adventures.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeWinterSlider}
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p class="Try_on_these">Or these :</p>
                    <p class="short_exp_p"><i>Pairing these wool trousers with a tailored pea coat would create a sophisticated and timeless ensemble for the winter months.</i></p>
                </div>
                <div className="Picks_wardrobe">
                    {wardrobeWinterSlider}
                </div>
            </div>
            <div className="In_the_rest_4">
                <div className="Short_Explanation_container">
                    <p class="Try_on_these">What about these :</p>
                    <p class="short_exp_p"><i>A heavyweight flannel shirt would complement these cargo pants nicely, ideal for a rugged and comfortable outfit during the cold season.</i></p>
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
                        <p className="question_header">{isSummer ? "Summer vacation or party ?" : "Facing winter chills ?"}</p>
                    </div>
                    <div className="the_rest_4">
                        {isSummer ? slidingSummer : slidingWinter}
                    </div>
                </div>
            </div>
        </>
    );



    return(
        <>{contentWrapper}</>
    );

}



export default OurPicks; 