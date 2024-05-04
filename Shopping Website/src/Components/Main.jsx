import React from "react";
import './Main.css';
import '@fortawesome/fontawesome-free/css/all.css';





// CARD CONTENT FOR OUR PRODUCTS CARDS
//-------------------------------------

const names = ["Jordan", "Air Force", "Airmax", "Puma", "All Stars", "Congo", "Jordan", "Air Force", "Airmax", "Puma"];



const cardContentOne = (
    <>
      <div className="card_upper_part"></div>
      <div className="card_lower_part">
         <div className="item_name_container"><p className="item_p">Air Jordan 1 Retro</p></div>
         <div className="stars_and_prices_container">
            <div className="stars_container">
                <i class="star fa fa-star" aria-hidden="true"></i>
                <i class="star fa fa-star" aria-hidden="true"></i>
                <i class="star fa fa-star" aria-hidden="true"></i>
                <i class="star fa fa-star" aria-hidden="true"></i>
                <i class="star fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="price_and_cart_container">
                <p className="Price">40,000 Frw</p>
                <p className="cart"><i class="cart_icon fa fa-cart-plus" aria-hidden="true"></i></p>
            </div>
         </div>
      </div>
    </>
); 














function B(){
    
    return( 
        <div className="B">
            <div className="Upper_part_main">
                <h2 className="Our_products_header">Our Products</h2>
                <div className="Browse_by_category">
                    <div className="upper_part_category">
                        <h3 className="browse_header">Browse by category</h3>
                        <p className="browse_par">I'm looking for:</p>
                    </div>
                    <div className="lower_part_category">
                        <button className="browse_button">Men Shoes</button>
                        <button className="browse_button">Women Shoes</button>
                        <button className="browse_button">Pants</button>
                        <button className="browse_button">T-Shirts</button>
                        <button className="browse_button">Hoodies</button>
                        <button className="browse_button">Jackets</button>
                        <button className="browse_button">Caps</button>
                    </div>
                </div>
            </div>
            <div className="Lower_part_main">
                <div className="All_products_container">
                    <div className="products_section_one">
                        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left"></i></p>
                        <div className="card one">{cardContentOne}</div>
                        <div className="card two">{cardContentOne}</div>
                        <div className="card three">{cardContentOne}</div>
                        <div className="card four">{cardContentOne}</div>
                        <div className="card five">{cardContentOne}</div>
                        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right"></i></p>
                    </div>

                    <div className="products_section_two">
                        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left"></i></p>
                        <div className="card one">{cardContentOne}</div>
                        <div className="card two">{cardContentOne}</div>
                        <div className="card three">{cardContentOne}</div>
                        <div className="card four">{cardContentOne}</div>
                        <div className="card five">{cardContentOne}</div>
                        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right"></i></p>
                    </div>
                </div>
                <div className="Our_picks_container">
                    <div className="our_picks_heading_container">
                        <h4 className="our_picks_header">Our Picks:</h4>
                    </div>
                    <div className="The_rest">
                        <div className="Small_navbar">
                            <button className="Summer">Summer</button>
                            <div className="In_navbar_divisor"></div>
                            <button className="Winter">Winter</button>
                        </div>
                        <div className="the_rest_2">
                            <div className="Summer_picks_header_container">
                                <h3 className="summer_picks_header">Summer Picks</h3>
                            </div>
                            <div className="the_rest_3">
                                <div className="Question_header_container">
                                    <p className="question_header">Summer vacation?</p>
                                </div>
                                <div className="the_rest_4">
                                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left"></i></p>
                                    <div className="Short_Explanation_container">
                                        <p className="Try_on_these">Why don't you try these :</p>
                                        <p className="short_exp_p"><i>A Polo T Shirt would match correctly on these shorts especially if you prefer shorts for the summer</i></p>
                                    </div>
                                    <div className="Picks_wardrobe">
                                        <div className="card_2"></div>
                                        <div className="card_2"></div>
                                        <div className="card_2"></div>
                                    </div>
                                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Customer_preferences">
                    <div className="Upper_part_customers">
                        <h4 className="Trending_items_header">Trending Items</h4>
                    </div>
                    <div className="Lower_part_customers">                        
                        <div className="Trending_Section">
                            <div className="Upper_trending_part"></div>
                            <div className="Lower_trending_part">
                                <p className="Slide_left_customers"><i className="sld_L_C fas fa-chevron-left"></i></p>
                                <div className="Trending_items_library">
                                    <div className="Trend_1 trend_card"></div>
                                    <div className="Trend_2 trend_card"></div>
                                    <div className="Trend_3 trend_card"></div>
                                </div>
                                <p className="Slide_right_customers"><i className="sld_L_C fas fa-chevron-right"></i></p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default B;