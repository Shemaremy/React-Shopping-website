import React, { useEffect, useState } from 'react'
import A from './Components/Header'
import B from './Components/Main'
import C from './Components/Footer'
import Mobilepanel from './Mobilepanel'


import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import ProceedPayment from './Components/Payment/ProceedPayment';
import Accounts from './Components/Accounts/Accounts';

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
    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);


  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/payment') {
      if (window.innerWidth <= 768) {
        document.body.style.height = 'auto';
      } else {
        document.body.style.height = '110vh';
      }      
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.height = ''
    }



    if (location.pathname === '/accounts' || location.pathname === '/reset-password') {
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
      <Route path="/reset-password" element={<ResetPasswordForm />}></Route>
    </Routes>
  );
}












export default App;