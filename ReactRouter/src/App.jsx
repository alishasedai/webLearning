import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },
     {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      )
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      )
    }
  ]) 

  return <RouterProvider router={router}/>  
}

export default App
