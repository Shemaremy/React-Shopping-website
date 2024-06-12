import React, { useState }  from "react";
import "./Ourpicks.css";


/*-------------------------------------------- SUMMER CLOTHES -----------------------------------------------------------------------*/

import shortArmedTshirt from '../images/Tops/Tshirt1.png'; 
import sweatshort from '../images/pantsandshorts/sweatshorts.png';
import sandals1 from '../images/bottoms/blue sandals.png';



import shortArmedcollarTshirt from '../images/Tops/Tshirt2.png'; 
import fitshort from '../images/pantsandshorts/dadshorts.png';
import coolsandals1 from '../images/bottoms/coolsandals1.png';


import hawaishirt from '../images/Tops/hawaii shirt.png'; 
import dadshort from '../images/pantsandshorts/otherdadshort.png';
import coolsandals2 from '../images/bottoms/coolsandals2.png';

/*----------------------------------------------------------------------------------------------------------------------------------------*/




/*---------------------------------------------------------- WINTER CLOTHES ----------------------------------------------------------------*/

import sweater1 from '../images/Tops/sweater1.png'; 
import cargokhaki1 from '../images/pantsandshorts/cargokhaki1.png';
import jordan4 from '../images/bottoms/Jordan 4 white.png';



import sweater2 from '../images/Tops/sweater2.png'; 
import blackjogging from '../images/pantsandshorts/blackjogging.png';
import jordan12 from '../images/bottoms/Jordan 12 gray.png';


import hoodie1 from '../images/Tops/hoodie1.png'; 
import cargokhaki3 from '../images/pantsandshorts/cargokhaki1.png';
import jordan1 from '../images/bottoms/Jordan 1 red.png';

/*----------------------------------------------------------------------------------------------------------------------------------------*/



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


    
















    


























































































//--------------------------------------------------- SUMMER SECTION  -------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------------------------------------------------


//SUMMER VACATION 
//----------------

    // STATE TO MANAGE CHANGE OF OURPICK CARDS FOR SUMMER VACATION
    const [card, setCard] = useState('OurpicksCards1');
    const showOurpicksCards1 = () => setCard('OurpicksCards1');
    const showOurpicksCards2 = () => setCard('OurpicksCards2');
    const showOurpicksCards3 = () => setCard('OurpicksCards3');




    // These are defining cards, and in responsible for what happens when one clicks chevron icons

    const OurpicksCards1 = (
        <>
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards3}></i></p>
            <div className="card_2">
                <div className="top_item"><img className="top" src={shortArmedTshirt} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item"><img className="leg" src={sweatshort} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item"><img className="bottom" src={sandals1} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards2}></i></p>
        </>
    );

    const OurpicksCards2 = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards1}></i></p>
            <div className="card_2">
            <div className="top_item"><img className="top" src={shortArmedcollarTshirt} alt="" /></div>
            </div>
            <div className="card_2">
            <div className="leg_item"><img className="leg fitshort" src={fitshort} alt="" /></div>
            </div>
            <div className="card_2">
            <div className="bottom_item"><img className="bottom coolsandals1" src={coolsandals1} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards3}></i></p>
        </>
    );

    const OurpicksCards3 = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards2}></i></p>
            <div className="card_2">
            <div className="top_item"><img className="top hawaii" src={hawaishirt} alt="" /></div>
            </div>
            <div className="card_2">
            <div className="leg_item"><img className="leg otherdadshort" src={dadshort} alt="" /></div>
            </div>
            <div className="card_2">
            <div className="bottom_item"><img className="bottom coolsandals2" src={coolsandals2} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards1}></i></p>
        </>
    );



    // Summer vacation content

    const ChangeContentInside1 = (
        <>
            <p className="Try_on_these">Why don't you try these :</p>
            <p className="short_exp_p"><i>A Polo T Shirt would match correctly on these shorts especially if you prefer shorts for the summer</i></p>
        </>
    );

    const ChangeContentInside2 = (
        <>
            <p className="Try_on_these">Or these :</p>
            <p className="short_exp_p"><i>A classic white v-neck t-shirt would pair effortlessly with these shorts, especially if you prefer a simple and versatile look for your summer adventures.</i></p>
        </>
    );

    const ChangeContentInside3 = (
        <>
            <p className="Try_on_these">What about these :</p>
            <p className="short_exp_p"><i>Opting for a vibrant floral Hawaiian shirt would pair splendidly with these shorts, particularly if you enjoy embracing a tropical vibe for your summer escapades.</i></p>
        </>
    );





