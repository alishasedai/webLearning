import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../App'
import Component2 from './Component2'
const Component1 = () => {
  const message = useContext(LoginContext)
  return (
   <>
    <div>
      I am the component 1 {message}
    </div>
    <Component2 />
    </>
  )
}

export default Component1
