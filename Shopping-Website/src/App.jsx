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


  const [shoeData, setShoeData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pageState = {
    LOADING: 'loading',
    NOLOADING: 'noloading',
    ERROR: 'error'
  }

  const [loadingStatus, setLoadingStatus] = useState(pageState.LOADING);


  // Preloader page for fetching data
  const preloaderPage = (
    <div className='loader-panel'>
      <p>Please be patient, while we're fetching from the database! 🛸</p>
      <div className='loader-spinner'></div>
    </div>
  );

  // Error page for code 500
  const errorPage = (
    <div className='loader-panel'>
      <p>Internal Server error (500), Please try again later!</p>
      <i className="wire-icon fa-solid fa-plug"></i>
    </div>
  );



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




  // Tracking route the page is on to adjust height
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



  // Fetching all data from the database -----------------------
  useEffect(() => {
    const fetchShoeData = async () => {
        try {
            const response = await fetch('https://verve-backend-xswh.onrender.com/api/admindisplay');
            const data = await response.json();
            if (response.ok) {
              //setIsLoading(false)
              setLoadingStatus(pageState.NOLOADING)
              setAllData(data)
            } else {
              alert('Failed to fetch shoes from the store.');
            }
            }
        catch (error) {
          //setIsLoading(false)
          setLoadingStatus(pageState.ERROR)
          console.error('Error fetching products:', error);
        }
    }; 
    fetchShoeData();
  }, []);


  

  return (
    <Routes>
      <Route path="/" element={
        <>
          {
            loadingStatus === pageState.LOADING ? (
              preloaderPage
            ) : loadingStatus === pageState.ERROR ? (
              errorPage
            ) : (
              <>
                <A shoeData={allData} />
                <B allData={allData} />
                <C />
                <Mobilepanel />
                <CookieFunction />
              </>
            )
          }
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