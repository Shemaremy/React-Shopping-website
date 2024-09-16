import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Updator.css';

function Updator() {
  const navigate = useNavigate();
  const [content, setContent] = useState(false);
  const [ username, setUsername ] = useState('Admin');


  useEffect(() => {
    const checkValidity = () => {
      const token = localStorage.getItem("token");
      const storedUsername = localStorage.getItem("username");
      if (token === null) {
        alert("You are trying to access this page with no token. Login first!!");
        navigate("/");
      } else {
        setContent(true);
        setUsername(storedUsername);
      }
    };
    checkValidity();
  }, [navigate]);

  const bodyContent = (
    <div className="admin-container">
      {/* <div className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><button className="sidebar-btn">Add Item</button></li>
          <li><button className="sidebar-btn">Remove Item</button></li>
          <li><button className="sidebar-btn">Update Item</button></li>
          <li><button className="sidebar-btn">View All Items</button></li>
        </ul>
      </div> */}

      <div className="admin-main">
        <div className="admin-header">
          <h1>Welcome, {username}!</h1>
          <p>Select an action from the sidebar to manage items in the store.</p>
        </div>

        <div className="action-cards">
          <div className="card add-card">
            <h3>Add Items</h3>
            <p>Add new items to the store database.</p>
          </div>

          <div className="card remove-card">
            <h3>Remove Items</h3>
            <p>Delete items that are no longer available.</p>
          </div>

          <div className="card update-card">
            <h3>Update Items</h3>
            <p>Update existing items with new details.</p>
          </div>

          <div className="card view-card">
            <h3>View Items</h3>
            <p>Browse all items in the store database.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{content && bodyContent}</>;
}

export default Updator;
