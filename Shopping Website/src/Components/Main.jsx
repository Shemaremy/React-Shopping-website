import React from "react";
import './Main.css';
import '@fortawesome/fontawesome-free/css/all.css';




function B(){
    return(
        <div className="B">
            <div className="Upper_part_main">
                <h2 className="Our_products_header">Our Products</h2>
            </div>
            <div className="Lower_part_main">
                <div className="All_products_container">
                    <div className="products_section_one">
                        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left"></i></p>
                        <div className="card one"></div>
                        <div className="card two"></div>
                        <div className="card three"></div>
                        <div className="card four"></div>
                        <div className="card five"></div>
                        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right"></i></p>
                    </div>
                    <div className="products_section_two">
                        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left"></i></p>
                        <div className="card one"></div>
                        <div className="card two"></div>
                        <div className="card three"></div>
                        <div className="card four"></div>
                        <div className="card five"></div>
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