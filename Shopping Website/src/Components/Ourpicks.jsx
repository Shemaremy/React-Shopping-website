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
    const showOtherPicks = () => setPick ('OtherPicks');


    // STATE TO MANAGE CURRENT Winter Picks
    const [pick2, setPick2] = useState('FacingWinterChill');
    const showFacingWinterChill = () => setPick2('FacingWinterChill');
    const showWinterParty = () => setPick2('WinterParty');
    const showOtherPicks2 = () => setPick2('OtherPicks2');





    // STATE TO MANAGE CHANGE OF OURPICK CARDS FOR SUMMER VACATION
    const [card, setCard] = useState('OurpicksCards1');
    const showOurpicksCards1 = () => setCard('OurpicksCards1');
    const showOurpicksCards2 = () => setCard('OurpicksCards2');
    const showOurpicksCards3 = () => setCard('OurpicksCards3');


    // STATE TO MANAGE CHANGE OF OURPICK CARDS FOR SUMMER PARTY
    const [card2, setCard2] = useState('OurpicksCards4');
    const showOurpicksCards4 = () => setCard2('OurpicksCards4');
    const showOurpicksCards5 = () => setCard2('OurpicksCards5');
    const showOurpicksCards6 = () => setCard2('OurpicksCards6');


    // STATE TO MANAGE CHANGE OF OURPICK CARDS FOR SUMMER OTHER PICKS
    const [card3, setCard3] = useState('OurpicksCards7');
    const showOurpicksCards7 = () => setCard3('OurpicksCards7');
    const showOurpicksCards8 = () => setCard3('OurpicksCards8');
    const showOurpicksCards9 = () => setCard3('OurpicksCards9');
    



//------ START OF CARDS-----------------------------------------------------------------------------------------


//SUMMER VACATION CARDS
//-----------------------

    const OurpicksCards1 = (
        <>
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards3}></i></p>
            <div className="card_2">1</div>
            <div className="card_2">2</div>
            <div className="card_2">3</div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards2}></i></p>
        </>
    )

    const OurpicksCards2 = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards1}></i></p>
            <div className="card_2">4</div>
            <div className="card_2">5</div>
            <div className="card_2">6</div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards3}></i></p>
        </>
    )

    const OurpicksCards3 = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards2}></i></p>
            <div className="card_2">7</div>
            <div className="card_2">8</div>
            <div className="card_2">9</div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards1}></i></p>
        </>
    )



//SUMMER PARTY CARDS
//-----------------------

const OurpicksCards4 = (
    <>
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards6}></i></p>
        <div className="card_2">1</div>
        <div className="card_2">2</div>
        <div className="card_2">3</div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards5}></i></p>
    </>
)

const OurpicksCards5 = (
    <>  
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards4}></i></p>
        <div className="card_2">4</div>
        <div className="card_2">5</div>
        <div className="card_2">6</div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards6}></i></p>
    </>
)

const OurpicksCards6 = (
    <>  
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards5}></i></p>
        <div className="card_2">7</div>
        <div className="card_2">8</div>
        <div className="card_2">9</div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards4}></i></p>
    </>
)


//SUMMER OTHER PICKS CARDS
//-----------------------

const OurpicksCards7 = (
    <>
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards9}></i></p>
        <div className="card_2">1</div>
        <div className="card_2">2</div>
        <div className="card_2">3</div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards8}></i></p>
    </>
)

const OurpicksCards8 = (
    <>  
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards7}></i></p>
        <div className="card_2">4</div>
        <div className="card_2">5</div>
        <div className="card_2">6</div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards9}></i></p>
    </>
)

const OurpicksCards9 = (
    <>  
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards8}></i></p>
        <div className="card_2">7</div>
        <div className="card_2">8</div>
        <div className="card_2">9</div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards7}></i></p>
    </>
)











// Summer vacation content

    const ChangeContentInside1 = (
        <>
            <p className="Try_on_these">Why don't you try these :</p>
            <p className="short_exp_p"><i>A Polo T Shirt would match correctly on these shorts especially if you prefer shorts for the summer</i></p>
        </>
    )

    const ChangeContentInside2 = (
        <>
            <p className="Try_on_these">Or these :</p>
            <p className="short_exp_p"><i>A classic white v-neck t-shirt would pair effortlessly with these shorts, especially if you prefer a simple and versatile look for your summer adventures.</i></p>
        </>
    )

    const ChangeContentInside3 = (
        <>
            <p className="Try_on_these">What about these :</p>
            <p className="short_exp_p"><i>Opting for a vibrant floral Hawaiian shirt would pair splendidly with these shorts, particularly if you enjoy embracing a tropical vibe for your summer escapades.</i></p>
        </>
    )



// Summer party content

    const ChangeContentInside4 = (
        <>
            <p className="Try_on_these">Try these Casuals :</p>
            <p className="short_exp_p"><i>A stylish graphic print tank top would be an excellent choice for a summer party, especially when paired with lightweight chino shorts, offering both comfort and style for the occasion.</i></p>
        </>
    )

    const ChangeContentInside5 = (
        <>
            <p className="Try_on_these">Or :</p>
            <p className="short_exp_p"><i>Consider a crisp short-sleeve button-up shirt in a bold color or pattern, paired with comfortable and trendy jogger sweatpants, for a modern and effortlessly cool look at your summer gathering.</i></p>
        </>
    )

    const ChangeContentInside6 = (
        <>
            <p className="Try_on_these">What about these too :</p>
            <p className="short_exp_p"><i>Opt for a breathable polo shirt in a vibrant hue, paired with tailored sweat shorts, to create a laid-back yet polished ensemble that's perfect for enjoying the festivities at a summer party.</i></p>
        </>
    )



    // Summer other picks content

    const ChangeContentInside7 = (
        <>
            <p className="Try_on_these">These are the summer other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    )

    const ChangeContentInside8 = (
        <>
            <p className="Try_on_these">These are the summer other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    )

    const ChangeContentInside9 = (
        <>
            <p className="Try_on_these">These are the summer other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    )





