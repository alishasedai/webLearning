import { useState } from 'react'
import Navbar from './component/Navbar'
import { createContext } from 'react'
 export const LoginContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginContext.Provider value={"I am logged in"} >
       <Navbar />
    </LoginContext.Provider>
    </>
  )
}

export default App
