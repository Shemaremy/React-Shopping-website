import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import shoe from '../images/Jordan.png';




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
            <div className="The_shoe">
                <img src={shoe} className="Shoe_itself" alt="one" />
            </div>
            <div className="Two_parts_1">
                <div className="Upper_part_1">
                    <div className="Left_part_2">
                        <div className="Shop_with_container">
                            <h1 className="shop_with_header">Nike Jordan One Retro</h1>
                        </div>
                        <div className="Clients_container">
                            <div className="What_they_say_container">
                                <h3 className="what_they_say_header">35,000Frw</h3>
                            </div>
                        </div>
                    </div>
                    <div className="Right_part_2">
                        <div className="Our_latest_container">
                            <p className="Our_latest_paragraph">Our latest products</p>
                        </div>
                        <div className="Shoe_size"></div>
                    </div>
                </div>
                <div className="Lower_part_1"></div>
            </div>
        </div>
    )
}

export default A;