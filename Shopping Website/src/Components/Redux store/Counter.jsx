// This is responsible for the number of items added to cart when add to cart buttons are clicked

import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux store/actions'; 


export const useCounter = () => {

  
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product)); // Dispatching addToCart action with the product
  };

  
  return {
    handleClick,
  };

};