//------ END OF CARDS STRESS!! omg-----------------------------------------------------------------------------------------












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
                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left"  onClick={showOtherPicks}></i></p>
                    <div className="Short_Explanation_container">
                        {card === 'OurpicksCards1' ? ChangeContentInside1 : card === 'OurpicksCards2' ? ChangeContentInside2 : ChangeContentInside3}
                    </div>
                    <div className="Picks_wardrobe">
                         {card === 'OurpicksCards1' ? OurpicksCards1 : card === 'OurpicksCards2' ? OurpicksCards2 : OurpicksCards3}
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
                      {card2 === 'OurpicksCards4' ? ChangeContentInside4 : card2 === 'OurpicksCards5' ? ChangeContentInside5 : ChangeContentInside6}
                    </div>
                    
                    <div className="Picks_wardrobe">
                      {card2 === 'OurpicksCards4' ? OurpicksCards4 : card2 === 'OurpicksCards5' ? OurpicksCards5 : OurpicksCards6}
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showOtherPicks}></i></p>
                </div>
            </div>
        </>
    )


    const OtherPicks = (
        <>
            <div className="Summer_picks_header_container">
                <h3 className="summer_picks_header">Summer Picks</h3>
            </div>

            <div className="the_rest_3">
                <div className="Question_header_container">
                    <p className="question_header">Other Summer Picks:</p>
                </div>
                <div className="the_rest_4">
                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left"  onClick={showGoingToAParty}></i></p>
                    <div className="Short_Explanation_container">
                       {card3 === 'OurpicksCards7' ? ChangeContentInside7 : card3 === 'OurpicksCards8' ? ChangeContentInside8 : ChangeContentInside9}
                    </div>
                    <div className="Picks_wardrobe">
                    {card3 === 'OurpicksCards7' ? OurpicksCards7 : card3 === 'OurpicksCards8' ? OurpicksCards8 : OurpicksCards9}
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showSummerVacation}></i></p>
                </div>
            </div>
        </>
    )
    




//-------------------------------------------------------------------------------------------------


   const FacingWinterChill = (
        <>
            <div className="Summer_picks_header_container">
                <h3 className="summer_picks_header">Winter Picks</h3>
            </div>
            <div className="the_rest_3">
                <div className="Question_header_container">
                    <p className="question_header">Facing the winter chill?</p>
                </div>
                <div className="the_rest_4">
                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left" onClick={showOtherPicks2}></i></p>
                    <div className="Short_Explanation_container">
                        <p className="Try_on_these">Gear up with these top picks:</p>
                        <p className="short_exp_p"><i>A stylish jacket pairs perfectly with these rugged boots, especially if you want to stay warm and look sharp this winter.</i></p>
                    </div>
                    <div className="Picks_wardrobe">
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showWinterParty}></i></p>
                </div>
            </div>
        </>
    )


    const WinterParty = (
        <>
            <div className="Summer_picks_header_container">
                <h3 className="summer_picks_header">Winter Picks</h3>
            </div>
            <div className="the_rest_3">
                <div className="Question_header_container">
                    <p className="question_header">Planning a party this season?</p>
                </div>
                <div className="the_rest_4">
                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left" onClick={showFacingWinterChill}></i></p>
                    <div className="Short_Explanation_container">
                        <p className="Try_on_these">Gear up with these top picks:</p>
                        <p className="short_exp_p"><i>A stylish jacket pairs perfectly with these rugged boots, especially if you want to stay warm and look sharp this winter.</i></p>
                    </div>
                    <div className="Picks_wardrobe">
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showOtherPicks2}></i></p>
                </div>
            </div>
        </>
    )


    const OtherPicks2 = (
        <>
            <div className="Summer_picks_header_container">
                <h3 className="summer_picks_header">Winter Picks</h3>
            </div>
            <div className="the_rest_3">
                <div className="Question_header_container">
                    <p className="question_header">Other Winter Picks</p>
                </div>
                <div className="the_rest_4">
                    <p className="Chevron_left_1"><i className="chevron_ico fas fa-chevron-left" onClick={showWinterParty}></i></p>
                    <div className="Short_Explanation_container">
                        <p className="Try_on_these">These are the rest of the picks you might like:</p>
                        <p className="short_exp_p"><i>A stylish jacket pairs perfectly with these rugged boots, especially if you want to stay warm and look sharp this winter.</i></p>
                    </div>
                    <div className="Picks_wardrobe">
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                        <div className="card_2"></div>
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showFacingWinterChill}></i></p>
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
            {pick === 'SummerVacation' ? SummerVacation : pick === 'GoingToAParty' ? GoingToAParty : OtherPicks}        
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
            {pick2 === 'FacingWinterChill' ? FacingWinterChill : pick2 === 'WinterParty' ? WinterParty : OtherPicks2}
        </div>
    </>

    )









    return  <>{season === 'Summer' ? Summer : Winter}</>;

}



export default OurPicks;