//Final html tags to wrap SUMMER VACATION
//---------------------------------------
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

);






//----------------------------------------------------------------------------------------------------------------------------------------------






    //GOING TO A PARTY
    //----------------

    const [card2, setCard2] = useState('OurpicksCards4');
    const showOurpicksCards4 = () => setCard2('OurpicksCards4');
    const showOurpicksCards5 = () => setCard2('OurpicksCards5');
    const showOurpicksCards6 = () => setCard2('OurpicksCards6');



    
    //SUMMER PARTY CARDS
    //-----------------------

    const OurpicksCards4 = (
        <>
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards6}></i></p>
            <div className="card_2">
                <div className="top_item"><img className="top" src={shortArmedTshirt} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item"><img className="leg" src={sweatshort} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item"><img className="bottom" src={sandals1} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards5}></i></p>
        </>
    );

    const OurpicksCards5 = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards4}></i></p> 
            <div className="card_2">
                <div className="top_item"><img className="top" src={shortArmedcollarTshirt} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item"><img className="leg fitshort" src={fitshort} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item"><img className="bottom coolsandals1" src={coolsandals1} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards6}></i></p>
        </>
    );

    const OurpicksCards6 = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards5}></i></p>
            <div className="card_2">
                <div className="top_item"><img className="top hawaii" src={hawaishirt} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item"><img className="leg otherdadshort" src={dadshort} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item"><img className="bottom coolsandals2" src={coolsandals2} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards4}></i></p>
        </>
    );



    // Summer party content

    const ChangeContentInside4 = (
        <>
            <p className="Try_on_these">Try these Casuals :</p>
            <p className="short_exp_p"><i>A stylish graphic print tank top would be an excellent choice for a summer party, especially when paired with lightweight chino shorts, offering both comfort and style for the occasion.</i></p>
        </>
    );

    const ChangeContentInside5 = (
        <>
            <p className="Try_on_these">Or :</p>
            <p className="short_exp_p"><i>Consider a crisp short-sleeve button-up shirt in a bold color or pattern, paired with comfortable and trendy jogger sweatpants, for a modern and effortlessly cool look at your summer gathering.</i></p>
        </>
    );

    const ChangeContentInside6 = (
        <>
            <p className="Try_on_these">What about these too :</p>
            <p className="short_exp_p"><i>Opt for a breathable polo shirt in a vibrant hue, paired with tailored sweat shorts, to create a laid-back yet polished ensemble that's perfect for enjoying the festivities at a summer party.</i></p>
        </>
    );




    //Final html tags to wrap SUMMER PARTY
    //-------------------------------------
    
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
    );


