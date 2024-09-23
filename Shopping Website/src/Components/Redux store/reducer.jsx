
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
        const updatedCart = [...state.currentProduct, { ...action.payload, maxQuantity: action.payload.quantity, quantity: 1 }];
        const newState = {
          ...state,
          counter: state.counter + 1,
          currentProduct: updatedCart
        };

        return newState;
      }
      
    case REMOVE_ITEM:
      const updatedCartAfterRemove = state.currentProduct.filter((_, idx) => idx !== action.payload);
      const newStateAfterRemove = {
        ...state,
        counter: state.counter - 1,
        currentProduct: updatedCartAfterRemove
      };
      return newStateAfterRemove;


    case UPDATE_QUANTITY:
      const { index, actionType } = action.payload;
      return {
        ...state,
        currentProduct: state.currentProduct.map((item, idx) => {
          if (idx === index) {
            let newQuantity = item.quantity;
            if (actionType === 'increment') {
              newQuantity = Math.min(item.quantity + 1, item.maxQuantity); 
            } else if (actionType === 'decrement') {
              newQuantity = Math.max(item.quantity - 1, 1);
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
  