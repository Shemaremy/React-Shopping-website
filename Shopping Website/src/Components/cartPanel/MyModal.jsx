import React from 'react';
import { connect } from 'react-redux';
import { updateQuantity, removeItem } from '../Redux store/actions'; 
import { useNavigate } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css';
import cartSvg from './cartSVGs/cartSvg.png';
import './MyModal.css';










function MyModal(props) {

  // Extracting specific functions and data from props
  const { showModal, setShowModal, content, product, counter, currentProduct, updateQuantity, removeItem } = props;



  const navigate = useNavigate();
  const handleProceedPayment = () => {
    navigate('/payment', { state: { currentProduct, totalPrice } });
  };








  













  // When the panel is being closed
  const modelClick2 = () => {
    setShowModal(false);
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100vw';
  };






  // This is the content for an empty cart library
  const EmptyCart = (
    <div className="emptyCart">
      <div className="upper_empty">
        <div className="svg_container_cart">
          <img className='cartSvg' src={cartSvg} alt="cart svg" />
        </div>
      </div>
      <div className="lower_empty">
        <h1 className='Empty_cart_header'>Your cart is currently empty.</h1>
        <p className='empty_cart_paragraph'>It looks like you haven't added any items to your cart yet. Explore our wide range of products and find something you love.</p>
      </div>
    </div>
  );







  // This is the content for items cart library
  const CartItems = (
    <div className="cartItems">
      {product && product.map((product, index) => (
        <div key={index} className='item_added_container'>
          <div className='image_container_panel'>
            <img className='img_readyTogo' src={product.image} alt="flacko" />
          </div>
          <div className='main_details_panel'>
            <div className='Item_name_panel'>
              <h2 className='itm_nm'>{product.name}</h2>
              <h4 className='dollar-price'>${(product.price / 1000)}</h4>
            </div>
            <div className='price_and_rate'>
              <p className='price_pan'>{(product.price / 1000)},000 Frw</p>
              <p className='ratings'>
                {Array.from({ length: product.stars }, (_, i) => (
                  <i key={i} className="star fa fa-star" aria-hidden="true"></i>
                ))}
              </p>
            </div>
            <div className='quantity_size_pan'>
              <div className='size_container'>
                <select className='size_values' name="" id="">
                  <option value="">40</option>
                  <option value="">41</option>
                  <option value="">42</option>
                </select>
              </div>
              <div className='quantity_container'>
                <p className='reduce' onClick={() => updateQuantity(index, 'decrement')}><i className="fa fa-minus" aria-hidden="true"></i></p>
                <p className='qnty'>{product.quantity}</p>
                <p className='add' onClick={() => updateQuantity(index, 'increment')}><i className="fa fa-plus" aria-hidden="true"></i></p>
              </div>
              <div className='proceed_delete_panel'>
                <div className='proceed_payment_pan'>
                    <button className='Proceed_button_incart' onClick={handleProceedPayment}>Proceed payment</button>                  
                </div>
                <p className='delete_item'><i onClick={() => removeItem(index)} className="fa fa-trash trash_ico_1" aria-hidden="true"></i></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );







  // Calculate total price of items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    currentProduct.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  const totalPrice = calculateTotalPrice();







  // Summation panel when items are present
  const summationPanelIsThere = (
    <div className='summation-pannel'>
      <div className='total_items_panel'>
        <h3 className='Total-items-header'>Total items</h3>
        <p className='total-items-par'>{counter} item(s)</p>
      </div>
      <div className='total_price_panel'>
        <h3 className='Total-price-header'>Summation ($)</h3>
        <p className='total-price-par'>{(totalPrice) / 1000},000Frw <span> &nbsp; &nbsp; (${(totalPrice) / 1000})</span></p>
      </div>
      <div className='proceed_total_payment_panel'>
        <button className='Proceed_total_payment_button' onClick={handleProceedPayment}>Proceed total payment</button>
      </div>
    </div>
  );






  // Render content based on whether the cart is empty or not
  const finalRender = () => {
    let finalContent;
    if (counter === 0) {
      finalContent = EmptyCart;
    } else {
      finalContent = (
        <>
          {CartItems}
          {summationPanelIsThere}
        </>
      );
    }
    return finalContent;
  };

























  return (
    <div className={showModal ? "modal-dialog show" : "modal-dialog"} role="document">
      <div className="panel_container">
        <div className="top-nav">
          <h2 className="cart_word_panel">Cart <span className='counts_pan'>({counter})</span></h2>
          <div className="close_container">
            <button className="close" onClick={modelClick2}><i className="fa fa-times close_ico" aria-hidden="true"></i></button>
          </div>
        </div>

        <div className="bottom-content">
          {finalRender()}
        </div>
      </div>

      <div className="modal-body">
        <p>{content}</p>
      </div>
    </div>
  );



}









// Connect to Redux state and actions
const mapStateToProps = (state) => ({
  counter: state.counter,
  currentProduct: state.currentProduct
});


const mapDispatchToProps = {
  updateQuantity,
  removeItem
};




export default connect(mapStateToProps, mapDispatchToProps)(MyModal);
