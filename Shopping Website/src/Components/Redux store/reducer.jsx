
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  SET_SEARCH_TERM

} from './actions';



  
const initialState = {
  counter: 0,
  currentProduct: [],
  searchTerm: '',
};





const reducer = (state = initialState, action) => {



  switch (action.type) {



    case ADD_TO_CART:
      const isAlreadyInCart = state.currentProduct.some(item => item.name === action.payload.name);
      if (isAlreadyInCart) {
        alert("You're adding an item twice, sir. Check your cart, and choose the quantity of the same product you want.");
        return state;
      } else if (state.counter >= 15) {
        alert("You've reached the maximum items, sir! Please check your cart above.");
        return state;
      } else {
        return {
          ...state,
          counter: state.counter + 1,
          currentProduct: [...state.currentProduct, { ...action.payload, quantity: 1 }]
        };
      }
      
    case REMOVE_ITEM:
      alert("Are you sure you want to remove this item?");
      return {
        ...state,
        counter: state.counter - 1,
        currentProduct: state.currentProduct.filter((_, idx) => idx !== action.payload)
      };


    case UPDATE_QUANTITY:
      const { index, actionType } = action.payload;
      return {
          ...state,
          currentProduct: state.currentProduct.map((item, idx) => {
            if (idx === index) {
              let newQuantity = item.quantity;
              if (actionType === 'increment') {
                newQuantity = Math.min(item.quantity + 1, 10); // Example limit of 10, adjust as needed
              } else if (actionType === 'decrement') {
                newQuantity = Math.max(item.quantity - 1, 1); // Ensure quantity doesn't go below 1
              }
              return { ...item, quantity: newQuantity };
            }
            return item;
          })
        };


    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
   
   
    default:
      return state;
      
  }
};
  






export default reducer;
  