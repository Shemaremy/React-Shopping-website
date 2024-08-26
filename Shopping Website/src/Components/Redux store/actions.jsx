export const ADD_TO_CART = 'ADD_TO_CART';
export const LOAD_CART = 'LOAD_CART';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';





export const addToCart = (product) => {
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found, please login first');
        }

        // Check if the item is already in the cart (assuming the cart is stored in Redux)
        const { currentProduct } = getState();
        const isAlreadyInCart = currentProduct.some(item => item.name === product.name);

        if (isAlreadyInCart) {
            alert("You're adding an item twice, sir. Check your cart, and choose the quantity of the same product you want.");
            return;
        }
        
        try {
            // Call your backend API to add the product to the database
            const response = await fetch('https://verve-users.glitch.me/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // assuming you stored the token in localStorage
                },
                body: JSON.stringify({ 
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: product.quantity,
                    sizes: product.sizes 
                })
            });

            const data = await response.json();

            if (response.ok) {
                dispatch({
                    type: ADD_TO_CART,
                    payload: product
                });
            } else {
                alert("Failed to add item");
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Error adding to cart. Please try again later.');
        }
    };
};


export const fetchCart = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('No token found, please login first');
            return;
        }
        
        try {
            // Fetch the cart data from your backend
            const response = await fetch('https://verve-users.glitch.me/api/cart', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                // Dispatch an action to update the cart in the Redux store
                dispatch({
                    type: LOAD_CART,
                    payload: data.cart // Assuming the response has the user's cart in "data.cart"
                });
            } else {
                console.log('Failed to load cart data');
            }
        } catch (error) {
            console.error('Error fetching cart data:', error);
            console.log('Error loading cart data. Please try again later.');
        }
    };
};



























export const removeItem = (index) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        alert("Are you sure you want to remove this item?");

        if (!token) {
            alert('No token found, please login first');
            return;
        }

        try {
            // Call your backend API to remove the product from the database
            const response = await fetch('https://verve-users.glitch.me/api/cart', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ index }) // Send the product name to identify it
            });

            const data = await response.json();

            if (response.ok) {
                // Dispatch the action to remove the product from the Redux store
                dispatch({
                    type: REMOVE_ITEM,
                    payload: index
                });
            } else {
                alert("Failed to delete item");
            }
        } catch (error) {
            console.error('Error deleting from cart:', error);
            alert('Error deleting from cart. Please try again later.');
        }
    };
};











export const updateQuantity = (index, actionType) => ({
    type: UPDATE_QUANTITY,
    payload: { index, actionType }
});



export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
});
