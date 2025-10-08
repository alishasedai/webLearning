import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [count, setCount] = useState(2)
  useEffect(() => {
    alert("Component Mounted")
  }, [])
   useEffect(() => {
    alert("count Updated ")
  }, [count])

  return (
    <>
    <div>The count is {count}</div>
    <button onClick = {() => {
      setCount(count **2)
    }}> Update Count</button>
    </>
  )
}

export default App
