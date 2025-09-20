import { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import './App.css'

function App() {
  const[cards, setCards] =  useState([]);
  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <Navbar />
    <div className="container">
      {cards.map((cards)=>{
        return <div key={cards.id} className="card">
          <h1>{cards.title}</h1>
          <p>{cards.body}</p>
          <span>By user id :{ cards.userId}</span>
        </div>
      })}
      
    </div>
    </>
  )
}

export default App
