export const ADD_TO_CART = 'ADD_TO_CART';
export const LOAD_CART = 'LOAD_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';









export const addToCart = (product) => {
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token');
        const { currentProduct } = getState();
        const isAlreadyInCart = currentProduct.some(item => item.name === product.name && item.size === product.size);

        if (token === null) {
            if (!isAlreadyInCart) {
                dispatch({
                    type: ADD_TO_CART,
                    payload: product
                });
            }
        }

        else {
            if (!isAlreadyInCart) {
                dispatch({
                    type: ADD_TO_CART,
                    payload: product
                });
            }
        }
    };
};






export const fetchCart = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        /*
        if (token) {
            try {
                const response = await fetch('https://verve-users.glitch.me/api/cart', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    dispatch({
                        type: LOAD_CART,
                        payload: data.cart
                    });
                } else if (response.status === 401) {
                    //alert(data.message)
                    localStorage.setItem('alertMessage', "Token expired");
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                    window.location.reload();
                } else {
                    console.log(data.message);                    
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        }
        */
    };
};




export const removeItem = (index) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');

        if (!token) {
            dispatch({
                type: REMOVE_ITEM,
                payload: index
            });
        }

        else {
            dispatch({
                type: REMOVE_ITEM,
                payload: index
            });
            /*
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
    
                if (response.ok) {
                    const data = await response.json();
                    dispatch({
                        type: REMOVE_ITEM,
                        payload: index
                    });
                } else if (response.status === 401) {   // When my token is invalid or expired
                    alert("Token just expired you need to login again");
                    localStorage.removeItem('token');
                    window.location.reload();
                } else if (response.status === 403) {   // When my token is invalid or expired
                    dispatch({
                        type: REMOVE_ITEM,
                        payload: index
                    });
                } else {
                    alert("Failed to delete item");
                }
            } catch (error) {
                console.error('Error deleting from cart:', error);
            }
            */
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














//------------------------------------------------------------------------------------------------------------------------------------------



// LOGIN action
export const loginUser = (identifier, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://verve-users.glitch.me/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ identifier, password })
            });

            const data = await response.json();

            if (response.ok) {
                const { token, username } = data;
                
                // Store the token and username in local storage
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);

                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: { token, username }
                });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        }
    };
};





