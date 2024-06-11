import React from "react";
import './autoslide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Itemsautoslide () {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false
      };
    
    return(
        <>
            <div className="slide-items-container">
                <Slider className="slider" {...settings}>
                    <div className="Trend">
                    <div className="card-3">1</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">2</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">3</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">4</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">5</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">6</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">7</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">8</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">9</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">10</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">11</div>
                    </div>
                    <div className="Trend">
                    <div className="card-3">12</div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Itemsautoslide;