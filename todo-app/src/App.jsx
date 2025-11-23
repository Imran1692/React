import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './component/AppName'
import AddTodo from './component/AddTodo'
import TodoItem from './component/TodoItem'
import TodoItem1 from './component/TodoItem1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center className=' '>
         <AppName />
         <AddTodo />
         <TodoItem />
         <TodoItem1 />
      </center>

    </>
  )
}

export default App
