import React, {useState, useEffect} from "react";
import './Itemautoslide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AutoSlidePreloader } from "../Preloader";

import one from '../images/autoslides/Jordan 12 white.png';
import two from '../images/autoslides/Jordan 1 orange.png';
import three from '../images/autoslides/Jordan 5 white.png';
import four from '../images/autoslides/Jordan 1 red.png';
import five from '../images/autoslides/Jordan 4 white.png';
import six from '../images/autoslides/Jordan 13 white.png';
import seven from '../images/autoslides/Jordan 4 black.png';
import eight from '../images/autoslides/Jordan 13 black.png';
import nine from '../images/autoslides/Jordan 4 white.png';





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

/*
      const [item, setItem] = useState (
        [
            { image: one },
            { image: two },
            { image: three },
            { image: four },
            { image: five },
            { image: six },
            { image: seven },
            { image: eight },
            { image: nine }
        ]
      );
*/

    const [item, setItem] = useState ([]);
    const [ mainpreloader, setMainpreloader ] = useState(false);

    /*
    useEffect(() => {
        const fetchShoeData = async () => {
            setMainpreloader(true);
            try {
                const response = await fetch('https://verve-users.glitch.me/api/admindisplay?category=Shoes');
                const data = await response.json();
                if (response.ok) {
                    setMainpreloader(false);
                    setItem(data);
                } else {
                    alert('Failed to fetch shoes from the store.');
                }
                }
            catch (error) {
                setMainpreloader(false);
                console.error('Error fetching products:', error);
            }
        }; 
        fetchShoeData();
    }, []);
    */

    useEffect (() => {
        setItem(shoeData)
    }, []);

    


    // Rendering card images and looping
    const slider = item.slice(0, 5).map((product, index) => (
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