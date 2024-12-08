import { useState } from 'react'// hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './Abc'
// import Abc from './Abc'


 export function nekok(){
  <h2>huuhu</h2>
 }

function App() {

   let [counter,setCounter] = useState(5)

  //let counter =15

  const addValue = () => {
    console.log("clicked",counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue =() => {
    counter = counter -1
    setCounter(counter)
  }
  return (
    <>
      
      <h2>chai aur react</h2>
      <h3> counter value : {counter}</h3>

      <button onClick ={addValue}
      > Add value</button>

      <br/>
      <button onClick = {removeValue}
      > Remove value</button>
      
     
    </>
  )
}

export default App
