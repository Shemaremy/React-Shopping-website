import React from "react";
import { useState } from "react";
import "./Main.css";



const OurPicks = () => {

    // STATE TO MANAGE CURRENT SEASON (summer & winter picks)
    const [season, setSeason] = useState('Summer');
    const showSummer = () => setSeason('Summer');
    const showWinter = () => setSeason('Winter')



    // STATE TO MANAGE CURRENT Summer Picks
    const [pick, setPick] = useState('SummerVacation');
    const showSummerVacation = () => setPick('SummerVacation');
    const showGoingToAParty = () => setPick('GoingToAParty');




    const SummerVacation = (
        <>
            <div className="Summer_picks_header_container">
                <h3 className="summer_picks_header">Summer Picks</h3>
            </div>

            <div className="the_rest_3">
                <div className="Question_header_container">
                    <p className="question_header">Summer vacation?</p>
                </div>
                <div className="the_rest_4">
                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left"  onClick={showSummerVacation}></i></p>
                    <div className="Short_Explanation_container">
                        <p className="Try_on_these">Why don't you try these :</p>
                        <p className="short_exp_p"><i>A Polo T Shirt would match correctly on these shorts especially if you prefer shorts for the summer</i></p>
                    </div>
                    <div className="Picks_wardrobe">
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showGoingToAParty}></i></p>
                </div>
            </div>
        </>
    )

    const GoingToAParty = (
        <>
            <div className="Summer_picks_header_container">
                <h3 className="summer_picks_header">Summer Picks</h3>
            </div>

            <div className="the_rest_3">
                <div className="Question_header_container">
                    <p className="question_header">Going to a party?</p>
                </div>
                <div className="the_rest_4">
                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left"  onClick={showSummerVacation}></i></p>
                    <div className="Short_Explanation_container">
                        <p className="Try_on_these">Why don't you try these :</p>
                        <p className="short_exp_p"><i>A Polo T Shirt would match correctly on these shorts especially if you prefer shorts for the summer</i></p>
                    </div>
                    
                    <div className="Picks_wardrobe">
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showGoingToAParty}></i></p>
                </div>
            </div>
        </>
    )


    // SUMMER PICKS FULL COMPONENT
    //-------------------------------------------------------------------------------------------------------------------------------

    const Summer = (

    <>
        <div className="Small_navbar">
            <button className={`Summer ${season === 'Summer' ? 'summer-btn' : ''}`} onClick={showSummer}>Summer</button>
            <div className="In_navbar_divisor"></div>
            <button className={`Winter ${season === 'Winter' ? 'winter-btn' : ''}`} onClick={showWinter}>Winter</button>
        </div>
        <div className="the_rest_2">
            {pick === 'SummerVacation' ? SummerVacation : GoingToAParty}
        </div>
    </>

    )


    //-------------------------------------------------------------------------------------------------------------------------------

    // WINTER PICKS FULL COMPONENT
    //----------------------------

    const Winter = (

    <>
        <div className="Small_navbar">
            <button className={`Summer ${season === 'Summer' ? 'summer-btn' : ''}`} onClick={showSummer}>Summer</button>
            <div className="In_navbar_divisor"></div>
            <button className={`Winter ${season === 'Winter' ? 'winter-btn' : ''}`} onClick={showWinter}>Winter</button>
        </div>
        <div className="the_rest_2">
            <div className="Summer_picks_header_container">
                <h3 className="summer_picks_header">Winter Picks</h3>
            </div>
            <div className="the_rest_3">
                <div className="Question_header_container">
                    <p className="question_header">Facing the winter chill?</p>
                </div>
                <div className="the_rest_4">
                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left"></i></p>
                    <div className="Short_Explanation_container">
                        <p className="Try_on_these">Gear up with these top picks:</p>
                        <p className="short_exp_p"><i>A stylish jacket pairs perfectly with these rugged boots, especially if you want to stay warm and look sharp this winter.</i></p>
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
    </>

    )

    return  <>{season === 'Summer' ? Summer : Winter}</>;

}



export default OurPicks;