import React from 'react'
import A from './Components/Header'
import B from './Components/Main'
import C from './Components/Footer'
import { Provider } from 'react-redux';
import store from './Components/Redux store/store'

function App() {

  return (

    <>
      <Provider store={store}>
          <A />
          <B />
      </Provider>
      <C></C>
    </>
  )
}

export default App
