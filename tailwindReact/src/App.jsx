import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import './App.css'

function App() {

  return (
    <>
     <Navbar />
     <div className="container mx-auto my-5 rounded-xl bg-violet-200 p-5 min-h-[80vh]">
      <div className="addTodo">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input type="text" className='bg-white rounded-2xl p-3' />
        <button className='bg-violet-500 hover:bg-violet-950 p-6 ml-4 py-1 text-white rounded-xl'>Add</button>
      </div>
        <h1 className='text-2xl font-b'>Your Todos</h1>
     <div className="todos">
      <div className="todo flex">
        <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</div>
        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
