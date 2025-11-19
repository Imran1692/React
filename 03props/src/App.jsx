import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className='bg-amber-300 text-black p-2 rounded-2xl'>Tailwind css test</h3>

      <Cards />
      <Cards />
    </>
  )
}

export default App
