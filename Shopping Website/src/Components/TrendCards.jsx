import React from "react";
import './Main.css';



const TrendCards = () => {



    return(
        <>
            <div className="Upper_trending_part"></div>
            <div className="Lower_trending_part">
                <p className="Slide_left_customers">
                    <i className="sld_L_C fas fa-chevron-left"></i>
                </p>
                <div className="Trending_items_library">
                    <div className="trend_card">1</div>
                    <div className="trend_card">2</div>
                    <div className="trend_card">3</div>
                </div>
                <p className="Slide_right_customers">
                    <i className="sld_L_C fas fa-chevron-right"></i>
                </p>
            </div>
        </>
    );
};

export default TrendCards;