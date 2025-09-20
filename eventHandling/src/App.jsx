import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = ()=>{
    alert("I am click")
  }
  const handleMouseOver = ()=>{
    alert("I am mouse over hehe")
  }

  return (
    <>
      <div className="button">
      <button onClick={handleClick}>Click Me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        i am Red div
      </div>
    </>
  )
}

export default App
