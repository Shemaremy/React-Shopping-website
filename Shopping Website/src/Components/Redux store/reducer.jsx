
import {
  ADD_TO_CART,
  LOAD_CART,
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

    case LOAD_CART:
    return {
        ...state,
        currentProduct: action.payload 
    };


    case ADD_TO_CART:
      if (state.counter >= 15) {
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
  