import './MyModal.css';
import '@fortawesome/fontawesome-free/css/all.css';

function MyModal(props) {
  const { showModal, setShowModal, content } = props;



  
  let x = 0;





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
    <div className="emptyCart">Empty</div>
  );


    // This is the content for items cart library
  //----------------------------------------------
  const CartItems = (
    <div className="cartItems">Not empty</div>
  );

  

  //Final rendering (wrapped)
  const finalRender = () => {
        let final;
        if (x === 0) {
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