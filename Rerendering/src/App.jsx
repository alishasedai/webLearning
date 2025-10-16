
import React ,{useState}from 'react'
import { use } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  function update(){
    setCount(count+1)
  }
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} id="" />
      <h2>{name} has clicked: {count} times!</h2>
      <button onClick={update }>click</button>
    </div>
  )
}

export default App
