import React, { useState, useEffect } from "react";
import './Yall.css';
import '../Updator.css';

function AddItems() {

  const [showIframe, setShowIframe] = useState(true);
  const [iframeSrc, setIframeSrc] = useState("https://remydp.netlify.app/verve");



  // Warn the user on refreshing the page
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


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
 

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




  
  
  // Handle change for normal products values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  
  
  
  

  // Adding item to list
  const addItemToList = () => {

    // List of all required fields
    const requiredFields = [
      ...fields.map(f => f.name),
      ...dropdowns.map(d => d.name),
    ];


    // Assigning a constant to a condition that helps check empty values
    const isValid = requiredFields.every(key => {
      const value = newItem[key];
      if (Array.isArray(value)) {
        return value.every(sub => sub.trim() !== '');
      }
      return value && value.toString().trim() !== '';
    });
  
  
    // If the above condition is not true
    if (!isValid) {
      alert("Please fill in all fields with valid inputs and upload all images.");
      return;
    }
  
    // Update the item with the formatted size before adding it to the list
    const updatedItem = { ...newItem };
    setItems([...items, updatedItem]);

    //console.log(items)
  
    // Reset form fields
    setNewItem(initialFormState);

    setIframeSrc("");  // Temporarily remove the src
    setTimeout(() => setIframeSrc("https://remydp.netlify.app/verve"), 50);
    
  };
  
  
  

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
























  // -------------- ADD TO DATABASE STORE -----------------------------------------
  // -------------- ADD TO DATABASE STORE -----------------------------------------
  // -------------- ADD TO DATABASE STORE -----------------------------------------

  const handleAddToStore = async () => {
    const disableButton = document.querySelector('.confirm-button');
    
    if (items.length === 0) {
      alert("No items to add to the store.");
      return;
    }

    disableButton.classList.add('disable');
    setIsButtonDisabled(true);
    setLoading(true);
  


    
  
    try {
      const updatedItems = await Promise.all(items.map(async (item) => {
        return { ...item };
      }));
  
      const response = await fetch('https://verve-backend-xswh.onrender.com/api/adminadd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: updatedItems }),
      });
  
      if (response.ok) {
        setLoading(false);
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false);
        alert("Items added to the store successfully!");
        setItems([]);
      } else {
        setLoading(false);
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false);
        alert("Failed to add items to the store.");
      }
    } catch (error) {
      setLoading(false);
      disableButton.classList.remove('disable');
      setIsButtonDisabled(false);
      console.error("Error adding items to the store:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  









  return (
    <div className="add-items-container">
      <h1>Add New Products</h1>
      <a href="">Back</a>

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

      {/* Image section */}
      <div className="form-group image-group">
        {showIframe && (
          <div style={{ marginTop: "10px" }}>
            <iframe className="img-url-iframe"
              src={iframeSrc}
              style={{ border: "none" }}
            />
          </div>
        )}
        <input type="text" name="image" onChange={handleChange} value={newItem.image} placeholder='Place here url fetched' />
      </div>


      {/* Mapping dropdown select fields */}
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

      <button className="add-to-list" onClick={addItemToList}>Add to List &nbsp; <i className="fa-solid fa-plus"></i></button>

      <div className="items-list">
        {items.map((item, index) => (
          <div key={index} className="item">
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Size: {item.size}</p>
            {item.image && <img src={item.image} alt={item.name} className="preview-image" />}
            <button className="delete-button" onClick={() => removeItem(index)}><i className="fa-solid fa-trash-can"></i></button>
          </div>
        ))}
      </div>
      <button className="confirm-button" onClick={handleAddToStore} disabled={isButtonDisabled}>
        {loading ? <>Wait a minute &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
        : <>Add All to Store &nbsp; <i className="fa-solid fa-check"></i></>}
      </button>
    </div>
  );
}

export default AddItems;
