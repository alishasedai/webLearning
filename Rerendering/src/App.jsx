
import React ,{useState, useEffect}from 'react'
import { use } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [otherCount, setOtherCount] = useState(5)
  // useEffect(() => {
  //   // document.title = `${count} new message`

  // },[])
  useEffect(() => {
    document.title = `${otherCount} new message`
  }, [otherCount])

  function update(){
    setCount(count+1)
  }
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} id="" />
      <h2>{name} has clicked: {count} times!</h2>
      <button onClick={update }>click</button>
      <h3>Other count : {otherCount}</h3>
      <button onClick={() => setOtherCount(otherCount+5)}>Increase By 5</button>
    </div>
  )
}

export default App
