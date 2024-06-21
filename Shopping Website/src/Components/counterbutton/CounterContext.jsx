import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        if (counter < 15) {
            setCounter(prevCounter => prevCounter + 1);
        }
        else {
            alert("You've reached maximum items sir! First check your cart above")
        }

    };

    return (
        <CounterContext.Provider value={{ counter, handleClick }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    return useContext(CounterContext);
};
