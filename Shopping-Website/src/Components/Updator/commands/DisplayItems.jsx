import React, { useState, useEffect } from 'react';
import './Yall.css';
import '../Updator.css';

const DisplayItems = () => {  


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
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [products, setProducts] = useState([]);

  const isActive = (panel) => button === panel ? 'active' : '';











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







  // ---- Products display -------------------------------------------------------------------

  const Renderer = (
    <>
      {[...products]
        //.sort((a, b) => a.name.localeCompare(b.name)) Names A - Z
        //.sort((a, b) => a.price - b.price) // Price A - Z
        .sort((a, b) => a.quantity - b.quantity) // Quantity A - Z
        .map((item, index) => (
          <div key={index} className="product-card">
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
        <h2>Product Dashboard</h2>
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

    </div>
  );
};

export default DisplayItems;
