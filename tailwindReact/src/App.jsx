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
        <input type="text" className='bg-white rounded-2xl p-2' />
        <button className='bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-6'>Add</button>
      </div>
        <h1 className='text-2xl font-b'>Your Todos</h1>
     <div className="todos">
      <div className="todo flex">
        <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</div>
        <div className="buttons">
          <button className='bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-2'>Edit</button>
          <button className='bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-2'>Delete</button>
        </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
