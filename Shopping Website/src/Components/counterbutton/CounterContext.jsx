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
            setCurrentProduct(prevItems => [...prevItems, { ...product, quantity: 1 }]);
        }
    };

    const updateQuantity = (index, action) => {
        setCurrentProduct(prevItems => 
            prevItems.map((item, idx) => {
                if (idx === index) {
                    let newQuantity = item.quantity;
                    if (action === 'increment') {
                        newQuantity = Math.min(item.quantity + 1, 10);
                    } else if (action === 'decrement') {
                        newQuantity = Math.max(item.quantity - 1, 1);
                    }
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };
    
    const removeItem = (index) => {
        alert("Are you sure you want to remove this item ?");
        setCurrentProduct(prevItems => prevItems.filter((_, idx) => idx !== index));
        setCounter(prevCounter => prevCounter - 1);
    };
    
    const calculateTotalItems = () => {
        return currentProduct.reduce((acc, item) => acc + item.quantity, 0);
    };

    return (
        <CounterContext.Provider value={{ counter: calculateTotalItems(), handleClick, currentProduct, updateQuantity, removeItem }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    return useContext(CounterContext);
};
