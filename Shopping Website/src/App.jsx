import React, { useEffect } from 'react'
import A from './Components/Header'
import B from './Components/Main'
import C from './Components/Footer'
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import MyModal from './Components/cartPanel/MyModal';
import ProceedPayment from './Components/Payment/ProceedPayment';

import { Provider } from 'react-redux';
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
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/payment') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<><A /><B /><C /></>}></Route>
      <Route path="/payment" element={<ProceedPayment />}></Route>
    </Routes>
  );
}












export default App;