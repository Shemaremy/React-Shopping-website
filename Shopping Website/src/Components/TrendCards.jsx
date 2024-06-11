import React from "react";
import './Main.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TrendCards = () => {

    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500
      };



    return(
        <>
            <div className="Upper_trending_part"></div>
            <div className="Lower_trending_part">
                <div className="slider-container-2">
                    <Slider {...settings}>
                    <div className="Trend-2">
                        <div className="card-2">1</div>
                    </div>
                    <div className="Trend-2">
                        <div className="card-2">2</div>
                    </div>
                    <div className="Trend-2">
                        <div className="card-2">3</div>
                    </div>
                    <div className="Trend-2">
                        <div className="card-2">4</div>
                    </div>
                    <div className="Trend-2">
                        <div className="card-2">5</div>
                    </div>
                    <div className="Trend-2">
                        <div className="card-2">6</div>
                    </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default TrendCards;