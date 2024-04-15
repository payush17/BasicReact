import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0);
    
  const addValue = () => {

    let incValue = counter+1;
   
    setCounter(incValue);
  }
  const subValue = () => {
    let decValue = counter  - 1;
    setCounter(decValue);
  }

  return (
    <>
     <h1>Counter App</h1>
     <h2> Counter Value : {counter}</h2>
     <button  style={{ marginRight: '10px' }} onClick={addValue} disabled={counter >= 20}>Add Value</button>
     <button id = 'dec' onClick={subValue} disabled={counter <= 0}>Substract Value </button>
    </>
  )
}

export default App
