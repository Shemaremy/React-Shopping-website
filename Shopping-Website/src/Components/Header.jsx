import React, {useState, useEffect} from "react";


import { useNavigate } from 'react-router-dom';

import { useCounter } from "./Redux store/Counter";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from './Redux store/actions';

;



import MyModal from "./cartPanel/MyModal";
import './Header.css';

import Itemsautoslide from './Itemsautoslide';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";











export const handleLinkClickMobile = (sectionClass, event) => {
    event.preventDefault();

    if (sectionClass) {
        const mobile_panel = document.querySelector('.big-nav-panel-mobile');
        const menu_btn = document.querySelector('.hamburger');
        const mobile_menu = document.querySelector('.mobile_nav');
        const body_fixed = document.querySelector('body');
        
        mobile_panel.classList.remove('is-active');
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
        body_fixed.style.overflowY = 'auto';

        const section = document.querySelector(`.${sectionClass}`);
        section.scrollIntoView({ behavior: 'smooth' });
    }
};







 
function A({shoeData}){

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const currentProduct = useSelector(state => state.currentProduct);
    const searchTerm = useSelector(state => state.searchTerm);
    const [suggestions, setSuggestions] = useState([]);
    const { handleClick} = useCounter();














//--------------------------------- LOADERS SECTION -----------------------------------------------
//--------------------------------- LOADERS SECTION -----------------------------------------------
//--------------------------------- LOADERS SECTION -----------------------------------------------



const [buttonText, setButtonText] = useState();
const [loading, setLoading] = useState(false);


const handleAddToCartClick = async (product) => {
    setLoading(true);
    
    // Simulate a delay (e.g., API call duration)
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    try {
        handleClick(product);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        setButtonText('Error');
    } finally {
        setLoading(false);
    }
};


const [imgloading, setimgLoading] = useState(true);

const handleImageLoad = () => {
    setimgLoading(false);
};



const Imageloader = (
    <div className="image-skimmer">
        <div className='loader-spinner'></div>
    </div>
);



//--------------------------------- END -----------------------------------------------
//--------------------------------- END -----------------------------------------------
//--------------------------------- END -----------------------------------------------



































//------------------------------- BLARING THE CHECK OUT NEW PRODUCTS --------------------------------------
//------------------------------- BLARING THE CHECK OUT NEW PRODUCTS --------------------------------------
//------------------------------- BLARING THE CHECK OUT NEW PRODUCTS --------------------------------------

const [boxShadow, setBoxShadow] = useState('0 0 15px 5px rgba(0, 0, 0, 0.363)');

useEffect(() => {
    const interval = setInterval(() => {
    setBoxShadow(prevBoxShadow =>
        prevBoxShadow === '0 0 15px 5px rgba(0, 0, 0, 0.363)'
        ? '0 0 15px 5px rgba(19, 85, 44, 0.712)'
        : '0 0 15px 5px rgba(0, 0, 0, 0.363)'
    );
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
}, []);


















    



































// ------------------------------------------------ SEARCHING AN ITEM -------------------------------------------------------------------
// ------------------------------------------------ SEARCHING AN ITEM -------------------------------------------------------------------
// ------------------------------------------------ SEARCHING AN ITEM -------------------------------------------------------------------
// ------------------------------------------------ SEARCHING AN ITEM -------------------------------------------------------------------

const [shoedata, setShoedata] = useState([]);

useEffect(() => {
    setShoedata(shoeData)
}, []);








// When the search button is clicked after entering an element
const handleSearchClick = (event) => {
    event.preventDefault();
    const item = shoedata
    .filter(item => item && item.name)  // First remove out the undefined elements
    .find(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (item) {
        const mainer = document.querySelector('.B');
        const element = mainer.querySelector(`[data-name="${item.name}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with data-name="${item.name}" not found.`);
        }
    } else {
        alert('No item found.');
    }
};






const handleSearchTermChange = (term) => {
    dispatch(setSearchTerm(term));
};





// When I'm entering some item name, the suggestion box changes based on what we entering
const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    handleSearchTermChange(value);

    if (value.length > 0) {
        const filteredSuggestions = shoedata
        .filter(item => item && item.name)
        .filter(item => item.name.toLowerCase().includes(value));

        setSuggestions(filteredSuggestions);
    } else {
        setSuggestions([]);
    }
};





// When suggested item is clicked
const handleSuggestionClick = (name) => {
    handleSearchTermChange(name);
    setSuggestions([]);
    
    const mainer = document.querySelector('.B');
    const element = mainer.querySelector(`[data-name="${name}"]`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
    }
};
































































































// ------------------------- SCROLL TO CERTAIN SECTION FROM NAV LINKS ------------------------------------------
// ------------------------- SCROLL TO CERTAIN SECTION FROM NAV LINKS ------------------------------------------
// ------------------------- SCROLL TO CERTAIN SECTION FROM NAV LINKS ------------------------------------------





    // This handles when the desktop nav buttons are clicked, scroll to a certain section
    const handleLinkClickDesk = (sectionClass, event) => {
        event.preventDefault();

        if (sectionClass) {
            const section = document.querySelector(`.${sectionClass}`);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };









































































































// --------------------------------------------- HANDLING THE HIGHLIGHT ITEMS -------------------------------------------------
// --------------------------------------------- HANDLING THE HIGHLIGHT ITEMS -------------------------------------------------
// --------------------------------------------- HANDLING THE HIGHLIGHT ITEMS -------------------------------------------------



const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
};





// Elements containing highlight items on first page
const [Highlight, setHighlight] = useState([]);
const [ mainpreloader, setMainpreloader ] = useState(false);


// Setting Highlighted items
useEffect (() => {
    setHighlight(shoeData);
}, []);





// This is card content wraps
const card4Content = (product) =>(
    <>
        <div className="Item_and_price_container">
            <h3 className="Item_name">{product.name}</h3>
            <p className="item_price">{(product.price/1000)},000 Frw</p>
            <button 
                className="Add_to_cart_1" 
                onClick={() => { handleAddToCartClick(product); setShowModal(false); }}
                disabled={loading} // Disable button while loading
            >
                {loading ? <i className="cart_icon fa-solid fa-spinner fa-spin"></i> : 'Add to cart'}
                {!loading && <i className="Cart_ico_2 fas fa-cart-plus"></i>}
            </button>
        </div>
        <div className="The_shoe_container">
            {imgloading && (Imageloader)}
            <img
                src={product.image}
                className="Shoe_itself"
                alt={product.name}
                onLoad={handleImageLoad}
                style={{ display: imgloading ? 'none' : 'block' }}
            />
        </div>
    </>
);



// Final render Highlight item    
//----------------------------
const highlightItem = Highlight.slice(0, 3).map((product, index) => (
    <div className="contain" key={index + 1} data-name={product.name}>
        <div className="Trend">
            <div className="card-4">{card4Content(product)}</div>
        </div>
    </div>
));




















































































// ----------------------------- HANDLING THE CART PANNEL VISIBILITY ON CLICK -------------------------------------------------
// ----------------------------- HANDLING THE CART PANNEL VISIBILITY ON CLICK -------------------------------------------------
// ----------------------------- HANDLING THE CART PANNEL VISIBILITY ON CLICK -------------------------------------------------



// When the cart is clicked, show cart panel
const modelClick = () => {
    setShowModal(!showModal);
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100vw';
};



// Desktop Cart Button on top of the page
const cartButtonhandle = (
    <>
        <button className="cart_button_one" onClick={modelClick}>
            <div className="Cart_icon_container">
                <i className="cart_ico fas fa-cart-plus">
                    <p className="items_counter">{currentProduct.reduce((acc, item) => acc + item.quantity, 0)}</p>
                </i>
            </div>
        </button>
        <MyModal showModal={showModal} setShowModal={setShowModal} counter={currentProduct.reduce((acc, item) => acc + item.quantity, 0)} product={currentProduct}/>
    </>
);


// Mobile Cart Button on top of the page
const cartButtonhandleMobile = (
    <>
        <div className="Cart_ico_container_mobile" onClick={modelClick}>
            <i className="cart_ico_mobile fas fa-cart-plus">
                <p className="items_counter_mobile">{currentProduct.reduce((acc, item) => acc + item.quantity, 0)}</p>
            </i>
        </div>
        <MyModal showModal={showModal} setShowModal={setShowModal} counter={currentProduct.reduce((acc, item) => acc + item.quantity, 0)} product={currentProduct}/>
    </>
);
































//--------------------------------- HANDLING THE BURGER WHEN CLICKED -----------------------------------
//--------------------------------- HANDLING THE BURGER WHEN CLICKED -----------------------------------
//--------------------------------- HANDLING THE BURGER WHEN CLICKED -----------------------------------

// When the burger is clicked, this is called
const toggleMobileMenu = () => {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile_nav');
    const mobile_panel = document.querySelector('.big-nav-panel-mobile');
    const body_fixed = document.querySelector('body');

    if (menu_btn) {
        menu_btn.classList.toggle('is-active');
    }

    if (mobile_menu) {
        mobile_menu.classList.toggle('is-active');
    }

    if (mobile_panel) {
        mobile_panel.classList.toggle('is-active');
        if (mobile_panel.classList.contains('is-active')) {
            body_fixed.style.overflowY = 'hidden';
        } else {
            body_fixed.style.overflowY = 'auto';
        }
    }

};


















//------------------------- HANDLES WHEN THE MOBILE SEARCH BUTTON IS CLICKED ---------------------
//------------------------- HANDLES WHEN THE MOBILE SEARCH BUTTON IS CLICKED ---------------------
//------------------------- HANDLES WHEN THE MOBILE SEARCH BUTTON IS CLICKED ---------------------


const handleMobileSearch = (event) => { 
    const rightPart = document.querySelector('.right_part_mobile');
    const theInput = document.querySelector('.mobile-search-input');

    if (rightPart) {
        rightPart.classList.add('is-active');
        theInput.classList.add('is-active');
    }

}



const handleSuggestionClickMobile = (name) => {
    handleSearchTermChange(name);
    setSuggestions([]);
    
    const mainer = document.querySelector('.mobile-products-div');
    const element = mainer.querySelector(`[data-name="${name}"]`);
    
    const rightPart = document.querySelector('.right_part_mobile');
    const theInput = document.querySelector('.mobile-search-input');

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
        
        rightPart.classList.remove('is-active');
        theInput.classList.remove('is-active');
    }
};













//------------------------------------------ CHECK OUT CONTENT ----------------------------------------------------
//------------------------------------------ CHECK OUT CONTENT ----------------------------------------------------
//------------------------------------------ CHECK OUT CONTENT ----------------------------------------------------


const checkImages = shoeData;

const newItems1 = (
  <div className="Choose_product_container">
    {checkImages.slice(0, 4).map(({ image, name }, i) => (
      <div key={name} className="eight-items">
        {imgloading && <div className="loader-spinner check-out-loader"></div>}
        <img
          className="new-item"
          src={image}
          alt=''
          onLoad={handleImageLoad}
        />
      </div>
    ))}
  </div>
);


const newItems2 = (
  <div className="Choose_product_container">
    {checkImages.slice(5, 9).map(({ image, name }, i) => (
      <div key={name} className="eight-items">
        {imgloading && <div className="loader-spinner check-out-loader"></div>}
        <img
          className="new-item"
          src={image}
          alt=''
          onLoad={handleImageLoad}
        />
      </div>
    ))}
  </div>
);












const navigate = useNavigate();
const handleGotoAccounts = () => {
    navigate('/accounts');
};
























    return(
        <div className="A">
                <div className="desktop_nav">
                    <div className="Left_part1">
                        <div className="Name_of_company">
                            <h4 className="verve_nav">Verve.</h4>
                        </div>                    
                        <div className="desk_links">
                            <a onClick={(e) => handleLinkClickDesk('A', e)} className="Home">Home</a>
                            <a onClick={(e) => handleLinkClickDesk('B', e)} className="Products">Products</a>
                            <a onClick={(e) => handleLinkClickDesk('Upper-part-trend', e)} className="Trends">Trends</a>
                            <a onClick={(e) => handleLinkClickDesk('C', e)} className="Contact">Contact</a>   
                        </div>
                    </div>

                    <div className="Right_part1">
                        <div className="Input_container_one">
                            <div className="top_search_container">
                                <input className="search_items_input" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                                <div className="Search-icon-container" >
                                    <i className="Search_ico fas fa-search" onClick={handleSearchClick}></i>
                                </div>
                            </div>
                        </div>
                        <div className="Icon_one">
                            <p className="User_contain">
                                <i className="User_ico fas fa-user" onClick={handleGotoAccounts} title="Create an account"></i>
                            </p>
                        </div>
                        <div className="cart_button_container">
                            {cartButtonhandle}
                        </div>                    
                    </div>
                </div>
                <div className="mobile_nav">
                    <div className="left_part_mobile">
                        <div className="burger_container">
                            <button className="hamburger" onClick={toggleMobileMenu}>
                                <div className="bar"></div>
                            </button>
                        </div>
                        <h4 className="mobile_verve_nav">Verve.</h4>
                    </div>
                    <div className="right_part_mobile">
                        <div className="search_mobile_container">
                            <i className="magnify-glass fa-solid fa-magnifying-glass" onClick={handleMobileSearch}></i>
                            <input className="mobile-search-input" 
                                maxLength={15} placeholder="Search ..." 
                                type="text" value={searchTerm} 
                                onChange={handleSearchChange} 
                            />
                        </div>
                        {cartButtonhandleMobile}
                    </div>
                </div>
            <div className="Two_parts_1">
                <div className="Upper_part_1">
                    <div className="Left_part_2">
                        <div className="Shop_with_container">
                            <h1 className="shop_with_header">Shop With <br/> <span className="Verve_colored">Verve.</span></h1>
                        </div>
                        <div className="Products_container">
                            {mainpreloader ? <HighlightsPreloader/> 
                            :
                            <Slider {...settings}>
                                {highlightItem}
                            </Slider>}   
                        </div>
                        <div className="in_the_sugg_mobile">
                            {suggestions.length > 0 && (
                                <div className="suggestions-container">
                                    {suggestions.map((suggestion, index) => (
                                        <div key={index} className="suggestion-item" onClick={() => handleSuggestionClickMobile(suggestion.name)}>
                                            <p className="suggestion_name">{suggestion.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}                            
                        </div>
                    </div>
                    <div className="Right_part_2">
                        <div className="Try_our_new_container">
                            <p className="try_our_new_paragraph" >Check out our new products</p>
                            {newItems1}
                            {newItems2}
                        </div>
                        <div className="in_the_sugg">
                            {suggestions.length > 0 && (
                                <div className="suggestions-container">
                                    {suggestions.map((suggestion, index) => (
                                        <div key={index} className="suggestion-item" onClick={() => handleSuggestionClick(suggestion.name)}>
                                            <p className="suggestion_name">{suggestion.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}                            
                        </div>
                    </div>
                </div>
                <div className="Lower_part_1"><Itemsautoslide shoeData={shoeData}/></div>
            </div>
        </div> 
    )
}

export default A;