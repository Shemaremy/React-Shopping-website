import './MyModal.css';
import '@fortawesome/fontawesome-free/css/all.css';
import cartSvg from './cartSVGs/cartSvg.png'


function MyModal(props) {
  const { showModal, setShowModal, content, counter, product } = props;





  // This is what happens when the pannel is being closed
  //-----------------------------------------------------
  const modelClick2 = () => {
    setShowModal(false);
    document.body.style.overflowY = 'auto';
    document.body.style.width = '99vw';
  };



  // This is the content for an empty cart library
  //----------------------------------------------
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








  let x = parseInt(product.price); // Assuming product.price is in cents
  let conversion = x / 100; // Convert cents to dollars
  


    // This is the content for items cart library
  //----------------------------------------------
  const CartItems = (
    <div className="cartItems">
        {product.map((product, index) => (
        <div key={index} className='item_added_container'>
            <div className='image_container_panel'>
                <img className='img_readyTogo' src={product.image} alt="flacko" />
            </div>
            <div className='main_details_panel'>
                <div className='Item_name_panel'>
                    <h2 className='itm_nm'>{product.name}</h2>
                    <h4 className='dollar-price'>{conversion}</h4>
                </div>
                <div className='price_and_rate'>
                    <p className='price_pan'>{product.price}</p>
                    <p className='ratings'>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
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
                        <p className='reduce'><i class="fa fa-minus" aria-hidden="true"></i></p>
                        <p className='qnty'>1</p>
                        <p className='add'><i class="fa fa-plus" aria-hidden="true"></i></p>
                    </div>
                    <div className='proceed_delete_panel'>
                        <div className='proceed_payment_pan'>
                            <button className='Proceed_button_incart'>Proceed payment</button>
                        </div>
                        <p className='delete_item'><i class="fa fa-trash" aria-hidden="true"></i></p>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  );

  

  //Final rendering (wrapped)
  const finalRender = () => {
        let final;
        if (counter === 0) {
            final = EmptyCart;
        } else {
            final = CartItems;
        }

        return final;
    };



  return (
    <div className={showModal ? "modal-dialog show" : "modal-dialog"} role="document">
        <div className="panel_container">
            <div className="top-nav">
                <h2 className="cart_word_panel">Cart</h2>
                <div className="close_container">
                    <button className="close" onClick={modelClick2}><i class="fa fa-times close_ico" aria-hidden="true"></i></button>
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


export default MyModal;