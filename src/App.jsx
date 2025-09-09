import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter , setCounter] =   useState(15) 
      const addValue = () => {
        console.log("Counter value is : ", counter)
        setCounter(counter + 1)
        console.log("Counter value after increment is : ", counter)
      }
      const removeValue = () => {
        console.log("Counter value is : ", counter)
        setCounter(counter - 1)
        console.log("Counter value after decrement is : ", counter)
      }
  return (
    <>
      <h1>Hi, Hari om </h1>
      <div className="main">

      <h2>Counter  value : {counter}</h2>
      <button
        onClick={addValue}
        > Add Value by ! </button>
      <br />
      <br />
      <button
       onClick={removeValue}
       > Remove  Value </button>
       </div>
    </>
  )
}

export default App
