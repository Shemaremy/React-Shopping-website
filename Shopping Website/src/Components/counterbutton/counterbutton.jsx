import React, { useState } from 'react';

const CounterButton = ({ onClick }) => {
    const [itemsCount, setItemsCount] = useState(0);

    const handleButtonClick = () => {
        if (itemsCount < 10) {
            setItemsCount(itemsCount + 1);
            onClick(); // Call the onClick function passed as prop
        } else {
            alert("You've reached maximum items! (10)");
        }
    };

    return (null); // This component only returns the functionality, not JSX
};

export default CounterButton;
