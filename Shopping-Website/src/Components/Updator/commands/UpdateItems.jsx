import React, { useState, useEffect, useRef } from 'react';
import './Yall.css';
import '../Updator.css';

const UpdateItems = () => {  


  const categories = [
    { key: 'all', label: 'View All', query: '' },
    { key: 'german_shepherd', label: 'German Shepherds', query: 'German Shepherd' },
    { key: 'bulldog', label: 'Bulldogs', query: 'Bulldog' },
    { key: 'husky', label: 'Siberian Huskies', query: 'Siberian Husky' },
    { key: 'malamute', label: 'Alaskan Malamutes', query: 'Alaskan Malamute' },
    { key: 'poodle', label: 'Poodles', query: 'Poodle' }
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
  const [iframeSrc, setIframeSrc] = useState("https://remydp.netlify.app/kpuppies");


  const isActive = (panel) => button === panel ? 'active' : '';





  // Input fields container
  const fields = [
    { label: 'Name', name: 'name', type: 'text', placeholder: 'Ex: Fiston' },
    { label: 'Price', name: 'price', type: 'number', placeholder: 'Ex: 400000' },
    { label: 'Quantity', name: 'quantity', type: 'number', placeholder: 'Ex: 10' },
    { label: 'Description', name: 'description', type: 'text', placeholder: 'Ex: Nice quality' },
  ];


  // Dropdown fields container
  const dropdowns = [
    {
      label: 'Type',
      name: 'type',
      options: ['German Shepherd', 'Bulldog', 'Siberian Husky', 'Alaskan Malamute', 'Poodle'],
    },
    {
      label: 'Age',
      name: 'age',
      options: ['Less than 5 months', '5 - 12 months', '1 - 5 years'],
    },
    {
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female'],
    },
    {
      label: 'Plug',
      name: 'plug',
      options: ['IGOBE', 'ANTOINE'],
    },
    {
      label: 'Reservatiom',
      name: 'reservation',
      options: ['True', 'False'],
    },
  ];


  // Initial fields state i.e: ''
  const initialFormState = {
    ...Object.fromEntries(fields.map(f => [f.name, ''])),
    ...Object.fromEntries(dropdowns.map(d => [d.name, ''])),
    image: '',
    subImages: ['', '', ''],
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

  // const URL = 'https://kigali-puppies.glitch.me';
  const URL = 'https://kigalipuppies.up.railway.app';

  const fetchData = async (categoryKey, categoryQuery) => {
    const disableButton = document.querySelector('.nav-button');
    disableButton.classList.add('disable');
    setIsButtonDisabled(true);
    setLoading(categoryKey, true);
    setButton(categoryKey);

    const endpoint = categoryQuery 
    ? `${URL}/api/admindisplay?type=${encodeURIComponent(categoryQuery)}`
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


      // Handle change of sub images
      const handleSubImageChange = (index, value) => {
        const updated = [...newItem.subImages];
        updated[index] = value;
        setNewItem({ ...newItem, subImages: updated });
      };
      
      
      // Handle change for normal products values
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
      };



    const handleUpdateItem = async () => {
        const bringPage = document.querySelector('.update-page');
        const disableButton = document.querySelector('.update-button');
        disableButton.classList.add('disable');
        setIsButtonDisabled(true);
        setUpdateLoad(true);

        const updatedFields = {};
        const keys = ['name', 'type', 'age', 'gender', 'reserved', 'price', 'quantity', 'description', 'image', 'plug'];

        keys.forEach(key => {
          if (newItem[key]) updatedFields[key] = newItem[key];
        });


        // if (subImages) updatedFields.subImages = subImages;
        // if (subImages && Array.isArray(subImages) && subImages.some(img => img)) {
        //   updatedFields.subImages = subImages;
        // }


        // Handling proper allocating of sub image urls
        const currentProduct = products.find(p => p._id === passedId);
        const cleanedSubImages = newItem.subImages.map((img, idx) => {
          return img === '' && currentProduct?.subImages?.[idx] ? currentProduct.subImages[idx] : img;
        });


        // Only set subImages if at least one is valid
        if (cleanedSubImages.some(img => img)) {
          updatedFields.subImages = cleanedSubImages;
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
            setTimeout(() => setIframeSrc("https://remydp.netlify.app/kpuppies"), 50);

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
            <input type="text" onChange={(e) => handleSubImageChange(0, e.target.value)} value={newItem.subImages[0]} placeholder='Sub Image 1' />
            <input type="text" onChange={(e) => handleSubImageChange(1, e.target.value)} value={newItem.subImages[1]} placeholder='Sub Image 2' />
            <input type="text" onChange={(e) => handleSubImageChange(2, e.target.value)} value={newItem.subImages[2]} placeholder='Sub Image 3' />
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
        //.sort((a, b) => a.quantity - b.quantity) // Quantity A - Z
        .sort((a, b) => a.plug.localeCompare(b.plug))
        .map((item, index) => (
          <div key={index} className="product-card" onClick={() => handleBringPage(item.name, item._id)}>
            <img src={item.image} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-category">Type: {item.type}</p>
            <p className="product-age">Age range: {item.age}</p>
            <p className="product-size">Gender: {item.gender}</p>
            <p className="product-quantity">Quantity: {item.quantity}</p>
            <p className="product-description">Description: {item.description}</p>
            <p className="product-price">Price: {Number(item.price).toLocaleString("en-US")}</p>
            <p className="product-plug">Plug: {item.plug}</p>
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
