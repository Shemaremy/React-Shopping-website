import React, { useState, useEffect, useRef } from "react";
import './Yall.css';
import '../Updator.css';

function AddItems() {

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
  const [newItem, setNewItem] = useState({ name: '', category: '', price: '', quantity: '', size: '', image: null });

  // Reference for the file input field
  const fileInputRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleImageChange = (e) => {
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
  
  

  const addItemToList = () => {
    const { name, category, price, quantity, size, image } = newItem;
  
    if (!name || !category || !price || !quantity || !size || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }
  
    setItems([...items, newItem]);
    setNewItem({ name: '', category: '', price: '', quantity: '', size: '', image: null });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };





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
  
    const convertImageToBase64 = (image) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(image);
      });
    };
  
    try {
      // Convert each item's image to base64
      const updatedItems = await Promise.all(items.map(async (item) => {
        const base64Image = await convertImageToBase64(item.image);
        return { ...item, image: base64Image };
      }));
  
      const response = await fetch('https://verve-users.glitch.me/api/adminadd', {
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
      console.error("Error adding items to the store:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  









  return (
    <div className="add-items-container">
      <h1>Add New Items</h1>
      <div className="form-group">
        <label>Item Name:</label>
        <input type="text" name="name" value={newItem.name} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <select name="category" value={newItem.category} onChange={handleChange} className="category-input">
          <option value=""></option>
          <option value="Shoes">Shoes</option>
          <option value="Pants">Pants</option>
          <option value="T shirts">T-shirts</option>
          <option value="Hoodies">Hoodies</option>
          <option value="Jackets">Jackets</option>
          <option value="Caps">Caps</option>
        </select>
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input type="number" name="price" value={newItem.price} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <input type="number" name="quantity" value={newItem.quantity} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Size:</label>
        <input type="text" name="size" value={newItem.size} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} ref={fileInputRef} />
      </div>
      <button onClick={addItemToList}>Add to List &nbsp; <i className="fa-solid fa-plus"></i></button>

      <div className="items-list">
        {items.map((item, index) => (
          <div key={index} className="item">
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Size: {item.size}</p>
            {item.image && <img src={URL.createObjectURL(item.image)} alt="preview" />}
            <button onClick={() => removeItem(index)}><i className="fa-solid fa-trash-can"></i></button>
          </div>
        ))}
      </div>
      <button className="confirm-button" onClick={handleAddToStore} disabled={isButtonDisabled}>
        {loading ? <i className="fa-solid fa-spinner fa-spin"></i> 
        : <>Add All to Store &nbsp; <i className="fa-solid fa-check"></i></>}
      </button>
    </div>
  );
}

export default AddItems;
