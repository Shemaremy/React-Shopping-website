import React from "react";
import { useState } from "react";


const summerSection = () => {

    // STATE TO MANAGE CURRENT Summer Picks
    const [pick, setPick] = useState('SummerVacation');
    const showSummerVacation = () => setPick('SummerVacation');
    const showGoingToAParty = () => setPick('GoingToAParty');
    const showOtherPicks = () => setPick ('OtherPicks');





}