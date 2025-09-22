import { useEffect, useState } from 'react'

import Navbar from './Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() =>{
    let todoString = localStorage.getItem("todos")
      if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)}
  }, [])

  const SaveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify("todos")) 
  }
  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  
  
  const handleEdit = (e,id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item =>{
      return item.id!==id
    })
    setTodos(newTodos)
  }
   const handleDelete = (e,id)=>{
    
    let newTodos = todos.filter(item =>{
      return item.id!==id
    })
    setTodos(newTodos)
  }

   const handleAdd = ()=>{
    setTodos([...todos, {id:uuidv4() ,todo, isCompleted : false}])
    setTodo("")
    console.log(todos)
}  


const handleChange = (e) =>{
  setTodo(e.target.value)
  }

        
  const handleCheckBox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item =>{
      return item.id === id;

    })
    let newTodos = [...todos] ;
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }
  return (
    <>
     <Navbar />
     <div className="container mx-auto my-5 rounded-xl bg-violet-200 p-5 min-h-[80vh]">
      <div className="addTodo">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='bg-white rounded-xl p-2 w-160' />
        <button onClick={handleAdd} disabled={todo.length<=2} className='bg-violet-700 disabled:bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-6'>Save</button>
      </div>
      <input type="checkbox" onChange={toggleFinished} checked={showFinished} /> Show Finished
        <h1 className='text-2xl font-b'>Your Todos</h1>
     <div className="todos">
      {todos.length === 0 && <div className='m-3 text-2xl'>No Todos to display</div>}
      {todos.map(item=>{

      return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-2 justify-between w-1/2">
        <div className='flex gap-4'>
          <input name={item.id} onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} />
        <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
        </div>
        <div className="buttons flex h-full">
          <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-2'>Edit</button>
          <button onClick={(e)=>{handleDelete(e,item.id)} } className='bg-violet-700 hover:bg-violet-800 p-3 font-bold py-1 text-white rounded-xl mx-2'>Delete</button>
        </div>
      </div>
  })}
     </div>
     </div>
    </>
  )
 }

export default App
