import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import {CreateBrowserRouter, Link, RouterProvider} from 'react-router-dom'

function App() {
      const router = CreateBrowserRouter([
          {
            Path : "/",
            element : <Home />
          },
          {
             Path : "/login",
            element : <Login />
          }
      ]) 

  return (
    <>
      <Navbar />
      </>
  )
}

export default App
