
import React ,{ useRef,}from 'react'
const App = () => {
  const c = useRef(0)
  const ok = () => {
    c.current.style.width = "300px"
    c.current.style.height = "30px"
    c.current.focus();
  }
  return (
    <div>    
  <input type="text" ref={c} /> <br />
  <button onClick={ok} >Click</button>
    </div>
  )
}
export default App
