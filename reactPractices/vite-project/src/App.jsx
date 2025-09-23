import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [visible, setVisible] = useState(false);




  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
{visible && <p>This is visible!</p>}
          </>
  )
}

export default App
