import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [currentProduct, setCurrentProduct] = useState([]);

    const handleClick = (product) => {
         
        const isAlreadyInCart = currentProduct.some((item) => item.name === product.name);
    
        if (isAlreadyInCart) {
            alert("You're adding an item twice, sir. Check your cart, and choose the quantity of the same product you want.");
        } else if (counter >= 15) {
            alert("You've reached the maximum items, sir! Please check your cart above.");
        } else {
            // Proceed to add the item to the cart and update the counter
            setCounter(prevCounter => prevCounter + 1);
            setCurrentProduct(prevItems => [...prevItems, product]);
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
