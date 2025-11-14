import { useState  /*eikhane aro hook likha jave*/ } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCount ] = useState(3) //react hook useState
  //hook ke array variable e rakhate hoy
  //let count = 5

  const addValue = () => {
    console.log("clicked",count);
    //count = count + 1
    setCount(count + 1)

    //jodi limite diye deya hoy tokhon ai condition e kaj korte hove
   /* if (count == 20)
      setCount(count)
    else
      setCount(count + 1)*/


  }

  const removeValue = () => {
    console.log("clicked",count);
   // count = count - 1
   // setCount(count)

    //jodi limite diye deya hoy tokhon ai condition e kaj korte hove
   /* if (count == 0)
      setCount(count)
    else
      setCount(count - 1)*/
    
  }
  return (
    <>
    <h3> learning react with chai or code</h3>
    <h5>Counter value : {count} </h5>

    <button onClick={addValue}>Add value </button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
