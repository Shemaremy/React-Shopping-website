import React, { useEffect, useState } from 'react'
import A from './Components/Header'
import B from './Components/Main'
import C from './Components/Footer'
import Mobilepanel from './Mobilepanel'


import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import ProceedPayment from './Components/Payment/ProceedPayment';
import Accounts from './Components/Accounts/Accounts';
import Admin from './Components/Accounts/Admin'
import Updator from './Components/Updator/Updator'

import ResetPasswordForm from './Components/Accounts/ResetPassword'

import CookieFunction from './Components/Cookies/Cookie'

import { Provider, useDispatch } from 'react-redux';
import { fetchCart } from './Components/Redux store/actions'

import store from './Components/Redux store/store'

function App() {

  return (

    <>
      <Provider store={store}>  
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </>
  )
}




// Created this function to help me change the height of the page on the new one. It must be below
function AppRoutes() {

  // On load of the page, fetch data from the database of an account
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();




  useEffect(() => {
      dispatch(fetchCart());
  }, [dispatch]);



  // Check localStorage for alert messages on load
  useEffect(() => {
    const message = localStorage.getItem('alertMessage');
    if (message === 'Token expired') {
      navigate('/accounts');
      localStorage.removeItem('alertMessage');
    }
  }, []);




  useEffect(() => {
    if (location.pathname === '/payment') {
      const bodyHeight = document.querySelector('body');
      bodyHeight.classList.add('payment-body')   
      document.body.style.overflowY = 'auto';
    } else {
      const bodyHeight = document.querySelector('body');
      bodyHeight.classList.remove('payment-body')
      document.body.style.overflowY = 'auto';
      document.body.style.height = ''
    }



    if (location.pathname === '/accounts' || location.pathname === '/admin' || location.pathname === '/updator'  || location.pathname === '/reset-password') {
      document.body.style.height = '100vh';  
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.height = ''
    }

  }, [location.pathname]);







  return (
    <Routes>
      <Route path="/" element={
        <>
          <A />
          <B />
          <C />
          <Mobilepanel />
          <CookieFunction />
        </>}>
      </Route>
      <Route path="/payment" element={<ProceedPayment />}></Route>
      <Route path="/accounts" element={<Accounts />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/updator" element={<Updator />}></Route>
      <Route path="/reset-password" element={<ResetPasswordForm />}></Route>
    </Routes>
  );
}












export default App;