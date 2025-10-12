import { useState , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import { Routes, Route , Link} from 'react-router'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import Login from './component/Login'


function App() {
  const [count, setCount] = useState(2)
  // useEffect(() => {
  //   alert("Component Mounted")
  //   return () =>{
  //     alert("Component Unmounted")
  //   }
  // })
  //  useEffect(() => {
  //   alert("count had Updated ")
  // }, [count])

  // useEffect(() => {
  //   alert("Component Rendered")
  // })
  // const prevCount = useRef( )
  return (
          <>
         
          <Navbar />
          <Routes>   
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/login' element={<Login />}/>
              </Routes>
          </>
    
  //   {/* <div>The count is {count}</div>
  //   <button onClick = {() => {
  //     setCount(count **2)
  //   }}> Update Count</button> */}
  
    
  )
}

export default App
