import React, {useState, useEffect} from "react";
import './Itemautoslide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Itemsautoslide ({shoeData}) {
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


    const [item, setItem] = useState ([]);
    const [ mainpreloader, setMainpreloader ] = useState(false);



    useEffect (() => {
        setItem(shoeData)
    }, []);

    


    // Rendering card images and looping
    const slider = item.slice(0, 10).map((product, index) => (
        <div className="Trend" key={index + 1}>
            <div className="card-3"><img className="item_auto" src={product.image} alt="" /></div>
        </div>
    ));






    
    return(
        <>
            <div className="slide-items-container">
                {mainpreloader ? <AutoSlidePreloader/> 
                :
                <Slider className="slider" {...settings}>
                    {slider}
                </Slider>}
            </div>
        </>
    )
}

export default Itemsautoslide;