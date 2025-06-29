import React, { useState, useEffect } from "react";
import { useCounter } from "./Redux store/Counter";


//import OurPicks from "./Ourpicks";
import TrendCards from "./TrendCards";
//import Slider from "react-slick";
import './Main.css';

import cartSvg from './cartPanel/cartSVGs/emptyBox.png';























function B({allData}) {


    const { handleClick } = useCounter();
    const [ mainpreloader, setMainpreloader ] = useState(false);
    const [ shoedata, setShoedata ] = useState([]);
    








// ------------------------------------------- IMAGE LOADERS -----------------------------------------------
// ------------------------------------------- IMAGE LOADERS -----------------------------------------------
// ------------------------------------------- IMAGE LOADERS -----------------------------------------------
// ------------------------------------------- IMAGE LOADERS -----------------------------------------------


const [imgloading, setimgLoading] = useState(true);

const handleImageLoad = () => {
    setimgLoading(false);
};



const Imageloader = (
    <div className="">
        <div className='loader-spinner'></div>
    </div>
);









































// ------------------------------ TOGGLING NAV BUTTONS -------------------------------------
// ------------------------------ TOGGLING NAV BUTTONS -------------------------------------
// ------------------------------ TOGGLING NAV BUTTONS -------------------------------------



const [isToggled, setIsToggled] = useState(false);
const [activeButton, setActiveButton] = useState('Shoes');



// Popular button
const toggleHandler = () => {
    setIsToggled(!isToggled);
};


// Product category onclicks
const handleCategoryClick = (event) => {
    const buttonName = event.target.getAttribute('data-category');
    setActiveButton(buttonName);
};


















// ------------------- FETCHING PRODUCTS FROM THE DATABASE -------------------------------------------------------
// ------------------- FETCHING PRODUCTS FROM THE DATABASE -------------------------------------------------------
// ------------------- FETCHING PRODUCTS FROM THE DATABASE -------------------------------------------------------

useEffect(() => {
    const fetchData = () => {
        setMainpreloader(true);
        try {
            const filteredData = allData.filter(item => item.category === activeButton);
            setMainpreloader(false);
            setShoedata(filteredData);
        } catch (error) {
            setMainpreloader(false);
            console.error('Error filtering products:', error);
        }
    };
    fetchData();
}, [activeButton, allData]);



// -------- Products not found during fetch ------------------------- 
const notFound = (
    <div className="emptyCart empty-stock">
      <div className="upper_empty">
        <div className="svg_container_cart">
          <img className='cartSvg empty-box' src={cartSvg} alt="cart svg" />
        </div>
      </div>
      <div className="lower_empty">
        <p className='empty_cart_paragraph'>This stock is currently empty !!</p>
      </div>
    </div>
);























































// ------------------------------- HANDLE ADD TO CART LOADER -----------------------------------------
// ------------------------------- HANDLE ADD TO CART LOADER -----------------------------------------
// ------------------------------- HANDLE ADD TO CART LOADER -----------------------------------------


const [buttonText, setButtonText] = useState('A');
const [loading, setLoading] = useState({});




const handleAddToCartClick = async (product) => {
    setLoading((prevLoading) => ({ ...prevLoading, [product.name]: true, [product.size]: true }));
    setButtonText('...');

    // Simulate a delay (e.g., API call duration)
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
        handleClick(product); // Simulate the asynchronous operation
    } catch (error) {
        console.error('Error adding item to cart:', error);
        setButtonText('Error');
    } finally {
        setLoading((prevLoading) => ({ ...prevLoading, [product.name]: false, [product.size]: false }));
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
                {imgloading && (Imageloader)}
                <img src={product.image} 
                    className="Shoes" alt="one" 
                    onLoad={handleImageLoad}
                    style={{ display: imgloading ? 'none' : 'block' }}
                />
                </div>
            </div>
            <div className="draftDown">
                <div className="item_name_container"><p className="item_p">{product.name}</p></div>
                <div className="stars_and_prices_container">
                    <div className="stars_container">
                        <p>Size : {product.size}</p>
                    </div>
                    <p className="quantity-p">Quantity: {product.quantity}</p>
                    <div className="price_and_cart_container">  
                        <p className="Price">{(product.price/1000)},000 Frw</p>
                        <p className="cart" onClick={() => handleAddToCartClick(product)} disabled={loading[product.name]}>
                            {loading[product.name] && loading[product.size] ? <i className="cart_icon fa-solid fa-spinner fa-spin"></i> : <i className="cart_icon fa fa-cart-plus" aria-hidden="true"></i>}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );



    // This is the final rendering in cards but this is upper section
    const TrendDraftOne = shoedata
    .sort((a, b) => {
        // Sort by name first
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        
        // If names are the same, sort by size
        return a.size - b.size;
    })
    .map((product, index) => (
        <div className="Trend-draft" key={index + 1} data-name={product.name}>
            <div className="card-draft">{cardDraftOne(product)}</div>
        </div>
    ));



















    






    return( 
        <div className="B">
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
                                    className={`browse_button ${activeButton === 'Shoes' ? 'active' : ''}`}
                                    data-category="Shoes"
                                    onClick={handleCategoryClick}
                                >
                                    Shoes
                                </button>
                                <button
                                    className={`browse_button ${activeButton === 'Pants' ? 'active' : ''}`}
                                    data-category="Pants"
                                    onClick={handleCategoryClick}
                                >
                                    Pants
                                </button>
                                <button
                                    className={`browse_button ${activeButton === 'T shirts' ? 'active' : ''}`}
                                    data-category="T shirts"
                                    onClick={handleCategoryClick}
                                >
                                    T-shirts
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
                                    {mainpreloader ? (Imageloader) : shoedata.length === 0 ? notFound : TrendDraftOne}
                                </div>
                            </div>
                            <div className="mobile-products-div">
                                {mainpreloader ? (Imageloader) : shoedata.length === 0 ? notFound : TrendDraftOne}
                            </div>
                        </div>
                        {/* <div className="mobile-view-more">
                            <p>View more &nbsp; <i className="fa-solid fa-arrow-right"></i></p>
                        </div> */}
                    </div>
                </div>
                
                <div className="Trend-section">
                    <div className="Upper-part-trend">
                        <h4 className="Trending_items_header">Discover What's Trending</h4>
                        <p className="Trend-description">Stay ahead of the fashion curve with our handpicked trending items! From the latest sneaker drops to classic wardrobe staples, explore the top picks that everyone is talking about.</p>
                    </div>
                    <div className="Lower-part-trend">                    
                        <div className="TrendCards-panel">
                            <TrendCards allData={allData}/>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default B;