//----------------------------------------------------------------------------------------------------------------------------------------------



    // STATE TO MANAGE CHANGE OF CARDS FOR SUMMER OTHER PICKS
    const [card3, setCard3] = useState('OurpicksCards7');
    const showOurpicksCards7 = () => setCard3('OurpicksCards7');
    const showOurpicksCards8 = () => setCard3('OurpicksCards8');
    const showOurpicksCards9 = () => setCard3('OurpicksCards9');




    //SUMMER OTHER PICKS CARDS
    //-----------------------

    const OurpicksCards7 = (
        <>
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards9}></i></p>
            <div className="card_2">
                <div className="top_item"><img className="top" src={shortArmedTshirt} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item"><img className="leg" src={sweatshort} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item"><img className="bottom" src={sandals1} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards8}></i></p>
        </>
    );

    const OurpicksCards8 = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards7}></i></p>
            <div className="card_2">
            <div className="top_item"><img className="top" src={shortArmedcollarTshirt} alt="" /></div>
            </div>
            <div className="card_2">
            <div className="leg_item"><img className="leg fitshort" src={fitshort} alt="" /></div>
            </div>
            <div className="card_2">
            <div className="bottom_item"><img className="bottom coolsandals1" src={coolsandals1} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards9}></i></p>
        </>
    );

    const OurpicksCards9 = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCards8}></i></p>
            <div className="card_2">
            <div className="top_item"><img className="top hawaii" src={hawaishirt} alt="" /></div>
            </div>
            <div className="card_2">
            <div className="leg_item"><img className="leg otherdadshort" src={dadshort} alt="" /></div>
            </div>
            <div className="card_2">
            <div className="bottom_item"><img className="bottom coolsandals2" src={coolsandals2} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCards7}></i></p>
        </>
    );




    // Summer other picks content

    const ChangeContentInside7 = (
        <>
            <p className="Try_on_these">These are the summer other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    );

    const ChangeContentInside8 = (
        <>
            <p className="Try_on_these">These are the summer other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    );

    const ChangeContentInside9 = (
        <>
            <p className="Try_on_these">These are the summer other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    );


    

    //Final html tags to wrap OTHER PICKS SUMMER
    //------------------------------------------
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
    


    







//----------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------END OF SUMMER---------------------------------------------------------------------------














































































































































//----------------------------------------WINTER SECTION----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------


  // STATE TO MANAGE FACING WINTER CHILL CARDS
  const [CARD, setCARD] = useState('OurpicksCardsA');
  const showOurpicksCardsA = () => setCARD('OurpicksCardsA');
  const showOurpicksCardsB = () => setCARD('OurpicksCardsB');
  const showOurpicksCardsC = () => setCARD('OurpicksCardsC');

  


  // These are defining cards, and in responsible for what happens when one clicks chevron icons

  const OurpicksCardsA = (
    <>
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsC}></i></p>
        <div className="card_2">
            <div className="top_item_2"><img className="top-2" src={sweater1} alt="" /></div>
        </div>
        <div className="card_2">
            <div className="leg_item_2"><img className="leg-2" src={cargokhaki1} alt="" /></div>
        </div>
        <div className="card_2">
            <div className="bottom_item_2"><img className="bottom-2 jordan4" src={jordan4} alt="" /></div>
        </div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsB}></i></p>
    </>
  );

  const OurpicksCardsB = (
    <>
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsA}></i></p>
        <div className="card_2">
            <div className="top_item_2"><img className="top-2 sweater2" src={sweater2} alt="" /></div>
        </div>
        <div className="card_2">
            <div className="leg_item_2"><img className="leg-2 blackjogging" src={blackjogging} alt="" /></div>
        </div>
        <div className="card_2">
            <div className="bottom_item_2"><img className="bottom-2 jordan12" src={jordan12} alt="" /></div>
        </div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsC}></i></p>
    </>
  );

  const OurpicksCardsC = (
    <>
        <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsB}></i></p>
        <div className="card_2">
            <div className="top_item_2"><img className="top-2 hoodie1" src={hoodie1} alt="" /></div>
        </div>
        <div className="card_2">
            <div className="leg_item_2"><img className="leg-2 cargokhaki3" src={cargokhaki3} alt="" /></div>
        </div>
        <div className="card_2">
            <div className="bottom_item_2"><img className="bottom-2 jordan1" src={jordan1} alt="" /></div>
        </div>
        <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsA}></i></p>
    </>
  );




    // Facing winter chill content

    const ChangeContentInsideA = (
    <>
        <p className="Try_on_these">Try these:</p>
        <p className="short_exp_p"><i>These insulated cargo pants would be well-matched with a durable parka for your winter adventures.</i></p>
    </>
    );

    const ChangeContentInsideB = (
        <>
            <p className="Try_on_these">Or these :</p>
            <p className="short_exp_p"><i>Pairing these wool trousers with a tailored pea coat would create a sophisticated and timeless ensemble for the winter months.</i></p>
        </>
    );

    const ChangeContentInsideC = (
        <>
            <p className="Try_on_these">What about these :</p>
            <p className="short_exp_p"><i>A heavyweight flannel shirt would complement these cargo pants nicely, ideal for a rugged and comfortable outfit during the cold season.</i></p>
        </>
    );






    //Final html tags to wrap SUMMER VACATION
    //---------------------------------------

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
                       {CARD === 'OurpicksCardsA' ? ChangeContentInsideA : CARD === 'OurpicksCardsB' ? ChangeContentInsideB : ChangeContentInsideC}
                    </div>
                    <div className="Picks_wardrobe">
                        {CARD === 'OurpicksCardsA' ? OurpicksCardsA : CARD === 'OurpicksCardsB' ? OurpicksCardsB : OurpicksCardsC}
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showWinterParty}></i></p>
                </div>
            </div>
        </>
    )



