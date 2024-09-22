import React, { useState, useEffect, useRef } from 'react';
import './Yall.css';
import '../Updator.css';

const UpdateItems = () => {  


  const buttonState = {
    ALL: 'all',
    SHOES: 'shoes',
    HOODIES: 'hoodies',
    JACKETS: 'jackets',
    TSHIRTS: 'tshirts',
    PANTS: 'pants',
    CAPS: 'caps'
  };

  const [button, setButton] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [loadingState, setLoadingState] = useState({}); // Keep track of loading state for each category
  const [load, setUpdateLoad] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [products, setProducts] = useState([]);


  const [newItem, setNewItem] = useState({ name: '', category: '', price: '', quantity: '', size: '', image: null });
  const [passedname, setPassedname] = useState('');
  const [passedId, setPassedId] = useState('');

  const fileInputRef = useRef(null);

  const isActive = (panel) => button === panel ? 'active' : '';











  // ----- Function to handle loading state for each button ---------------------------------

  const setLoading = (category, value) => {
    setLoadingState(prevState => ({
      ...prevState,
      [category]: value
    }));
  };





  // -- Function to fetch data --------------------------------------------------------------

  const fetchData = async (category, url) => {
    const disableButton = document.querySelector('.nav-button');
    disableButton.classList.add('disable');
    setIsButtonDisabled(true);
    setLoading(category, true);

    setButton(category);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
        setLoading(category, false);
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false);
        setTotalItems(data.length);
        console.log(data);
      } else {
        setLoading(category, false);
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false);
        alert('Failed to fetch items from the store.');
      }
    } catch (error) {
      setLoading(category, false);
      disableButton.classList.remove('disable');
      setIsButtonDisabled(false);
      console.error('Error fetching products:', error);
    }
  };








  // ---- Helper functions -------------------------------------------------------------------

  const displayAll = () => fetchData(buttonState.ALL, 'https://verve-users.glitch.me/api/admindisplay');
  const displayShoes = () => fetchData(buttonState.SHOES, 'https://verve-users.glitch.me/api/admindisplay?category=Shoes');
  const displayHoodies = () => fetchData(buttonState.HOODIES, 'https://verve-users.glitch.me/api/admindisplay?category=Hoodies');
  const displayJackets = () => fetchData(buttonState.JACKETS, 'https://verve-users.glitch.me/api/admindisplay?category=Jackets');
  const displayTshirts = () => fetchData(buttonState.TSHIRTS, 'https://verve-users.glitch.me/api/admindisplay?category=T-shirts');
  const displayPants = () => fetchData(buttonState.PANTS, 'https://verve-users.glitch.me/api/admindisplay?category=Pants');
  const displayCaps = () => fetchData(buttonState.CAPS, 'https://verve-users.glitch.me/api/admindisplay?category=Caps');










































