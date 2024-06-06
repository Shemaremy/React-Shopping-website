import React, { useState } from "react";
import './Main.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';




const TrendCards = () => {


    const [index, setIndex] = useState(0);

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const nextCard = () => {
        if (index < cards.length - 1) {
            setIndex(index + 1);
        }
    };

    const prevCard = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };



    return(
        <>
            <div className="Upper_trending_part"></div>
            <div className="Lower_trending_part">
                <p className="Slide_left_customers" onClick={prevCard}>
                    <i className="sld_L_C fas fa-chevron-left"></i>
                </p>
                <div className="Trending_items_library">
                    <TransitionGroup component={null}>
                        <CSSTransition
                            key={cards[index]}
                            timeout={500}
                            classNames="card"
                        >
                            <div className="trend_card">{cards[index]}</div>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <p className="Slide_right_customers" onClick={nextCard}>
                    <i className="sld_L_C fas fa-chevron-right"></i>
                </p>
            </div>
        </>
    );
};

export default TrendCards;