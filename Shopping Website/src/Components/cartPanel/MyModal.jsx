import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateQuantity, removeItem, fetchCart } from '../Redux store/actions'; 
import { useNavigate } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css';
import cartSvg from './cartSVGs/cartSvg.png';
import './Mymodal.css';










function MyModal(props) {

  // Extracting specific functions and data from props
  const { showModal, setShowModal, content, product, counter, currentProduct, updateQuantity, removeItem, fetchCart } = props;


  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    if (showModal) {
      fetchCart();
    }
  }, [showModal, fetchCart, props.currentProduct]);
  




















// ------------------------- ADD CART ITEMS TO THE STORE WHILE PROCEEDING ---------------------------------
// ------------------------- ADD CART ITEMS TO THE STORE WHILE PROCEEDING ---------------------------------
// ------------------------- ADD CART ITEMS TO THE STORE WHILE PROCEEDING ---------------------------------

const addListToStore = async (currentProduct) => {
  const disableButton = document.querySelector('.Proceed_total_payment_button');
  disableButton.classList.add('disable');
  setIsButtonDisabled(true);
  setLoading(true);

  const token = localStorage.getItem('token');
  const ProductList = { items: currentProduct };
  
  try {
      const response = await fetch('https://verve-users.glitch.me/api/cart', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(ProductList)
      });

      if (response.ok) {
          alert("Great, added success");
          setLoading(false);
          disableButton.classList.remove('disable');
          setIsButtonDisabled(false);
          navigate('/payment', { state: { currentProduct, totalPrice, selectedSizes } });
      } else if (response.status === 401) {
          localStorage.setItem('alertMessage', "Token expired");
          localStorage.removeItem('token');
          window.location.reload();
      } else {
          console.log("Failed to add item");
      }
  } catch (error) {
      setLoading(false);
      disableButton.classList.remove('disable');
      setIsButtonDisabled(false);
      console.error('Error adding to cart:', error);
      alert('Error adding to cart. Please try again later.');
  }
};

































// --------------------------------------------- GOING TO PAYMENT PAGE SECTION ----------------------------------------------------
// --------------------------------------------- GOING TO PAYMENT PAGE SECTION ----------------------------------------------------
// --------------------------------------------- GOING TO PAYMENT PAGE SECTION ----------------------------------------------------


  // checking if all products have selected sizes
  const allSizesSelected = () => {
    return currentProduct.every((item, index) => selectedSizes[index]);
  };

  // Handle the proceed payment action
  const handleProceedPayment = () => {
    if (!allSizesSelected()) {
      alert("Please select a size for all products before proceeding");
    } else {
      // Create a new array where each product includes its selected size
      const updatedProduct = currentProduct.map((product, index) => ({
        ...product,
        size: selectedSizes[index],
      }));
  
      const token = localStorage.getItem('token');
      if (token === null) {
        addListToStore(updatedProduct);
      } else {
        addListToStore(updatedProduct);
      }
    }
  };
  





    








































// --------------------------------------------- SIZE CHANGE SECTION ----------------------------------------------------
// --------------------------------------------- SIZE CHANGE SECTION ----------------------------------------------------
// --------------------------------------------- SIZE CHANGE SECTION ----------------------------------------------------


  // Handling that when I select the size, it goes in the box
  const [selectedSizes, setSelectedSizes] = useState({});
  const handleSizeChange = (event, index) => {
    setSelectedSizes({ ...selectedSizes, [index]: event.target.value });
  };
    
  useEffect(() => {
    //console.log(selectedSizes);
  }, [selectedSizes]);
    
  





  












// --------------------------------------------- PANEL CLOSING SECTION ----------------------------------------------------
// --------------------------------------------- PANEL CLOSING SECTION ----------------------------------------------------

  // When the panel is being closed
  const modelClick2 = () => {
    setShowModal(false);
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100vw';
  };











































// --------------------------------------------- EMPTY CART SECTION ----------------------------------------------------
// --------------------------------------------- EMPTY CART SECTION ----------------------------------------------------
// --------------------------------------------- EMPTY CART SECTION ----------------------------------------------------






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



























































// --------------------------------------------- CART ITEMS SECTION ----------------------------------------------------
// --------------------------------------------- CART ITEMS SECTION ----------------------------------------------------
// --------------------------------------------- CART ITEMS SECTION ----------------------------------------------------



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
              <div className='left_quantity_size_panel'>
                <div className='size_container'>
                  <p>Size: </p>
                  <select
                    id="size-dropdown"
                    className="size-values"
                    value={selectedSizes[index] || ''}
                    onChange={(event) => handleSizeChange(event, index)}
                    >
                      <option value="">Select size</option>
                      {product.size && typeof product.size === 'string' && product.size.split(', ').map((size, idx) => (
                        <option key={idx} value={size}>{size}</option>
                      ))}

                  </select>
                </div>
                <div className='quantity_container'>
                  <p>Quantity: </p>
                  <div className='quantity'>
                    <p className='reduce' onClick={() => updateQuantity(index, 'decrement')}><i className="fa fa-minus" aria-hidden="true"></i></p>
                    <p className='qnty'>{product.quantity}</p>
                    <p className='add' onClick={() => updateQuantity(index, 'increment')}><i className="fa fa-plus" aria-hidden="true"></i></p>
                  </div>
                </div>
              </div>
              <div className='right_quantity_size_panel'>
                <div className='proceed_delete_panel'>
                  <p className='delete_item'><i onClick={() => removeItem(index)} className="fa fa-trash trash_ico_1" aria-hidden="true"></i></p>
                </div>
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
        <p className='total-items-par'>{currentProduct.reduce((acc, item) => acc + item.quantity, 0)} item(s)</p>
      </div>
      <div className='total_price_panel'>
        <h3 className='Total-price-header'>Summation ($)</h3>
        <p className='total-price-par'>{(totalPrice) / 1000},000Frw <span> &nbsp; &nbsp; (${(totalPrice) / 1000})</span></p>
      </div>
      <div className='proceed_total_payment_panel'>
        <button className='Proceed_total_payment_button' onClick={handleProceedPayment} disabled={isButtonDisabled}>
          {loading ? <>Loading &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></>
          : <>Proceed <i className="fa-solid fa-truck-fast"></i></>}
        </button>
      </div>
    </div>
  );













































































// --------------------------------------------- FINAL RENDER SECTION ----------------------------------------------------
// --------------------------------------------- FINAL RENDER SECTION ----------------------------------------------------
// --------------------------------------------- FINAL RENDER SECTION ----------------------------------------------------


  // Render content based on whether the cart is empty or not
  const finalRender = () => {
    let finalContent;
    const totalQuantity = currentProduct.reduce((acc, item) => acc + item.quantity, 0);

    if (totalQuantity === 0) {
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
          <h2 className="cart_word_panel">Cart <span className='counts_pan'>({currentProduct.reduce((acc, item) => acc + item.quantity, 0)})</span></h2>
          <div className="close_container">
            <button className="close" onClick={modelClick2}><i className="close_ico fa-solid fa-x"></i></button>
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
  removeItem,
  fetchCart
};




export default connect(mapStateToProps, mapDispatchToProps)(MyModal);
