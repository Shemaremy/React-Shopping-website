import React, { useEffect } from 'react'
import A from './Components/Header'
import B from './Components/Main'
import C from './Components/Footer'

import {handleLinkClickMobile} from './Components/Header'

import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import ProceedPayment from './Components/Payment/ProceedPayment';
import Accounts from './Components/Accounts/Accounts';

import { useNavigate } from 'react-router-dom';
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




  const navigate = useNavigate();
  const handleGotoAccounts = () => {
      navigate('/accounts');
  };








  return (
    <Routes>
      <Route path="/" element={
        <>
          <A />
          <B />
          <C />
          <div className="big-nav-panel-mobile">
            <div className='main-nav-panel'>
              <div className='list-container'>
                <div className='main_lists'>
                  <div className='sect-1'>
                    <div className='user-profile-container'>
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <div className='sign-in-container'>
                      <h3 className='create-account-header' onClick={handleGotoAccounts}>Create account</h3>
                      <h3 className='sign-in-header'>Sign in</h3>
                    </div>
                  </div>
                  <div className='sect-2'>
                    <h4 onClick={(e) => handleLinkClickMobile('B', e)}>Our products <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                  <div className='sect-3'>
                    <h4 onClick={(e) => handleLinkClickMobile('Our_picks_container', e)}>Our picks <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                  <div className='sect-4'>
                    <h4 onClick={(e) => handleLinkClickMobile('Upper-part-trend', e)}>Trending items <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                  <div className='sect-5'>
                    <h4 onClick={(e) => handleLinkClickMobile('C', e)}>About us <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                  <div className='sect-6'>
                    <h4 onClick={(e) => handleLinkClickMobile('C', e)}>Contact us <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CookieFunction/>
        </>}>
      </Route>
      <Route path="/payment" element={<ProceedPayment />}></Route>
      <Route path="/accounts" element={<Accounts />}></Route>
      <Route path="/reset-password" element={<ResetPasswordForm />}></Route>
    </Routes>
  );
}












export default App;