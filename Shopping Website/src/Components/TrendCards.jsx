import React, {useState} from "react";
import './TrendCards.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// These are the trending items
//-----------------------------

import bluesandals from '../images/Trends/coolsandals1.png';
import sweater1 from '../images/Trends/sweater1.png';
import jordan1red from '../images/Trends/Jordan 1 red.png';
import jordan4white from '../images/Trends/Jordan 4 white.png';
import tshirt2 from '../images/Trends/Tshirt2.png';
import jordan13white from '../images/Trends/Jordan 13 white.png';









// These are the svg pngs I used on the botttom of the page
//----------------------------------------------------------


import greatValue from '../images/verveofferspngs/value.png';
import world from '../images/verveofferspngs/world.png';
import pay from '../images/verveofferspngs/pay.png';
import confidence from '../images/verveofferspngs/confidence.png';
import chat from '../images/verveofferspngs/chat.png';




const TrendCards = () => {

    const [activeIndex, setActiveIndex] = useState(0);


    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        beforeChange: (current, next) => setActiveIndex(next)
      };



      const [item, setItem] = useState (
        [
            { name: "Leather Sandals", price: "20,000 Frw", image: bluesandals },
            { name: "Gray Sweater", price: "25,000 Frw", image: sweater1 },
            { name: "Jordan 1 red", price: "28,000 Frw", image: jordan1red },
            { name: "Jordan 4 white", price: "25,000 Frw", image: jordan4white },
            { name: "White Tshirt", price: "17,000 Frw", image: tshirt2 },
            { name: "Jordan 13 white", price: "30,000 Frw", image: jordan13white }
        ]
      );






      // The html content for the card
      //------------------------------

      const card2Content = (product) => (
        <>
            <div className="card_upper"><img className="jordan1red" src={product.image} alt="" /></div>
            <div className="card_lower">
                <h2 className="name">{product.name}</h2>
                <p className="price">{product.price}</p>
                <button className="cart-trend">Add to cart</button>
            </div>
        </>
      );


/*


      // This one is called initially. It also loops cards
      //--------------------------------------------------
      const slider = (
        <>
            <Slider {...settings}>
                {[...Array(6)].map((_, index) => (
                    <div className="Trend-2" key={index}>
                        <div className="card-2">
                            {card2Content}
                        </div>
                    </div>
                ))}            
            </Slider>
        </>
      );


*/





    const slider = item.slice(0, 6).map((product, index) => (
        <div className="Trend-2" key={index + 1}>
            <div className="card-2">{card2Content(product)}</div>
        </div>
    ));

    


      


    return(
        <>
            <div className="Upper_trending_part">
                <div className="slider-container-2">
                    <Slider {...settings}>
                        {slider}
                    </Slider>
                </div>
            </div>

            <div className="underline"></div>

            <div className="Lower_trending_part">
                <div className="verve-offers-you">
                    <h1 className="offers_you_header">Why Verve?</h1>
                </div>
                <div className="service-container">
                    <div className="svg-container">
                        <div className="contain">
                            <div className="svg-real"><img className="svg" src={greatValue} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Great Value</h5>
                                <p className="svg_paragraph">Verve offers various of items to select, promotions, and personalized products.</p>
                            </div>
                        </div>
                        <div className="contain">
                            <div className="svg-real"><img className="svg" src={world} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Worldwide Delivery</h5>
                                <p className="svg_paragraph">Supported in more than 10 countries. Register to get 10,000Frw coupons.</p>
                            </div>
                        </div>
                        <div className="contain">
                            <div className="svg-real"><img className="svg" src={pay} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Safe Payment</h5>
                                <p className="svg_paragraph">Pay with popular and secure payment methods.</p>
                            </div>
                        </div>
                        <div className="contain">
                            <div className="svg-real"><img className="svg" src={confidence} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Shop with Confidence:</h5>
                                <p className="svg_paragraph">Buy high quality and popular products with verve that you won't regret.</p>
                            </div>
                        </div>
                        <div className="contain">
                            <div className="svg-real"><img className="svg" src={chat} alt="" /></div>
                            <div className="svg_words">
                                <h5 className="svg_title">Live Chat</h5>
                                <p className="svg_paragraph">Convenient online consultation and messaging to solve your problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendCards;