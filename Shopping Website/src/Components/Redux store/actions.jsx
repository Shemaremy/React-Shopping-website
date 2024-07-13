export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';



export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});


export const removeItem = (index) => ({
    type: REMOVE_ITEM,
    payload: index
});


export const updateQuantity = (index, actionType) => ({
    type: UPDATE_QUANTITY,
    payload: { index, actionType }
});



export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
});
