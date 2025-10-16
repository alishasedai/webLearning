
import React ,{useState}from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function update(){
    setCount(count+1)
  }
  return (
    <div>
      <h2>click : {count}</h2>
      <button onClick={update }>click</button>
    </div>
  )
}

export default App
