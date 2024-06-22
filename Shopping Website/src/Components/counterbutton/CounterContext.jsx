import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [currentProduct, setCurrentProduct] = useState([]);

    const handleClick = (product) => {
        if (counter < 15) {
            setCounter(prevCounter => prevCounter + 1);
            setCurrentProduct(prevItems => [...prevItems, product]);
        } else if (counter >= 15) {
            alert("You've reached maximum items sir! First check your cart above");
        }
    };
    

    return (
        <CounterContext.Provider value={{ counter, handleClick, currentProduct }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    return useContext(CounterContext);
};
