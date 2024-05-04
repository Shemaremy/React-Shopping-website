import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

import shoe from '../images/Jordan.png';
import Paint from '../images/Paint.png';

import item1 from '../images/item1.png';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item4 from '../images/item4.png'; 


 
function A(){
    return(
        <div className="A">
            <nav>
                <div className="Left_part1">
                    <div className="Name_of_company">
                        <h4>Verve.</h4>
                    </div>                    
                    <div className="desk_links">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Products</a>
                        <a href="">Arrivals</a>
                        <a href="">Contact</a>   
                    </div>
                </div>

                <div className="Right_part1">
                    <div className="Input_container_one">
                        <input className="Input_one" type="text" placeholder="Search..."/><button className="Search_icon"><i className="Search_ico fas fa-search"></i></button>
                    </div>
                    <div className="Icon_one"><p className="User_contain"><i className="User_ico fas fa-user"></i></p></div>
                    <div className="Button_container_one"><button className="Button_one"><i className="Cart_ico fas fa-cart-plus"></i>Cart</button></div>                    
                </div>
            </nav>
            <div className="Two_parts_1">
                <div className="Upper_part_1">
                    <div className="Left_part_2">
                        <div className="Shop_with_container">
                            <h1 className="shop_with_header">Shop With <span className="Verve_colored">Verve.</span></h1>
                        </div>
                        <div className="Products_container">
                            <div className="Item_and_price_container">
                                <h3 className="Item_name">Nike air Jordan 1 retro</h3>
                                <p className="item_price">35,000 Frw</p>
                                <button className="Add_to_cart_1">Add to cart<i className="Cart_ico_2 fas fa-cart-plus"></i></button>
                            </div>
                            <div className="The_shoe_container">
                                <img src={shoe} className="Shoe_itself" alt="one" />
                            </div>                            
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
                    </div>
                </div>
                <div className="Lower_part_1"></div>
            </div>
        </div>
    )
}

export default A;