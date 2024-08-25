export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';



export const addToCart = (product) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
        alert('No token found, please login first');
        return;
        }
        
        try {
            // Call your backend API to add the product to the database
            const response = await fetch('https://verve-users.glitch.me/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // assuming you store the token in localStorage
                },
                body: JSON.stringify({ 
                    itemName: product.name,
                    price: product.price,
                    size: product.size
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Added to database too");

                // Dispatch the synchronous Redux action to update the state
                dispatch({
                    type: ADD_TO_CART,
                    payload: product
                });
            } else {
                alert("Failed to add to database");
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Error adding to cart. Please try again later.');
        }
    };
};


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
