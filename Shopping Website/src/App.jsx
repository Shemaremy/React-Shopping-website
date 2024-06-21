import react from 'react'
import A from './Components/Header'
import B from './Components/Main'
import C from './Components/Footer'
import { CounterProvider } from './Components/counterbutton/CounterContext'

function App() {

  return (

    <>
    <CounterProvider>
        <A />
        <B />
    </CounterProvider>
    <C></C>
    </>
  )
}

export default App
