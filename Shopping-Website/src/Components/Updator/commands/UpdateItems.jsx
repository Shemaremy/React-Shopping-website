import React, { useState, useEffect, useRef } from 'react';
import './Yall.css';
import '../Updator.css';

const UpdateItems = () => {  


  const categories = [
    { key: 'all', label: 'View All', query: '' },
    { key: 'shoes', label: 'Shoes', query: 'Shoes' },
    { key: 'hoodies', label: 'Hoodies', query: 'Hoodies' },
    { key: 'jackets', label: 'Jackets', query: 'Jackets' },
    { key: 'tshirts', label: 'T-shirts', query: 'T-shirts' },
    { key: 'pants', label: 'Pants', query: 'Pants' },
    { key: 'caps', label: 'Caps', query: 'Caps' }
  ];


  const [button, setButton] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [loadingState, setLoadingState] = useState({});
  const [load, setUpdateLoad] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [products, setProducts] = useState([]);


  const [passedname, setPassedname] = useState('');
  const [passedId, setPassedId] = useState('');

  const [showIframe, setShowIframe] = useState(true);
  const [iframeSrc, setIframeSrc] = useState("https://remydp.netlify.app/verve");


  const isActive = (panel) => button === panel ? 'active' : '';





  // Input fields container
  const fields = [
    { label: 'Name', name: 'name', type: 'text', placeholder: 'Ex: Jordan 1 Black' },
    { label: 'Price', name: 'price', type: 'number', placeholder: 'Ex: 35000' },
    { label: 'Quantity', name: 'quantity', type: 'number', placeholder: 'Ex: 10' },
    { label: 'Size', name: 'size', type: 'text', placeholder: 'Ex: 40, 41, S, M, XL,...' },
  ];


  // Dropdown fields container
  const dropdowns = [
    {
      label: 'Category',
      name: 'category',
      options: ['Shoes', 'Pants', 'T-shirts', 'Hoodies', 'Jackets', 'Caps'],
    }
  ];


  // Initial fields state i.e: ''
  const initialFormState = {
    ...Object.fromEntries(fields.map(f => [f.name, ''])),
    ...Object.fromEntries(dropdowns.map(d => [d.name, ''])),
    image: '',
  };

  const [newItem, setNewItem] = useState(initialFormState);








  // ----- Function to handle loading state for each button ---------------------------------

  const setLoading = (category, value) => {
    setLoadingState(prevState => ({
      ...prevState,
      [category]: value
    }));
  };





  // -- Function to fetch data --------------------------------------------------------------

  const URL = 'https://verve-backend-xswh.onrender.com';
  

  const fetchData = async (categoryKey, categoryQuery) => {
    const disableButton = document.querySelector('.nav-button');
    disableButton.classList.add('disable');
    setIsButtonDisabled(true);
    setLoading(categoryKey, true);
    setButton(categoryKey);

    const endpoint = categoryQuery 
    ? `${URL}/api/admindisplay?category=${encodeURIComponent(categoryQuery)}`
    : `${URL}/api/admindisplay`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
        setTotalItems(data.length);
      } else {
        alert('Failed to fetch items from the store.');
      }
      setLoading(categoryKey, false);
      disableButton.classList.remove('disable');
      setIsButtonDisabled(false);
    } catch (error) {
      setLoading(category, false);
      disableButton.classList.remove('disable');
      setIsButtonDisabled(false);
      console.error('Error fetching products:', error);
    }
  };








































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

      
      
      // Handle change for normal products values
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
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

        const updatedFields = {};
        const keys = [ 'name', 'category', 'price', 'quantity', 'image' ];

        keys.forEach(key => {
          if (newItem[key]) updatedFields[key] = newItem[key];
        });


        // Handle 'size' separately
        if (newItem.size) {
          const formattedSize = handleSizeInput(newItem.size);
          if (!formattedSize) {
            setUpdateLoad(false);
            disableButton.classList.remove('disable');
            setIsButtonDisabled(false);
            return;
          }
          updatedFields.size = formattedSize;
        }

        

        
        try {
          if (Object.keys(updatedFields).length === 0) {
            alert("Please input at least one field to update.");
            disableButton.classList.remove('disable');
            setIsButtonDisabled(false);
            setUpdateLoad(false);
            return;
          }

          const response = await fetch(`${URL}/api/adminupdate/${passedId}`, {
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
              //alert('Product updated successfully.');
              // Update the local products state
              setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product._id === passedId
                        ? { ...product, ...updatedFields }
                        : product
                )
            );

            setNewItem(initialFormState);

            setIframeSrc("");
            setTimeout(() => setIframeSrc("https://remydp.netlify.app/verve"), 50);

            bringPage.classList.remove('is-active');
            
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
          <div className='top-update-settings'>
            <h2>Update Item: &nbsp; <span className='passed-name'>({passedname})</span></h2>
            <button className='close-update' onClick={handleClosePage}>X</button>
          </div>
            

          {/* Mapping normal input fields */}
          {fields.map(field => (
            <div className="form-group" key={field.name}>
              <label>{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={newItem[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
              />
            </div>
          ))}

          {/* Images section */}
          <div className="form-group image-group">
            {showIframe && (
              <div style={{ marginTop: "10px" }}>
                <iframe className="img-url-iframe"
                  src={iframeSrc}
                  style={{ border: "none" }}
                />
              </div>
            )}
            <input type="text" name="image" onChange={handleChange} value={newItem.image} placeholder='MAIN IMAGE' />
          </div>


          {dropdowns.map(drop => (
            <div className="form-group" key={drop.name}>
              <label>{drop.label}:</label>
              <select name={drop.name} value={newItem[drop.name]} onChange={handleChange} className="category-input">
                <option value="">-- Select {drop.label} --</option>
                {drop.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
            
            <button className="update-button" onClick={handleUpdateItem} disabled={isButtonDisabled}>
                {load ? <>Updating &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
                : 'Update item'}
            </button>
        </div>
    );
  





















































  // ---- Products display -------------------------------------------------------------------

  const Renderer = (
    <>
      {[...products]
        //.sort((a, b) => a.name.localeCompare(b.name)) Names A - Z
        //.sort((a, b) => a.price - b.price) // Price A - Z
        .sort((a, b) => a.quantity - b.quantity) // Quantity A - Z
        .map((item, index) => (
          <div key={index} className="product-card" onClick={() => handleBringPage(item.name, item._id)}>
            <img src={item.image} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-category">Category: {item.category}</p>
            <p className="product-size">Size: {item.size}</p>
            <p className="product-quantity">Quantity: {item.quantity}</p>
            <p className="product-price">Price: {Number(item.price).toLocaleString("en-US")}</p>
          </div>
      ))}
    </>
  );













  

  return (
    <div className="display-container">
      <header>
        <h2>Updating existing products</h2>
        <p>Total Products: {totalItems}</p>
        <a href="">Back</a>
      </header>

      <nav className="category-nav">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`nav-button ${isActive(cat.key)}`}
            onClick={() => fetchData(cat.key, cat.query)}
            disabled={isButtonDisabled}
          >
            {loadingState[cat.key] ? <>Fetching &nbsp;<i className="fa-solid fa-spinner fa-spin"></i></> : cat.label}
          </button>
        ))}
      </nav>

      <div className="product-display">
        {totalItems === 0 ? <p className='no-items'>No items found &nbsp; <i className="fa-solid fa-circle-exclamation"></i></p> : Renderer}
      </div>

      <div className='update-page'>{updateItems}</div>

    </div>
  );
};

export default UpdateItems;
