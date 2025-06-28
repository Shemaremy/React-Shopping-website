import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Updator.css';
import AddItems from "./commands/AddItems";
import DisplayItems from "./commands/DisplayItems";
import RemoveItems from "./commands/RemoveItems";
import UpdateItems from "./commands/UpdateItems";


function Updator() {

  const BodyState = {
    HOME: 'home',
    ADD: 'add',
    REMOVE: 'remove',
    UPDATE: 'update',
    DISPLAY: 'display'
  };


  const navigate = useNavigate();
  const [ content, setContent ] = useState(false);
  const [ username, setUsername ] = useState('Admin');
  const [ bodystate, setBodystate ] = useState(BodyState.HOME)


  useEffect(() => {
    const checkValidity = () => {
      const adminToken = localStorage.getItem("adminToken");
      const adminName = localStorage.getItem("adminName");
      const expiry = localStorage.getItem("adminTokenExpiry");


      if (adminToken === null) {
        //alert("You are trying to access this page with no token. Login first!!");
        navigate("/admin");
      } else {

        if (new Date().getTime() > parseInt(expiry)) {
          // Token expired
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminTokenExpiry");
          //console.log("Token expired and removed.");
        } else {
          setContent(true);
          setUsername(adminName);
        }
      }
    };
    checkValidity();
  }, [navigate]);


  const handleLogout = async () => {
    //const token = localStorage.getItem('token');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    navigate('/admin');
  };
  



  const homePage = (
    <div className="admin-main">
      <div className="admin-header">
        <h1>Welcome, {username}!</h1>
        <p>Select an action from the sidebar to manage items in the store.</p>
      </div>

      <div className="action-cards">
        <div className="upd-card add-card" onClick={() => setBodystate(BodyState.ADD)}>
          <h3>Add Items</h3>
          <p>Add new items to the store database.</p>
        </div>

        <div className="upd-card remove-card" onClick={() => setBodystate(BodyState.REMOVE)}>
          <h3>Remove Items</h3>
          <p>Delete items that are no longer available.</p>
        </div>

        <div className="upd-card update-card" onClick={() => setBodystate(BodyState.UPDATE)}>
          <h3>Update Items</h3>
          <p>Update existing items with new details.</p>
        </div>

        <div className="upd-card view-card" onClick={() => setBodystate(BodyState.DISPLAY)}>
          <h3>View Items</h3>
          <p>Browse all items in the store database.</p>
        </div>

      </div>
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );

  const addItems = (<AddItems/>);

  const removeItems = (<RemoveItems/>);

  const updateItems = (<UpdateItems/>);

  const displayItems = (<DisplayItems/>);



  const bodyContent = (
    <div className="admin-container">
      {bodystate === 'home' && homePage}
      {bodystate === 'add' && addItems}
      {bodystate === 'remove' && removeItems}
      {bodystate === 'update' && updateItems}
      {bodystate === 'display' && displayItems}
    </div>
  );

  return <>{content && bodyContent}</>;
}

export default Updator;
