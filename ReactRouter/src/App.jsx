import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {CreateBrowserRouter, Link, RouterProvider} from 'react-router-dom'

function App() {
      const router = CreateBrowserRouter([
          {},
          {}
      ]) 

  return (
    <>
      <Navbar />
      </>
  )
}

export default App
