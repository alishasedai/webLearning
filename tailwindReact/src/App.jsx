import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  
  const handleEdit = ()=>{

  }
   const handleDelete = ()=>{

  }

   const handleAdd = ()=>{
    setTodo 

  }
  return (
    <>
     <Navbar />
     <div className="container mx-auto my-5 rounded-xl bg-violet-200 p-5 min-h-[80vh]">
      <div className="addTodo">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input type="text" className='bg-white rounded-xl p-2 w-160' />
        <button onClick={handleAdd} className='bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-6'>Add</button>
      </div>
        <h1 className='text-2xl font-b'>Your Todos</h1>
     <div className="todos">
      <div className="todo flex">
        <div className="text">{todo}</div>
        <div className="buttons">
          <button onClick={handleEdit} className='bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-2'>Edit</button>
          <button onClick={handleDelete} className='bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-2'>Delete</button>
        </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