// --------------- UPDATING ITEMS SECTION ---------------------------------------------------------------------------------
// --------------- UPDATING ITEMS SECTION ---------------------------------------------------------------------------------
// --------------- UPDATING ITEMS SECTION ---------------------------------------------------------------------------------

    const handleBringPage = (theName, theID) => {
        const bringPage = document.querySelector('.update-page');
        bringPage.classList.add('is-active');
        setPassedname(theName);
        setPassedId(theID);
    };

    const handleClosePage = (e) => {
        if (e.target === e.currentTarget) {
            const bringPage = document.querySelector('.update-page');
            bringPage.classList.remove('is-active');
        }
    };
  

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        const validTypes = ['image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            alert("Only .jpg and .png files are supported.");
            return;
        }

        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
            alert("File size must be less than 10MB.");
            return;
        }

        setNewItem({ ...newItem, image: file });
    };

    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSizeInput = (sizeInput) => {
      const validSize = sizeInput.replace(/[^a-zA-Z0-9,\s]/g, '').toUpperCase();
    
      let sizeArray = validSize.split(/[,\s]+/).filter(Boolean);
      const validSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    
      sizeArray = sizeArray.filter(size => validSizes.includes(size) || /^\d+$/.test(size));
    
      if (sizeArray.length === 0) {
        alert("Please enter valid size values: XS, S, M, L, XL, XXL, or numeric values (46, 27).");
        return '';
      }
    
      const isNumeric = sizeArray.every(size => !isNaN(size));
    
      if (isNumeric) {
        sizeArray = [...new Set(sizeArray)].sort((a, b) => parseFloat(a) - parseFloat(b));
      } else {
        sizeArray = [...new Set(sizeArray)].sort((a, b) => validSizes.indexOf(a) - validSizes.indexOf(b));
      }
    
      return sizeArray.join(', ');
    };

    const handleUpdateItem = async () => {
        const bringPage = document.querySelector('.update-page');
        const disableButton = document.querySelector('.update-button');
        disableButton.classList.add('disable');
        setIsButtonDisabled(true);
        setUpdateLoad(true);

        const { name, category, price, quantity, size, image } = newItem;
        const updatedFields = {};

        if (name) updatedFields.name = name;
        if (category) updatedFields.category = category;
        if (price) updatedFields.price = price;
        if (quantity) updatedFields.quantity = quantity;
        if (size) {
          const formattedSize = handleSizeInput(size);
          if (!formattedSize) {
              setUpdateLoad(false);
              disableButton.classList.remove('disable');
              setIsButtonDisabled(false);
              return;
          }
          updatedFields.size = formattedSize;
        }

        try {
            if (image) {
                const base64Image = await convertImageToBase64(image);
                updatedFields.image = base64Image;
            }

            if (Object.keys(updatedFields).length === 0) {
                alert("Please input at least one field to update.");
                return;
            }

            const response = await fetch(`https://verve-users.glitch.me/api/adminupdate/${passedId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFields),
            });

            const data = await response.json();

            if (response.ok) {
                setUpdateLoad(false);
                disableButton.classList.remove('disable');
                setIsButtonDisabled(false);              
                alert('Product updated successfully.');
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                bringPage.classList.remove('is-active');
                displayAll();
            } else {
                setUpdateLoad(false);
                disableButton.classList.remove('disable');
                setIsButtonDisabled(false);
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            setUpdateLoad(false);
            disableButton.classList.remove('disable');
            setIsButtonDisabled(false);
            console.error('Error updating product:', error);
            alert('Failed to update product.');
        }
    };
  
  

    const updateItems = (
        <div className="update-container">
            <h2>Update Item: &nbsp; <span className='passed-name'>({passedname})</span></h2>
            <label>Name</label>
            <input type="text" name="name" value={newItem.name} onChange={handleChange} placeholder="Enter new name" />
            
            <label>Category</label>
            <select name="category" value={newItem.category} onChange={handleChange} className="category-update">
                <option value=""></option>
                <option value="Shoes">Shoes</option>
                <option value="Pants">Pants</option>
                <option value="T shirts">T-shirts</option>
                <option value="Hoodies">Hoodies</option>
                <option value="Jackets">Jackets</option>
                <option value="Caps">Caps</option>
            </select>

            <label>Size</label>
            <input type="text" name="size" value={newItem.size} onChange={handleChange} placeholder="Enter sizes available" />


            <label>Quantity:</label>
            <input type="number" name="quantity" value={newItem.quantity} onChange={handleChange} />


            <label>Price</label>
            <input type="text" name="price" value={newItem.price} onChange={handleChange} placeholder="Enter new price" />


            <label>Image</label>
            <input type="file" onChange={handleImageUpload} ref={fileInputRef}/>
            
            <button className="update-button" onClick={handleUpdateItem} disabled={isButtonDisabled}>
                {load ? <>Updating &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
                : 'Update item'}
            </button>
        </div>
    );
  





















































  // ---- Products display -------------------------------------------------------------------

  const Renderer = (
    <>
      {products.map((item, index) => (
        <div key={index} className="product-card" onClick={() => handleBringPage(item.name, item._id)}>
          <img src={item.image} alt={item.name} className="product-image" />
          <h3 className="product-name">{item.name}</h3>
          <p className="product-category">Category: {item.category}</p>
          <p className="product-size">Size: {item.size}</p>
          <p className="product-quantity">Quantity: {item.quantity}</p>
          <p className="product-price">{item.price}</p>
        </div>
      ))}
    </>
  );













  

  return (
    <div className="display-container">
      <header>
        <h2>Updating existing products</h2>
        <p>Total Products: {totalItems}</p>
      </header>

      <nav className="category-nav">
        <button className={`nav-button ${isActive(buttonState.ALL)}`} onClick={displayAll} disabled={isButtonDisabled}> 
          {loadingState[buttonState.ALL] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View All Products'} 
        </button>
        <button className={`nav-button ${isActive(buttonState.SHOES)}`} onClick={displayShoes} disabled={isButtonDisabled}> 
          {loadingState[buttonState.SHOES] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View Shoes'} 
        </button>
        <button className={`nav-button ${isActive(buttonState.HOODIES)}`} onClick={displayHoodies} disabled={isButtonDisabled}>
          {loadingState[buttonState.HOODIES] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View Hoodies'}
        </button>
        <button className={`nav-button ${isActive(buttonState.JACKETS)}`} onClick={displayJackets} disabled={isButtonDisabled}>
          {loadingState[buttonState.JACKETS] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View Jackets'}
        </button>
        <button className={`nav-button ${isActive(buttonState.TSHIRTS)}`} onClick={displayTshirts} disabled={isButtonDisabled}>
          {loadingState[buttonState.TSHIRTS] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View T-shirts'}
        </button>
        <button className={`nav-button ${isActive(buttonState.PANTS)}`} onClick={displayPants} disabled={isButtonDisabled}>
          {loadingState[buttonState.PANTS] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View Pants'}
        </button>
        <button className={`nav-button ${isActive(buttonState.CAPS)}`} onClick={displayCaps} disabled={isButtonDisabled}>
          {loadingState[buttonState.CAPS] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View Caps'}
        </button>
      </nav>

      <div className="product-display">
        {totalItems === 0 ? <p className='no-items'>No items found &nbsp; <i className="fa-solid fa-circle-exclamation"></i></p> : Renderer}
      </div>

      <div className='update-page' onClick={handleClosePage}>{updateItems}</div>

    </div>
  );
};

export default UpdateItems;
