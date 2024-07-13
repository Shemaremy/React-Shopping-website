import React, {useState, useEffect} from "react";
import { useCounter } from "./counterbutton/CounterContext";
import { items } from "./TrendCards";
import { Employees } from "./Main";

import MyModal from "./cartPanel/MyModal";
import './Header.css';

import '@fortawesome/fontawesome-free/css/all.css';
import Itemsautoslide from './Itemsautoslide';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import shoe from '../images/Shoes products/Jordan 1 red.png';
import shoe2 from '../images/Shoes products/Jordan 4 white.png';
import shoe3 from '../images/Shoes products/Jordan 4 black.png';

import item1 from '../images/item1.png';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item4 from '../images/item4.png';














 
function A(){


    const [showModal, setShowModal] = useState(false);
    const { counter, handleClick, currentProduct, addToCart } = useCounter();
    const { searchTerm, setSearchTerm } = useCounter();
    const [suggestions, setSuggestions] = useState([]);












// ------------------------------------------------ SEARCHING AN ITEM -------------------------------------------------------------------
// ------------------------------------------------ SEARCHING AN ITEM -------------------------------------------------------------------
// ------------------------------------------------ SEARCHING AN ITEM -------------------------------------------------------------------
// ------------------------------------------------ SEARCHING AN ITEM -------------------------------------------------------------------



// Combine Highlight and items arrays
const combinedItems = [
    { name: "Jordan 1 red", price: "35000", image: shoe, quantity: 1, stars: 2 },
    { name: "Jordan 4 white", price: "30000", image: shoe2, quantity: 1, stars: 4 },
    { name: "Jordan 4 black", price: "45000", image: shoe3, quantity: 1, stars: 3 },
    ...items, ...Employees
];












// When the search button is clicked after entering an element
const handleSearchClick = (event) => {
    event.preventDefault();
    const item = combinedItems.find(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (item) {
        const element = document.querySelector(`[data-name="${item.name}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with data-name="${item.name}" not found.`);
        }
    } else {
        alert('No item found.');
    }
};

















// When I'm entering some item name, the suggestion box changes based on what we entering
const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.length > 0) {
        const filteredSuggestions = combinedItems.filter(item =>
            item.name.toLowerCase().includes(value)
        );
        setSuggestions(filteredSuggestions);
    } else {
        setSuggestions([]);
    }
};








// When clicking to a suggested item, this happens
const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
    const element = document.querySelector(`[data-name="${name}"]`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with data-name="${name}" not found.`);
    }
};



































































// ------------------------- SCROLL TO CERTAIN SECTION FROM NAV LINKS ------------------------------------------
// ------------------------- SCROLL TO CERTAIN SECTION FROM NAV LINKS ------------------------------------------
// ------------------------- SCROLL TO CERTAIN SECTION FROM NAV LINKS ------------------------------------------



    // Effect for smoothness in scrolling transitions
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                document.querySelector("body").classList.add('is-scrolling');
            } else {
                document.querySelector("body").classList.remove('is-scrolling');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



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




// State for highlighted items on the first page
const [Highlight, setHighlight] = useState( 
    [
        { name: "Jordan 1 red", price: "35000", image: shoe, quantity: 1, stars: 2},
        { name: "Jordan 4 white", price: "30000", image: shoe2, quantity: 1, stars: 4},
        { name: "Jordan 4 black", price: "45000", image: shoe3, quantity: 1, stars: 3}      
    ]
);





// This is card content wraps
const card4Content = (product) =>(
    <>
        <div className="Item_and_price_container">
            <h3 className="Item_name">{product.name}</h3>
            <p className="item_price">{(product.price/1000)},000 Frw</p>
            <button className="Add_to_cart_1" onClick={() => {handleClick(product); setShowModal(false);}}>Add to cart<i className="Cart_ico_2 fas fa-cart-plus"></i></button>
        </div>
        <div className="The_shoe_container">
            <img src={product.image} className="Shoe_itself" alt={product.name} />
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


    // When the cart is clicked
    const modelClick = () => {
        setShowModal(!showModal);
        document.body.style.overflow = 'hidden';
        document.body.style.width = '100vw';
    };

    // Cart Button on top of the page
    const cartButtonhandle = (
        <>
            <button className="cart_button_one"  onClick={modelClick}>
                <p className="Cart_ico"><i className="cart_ico fas fa-cart-plus"></i></p>
                <p className="cart_word">Cart</p>
                <p className="items_counter">{counter}</p>
            </button>
            <MyModal showModal={showModal} setShowModal={setShowModal} counter={counter}  product={currentProduct}/>
        </>
    );

































    return(
        <div className="A">
            <nav>
                <div className="Left_part1">
                    <div className="Name_of_company">
                        <h4 className="verve_nav">Verve.</h4>
                    </div>                    
                    <div className="desk_links">
                        <a onClick={(e) => handleLinkClickDesk('A', e)} className="Home">Home</a>
                        <a onClick={(e) => handleLinkClickDesk('B', e)} className="Products">Products</a>
                        <a onClick={(e) => handleLinkClickDesk('Our_picks_container', e)} className="Arrivals">Picks</a>
                        <a onClick={(e) => handleLinkClickDesk('Trending_Section', e)} className="Trends">Trends</a>
                        <a onClick={(e) => handleLinkClickDesk('C', e)} className="Contact">Contact</a>   
                    </div>
                </div>

                <div className="Right_part1">
                    <div className="Input_container_one">
                        <input className="search_items_one" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                        <button className="Search_icon" onClick={handleSearchClick}>
                            <i className="Search_ico fas fa-search"></i>
                        </button>
                    </div>
                    <div className="Icon_one"><p className="User_contain"><i className="User_ico fas fa-user"></i></p></div>
                    <div className="cart_button_container">
                        {cartButtonhandle}
                    </div>                    
                </div>
            </nav>
            <div className="Two_parts_1">
                <div className="Upper_part_1">
                    <div className="Left_part_2">
                        <div className="Shop_with_container">
                            <h1 className="shop_with_header">Shop With <br/> <span className="Verve_colored">Verve.</span></h1>
                        </div>
                        <div className="Products_container">  
                            <Slider {...settings}>
                                {highlightItem}
                            </Slider>       
                        </div>
                    </div>
                    <div className="Right_part_2">
                        <div className="Try_our_new_container">
                            <p className="try_our_new_paragraph">Check out our new products</p>
                            <div className="Choose_product_container">
                                <div className="One"><img className="img_1" src={item1} alt="1" /></div>
                                <div className="Two"><img className="img_2" src={item2} alt="2" /></div>
                                <div className="Three"><img className="img_3" src={item3} alt="3" /></div>
                                <div className="Four"><img className="img_4" src={item4} alt="4" /></div>
                            </div>
                            <div className="Choose_product_container">
                                <div className="One"><img className="img_1" src={item1} alt="1" /></div>
                                <div className="Two"><img className="img_2" src={item2} alt="2" /></div>
                                <div className="Three"><img className="img_3" src={item3} alt="3" /></div>
                                <div className="Four"><img className="img_4" src={item4} alt="4" /></div>
                            </div>
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
                <div className="Lower_part_1"><Itemsautoslide/></div>
            </div>
        </div> 
    )
}

export default A;