//----------------------------------------------------------------------------------------------------------------------------------------------


    //WINTER PARTY
    //-----------------

    const [CARD2, setCARD2] = useState('OurpicksCardsD');
    const showOurpicksCardsD = () => setCARD2('OurpicksCardsD');
    const showOurpicksCardsE = () => setCARD2('OurpicksCardsE');
    const showOurpicksCardsF = () => setCARD2('OurpicksCardsF');


    //WINTER PARTY CARDS
    //-----------------------

    const OurpicksCardsD = (
        <>
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsF}></i></p>
            <div className="card_2">
                <div className="top_item_2"><img className="top-2" src={sweater1} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item_2"><img className="leg-2" src={cargokhaki1} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item_2"><img className="bottom-2 jordan4" src={jordan4} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsE}></i></p>
        </>
    );

    const OurpicksCardsE = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsD}></i></p>
            <div className="card_2">
                <div className="top_item_2"><img className="top-2 sweater2" src={sweater2} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item_2"><img className="leg-2 blackjogging" src={blackjogging} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item_2"><img className="bottom-2 jordan12" src={jordan12} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsF}></i></p>
        </>
    );

    const OurpicksCardsF = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsE}></i></p>
            
            <div className="card_2">
                <div className="top_item_2"><img className="top-2 hoodie1" src={hoodie1} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item_2"><img className="leg-2 cargokhaki3" src={cargokhaki3} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item_2"><img className="bottom-2 jordan1" src={jordan1} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsD}></i></p>
        </>
    );


    // Summer party content

    const ChangeContentInsideD = (
        <>
            <p className="Try_on_these">Try Cozy :</p>
            <p className="short_exp_p"><i>A cozy cashmere sweater paired with dark wash jeans and a stylish bomber jacket would create a trendy and comfortable look suitable for men and boys to rock at winter celebrations.</i></p>
        </>
    );

    const ChangeContentInsideE = (
        <>
            <p className="Try_on_these">Or :</p>
            <p className="short_exp_p"><i>A cable-knit sweater layered over a plaid flannel shirt, paired with dark denim jeans and stylish boots, would create a relaxed yet fashionable look perfect for men and boys at casual winter celebrations</i></p>
        </>
    );

    const ChangeContentInsideF = (
        <>
            <p className="Try_on_these">What about :</p>
            <p className="short_exp_p"><i>Pairing these tailored chinos with a festive plaid shirt and a well-fitted blazer would create a dapper outfit, perfect for men and boys alike for winter parties and special occasions.</i></p>
        </>
    );






    //Final html tags to wrap WINTER PARTY
    //-------------------------------------

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
                        {CARD2 === 'OurpicksCardsD' ? ChangeContentInsideD : CARD2 === 'OurpicksCardsE' ? ChangeContentInsideE : ChangeContentInsideF}
                    </div>
                    <div className="Picks_wardrobe">
                        {CARD2 === 'OurpicksCardsD' ? OurpicksCardsD : CARD2 === 'OurpicksCardsE' ? OurpicksCardsE : OurpicksCardsF}
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showOtherPicks2}></i></p>
                </div>
            </div>
        </>
    );


//----------------------------------------------------------------------------------------------------------------------------------------------




    // STATE TO MANAGE CHANGE OF CARDS FOR SUMMER OTHER PICKS
    const [CARD3, setCARD3] = useState('OurpicksCardsG');
    const showOurpicksCardsG = () => setCARD3('OurpicksCardsG');
    const showOurpicksCardsH = () => setCARD3('OurpicksCardsH');
    const showOurpicksCardsI = () => setCARD3('OurpicksCardsI');



    //WINTER OTHER PICKS CARDS
    //-----------------------

    const OurpicksCardsG = (
        <>
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsI}></i></p>
            <div className="card_2">
                <div className="top_item_2"><img className="top-2" src={sweater1} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item_2"><img className="leg-2" src={cargokhaki1} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item_2"><img className="bottom-2 jordan4" src={jordan4} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsH}></i></p>
        </>
    );

    const OurpicksCardsH = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsG}></i></p>
            
            <div className="card_2">
                <div className="top_item_2"><img className="top-2 sweater2" src={sweater2} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item_2"><img className="leg-2 blackjogging" src={blackjogging} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item_2"><img className="bottom-2 jordan12" src={jordan12} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsI}></i></p>
        </>
    );

    const OurpicksCardsI = (
        <>  
            <p className="Chevron_left_2"><i className="chevron_ico_2 fas fa-chevron-left" onClick={showOurpicksCardsH}></i></p>
            <div className="card_2">
                <div className="top_item_2"><img className="top-2 hoodie1" src={hoodie1} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="leg_item_2"><img className="leg-2 cargokhaki3" src={cargokhaki3} alt="" /></div>
            </div>
            <div className="card_2">
                <div className="bottom_item_2"><img className="bottom-2 jordan1" src={jordan1} alt="" /></div>
            </div>
            <p className="Chevron_right_2"><i className="chevron_ico_2 fas fa-chevron-right" onClick={showOurpicksCardsG}></i></p>
        </>
    );



    // Winter other picks content

    const ChangeContentInsideG = (
        <>
            <p className="Try_on_these">These are the winter other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    );

    const ChangeContentInsideH = (
        <>
            <p className="Try_on_these">These are the winter other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    );

    const ChangeContentInsideI = (
        <>
            <p className="Try_on_these">These are the winter other picks :</p>
            <p className="short_exp_p"><i>Choose accordingly from our other random picks for this summer season</i></p>
        </>
    );
    
    



    //Final html tags to wrap OTHER PICKS SUMMER
    //------------------------------------------


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
                        {CARD3 === 'OurpicksCardsG' ? ChangeContentInsideG : CARD3 === 'OurpicksCardsH' ? ChangeContentInsideH : ChangeContentInsideI}
                    </div>
                    <div className="Picks_wardrobe">
                        {CARD3 === 'OurpicksCardsG' ? OurpicksCardsG : CARD3 === 'OurpicksCardsH' ? OurpicksCardsH : OurpicksCardsI}
                    </div>
                    <p className="Chevron_right_1"><i className="chevron_ico fas fa-chevron-right" onClick={showFacingWinterChill}></i></p>
                </div>
            </div>
        </>
    )



//----------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------END OF WINTER SECTION----------------------------------------------------------------------------------------


































































































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