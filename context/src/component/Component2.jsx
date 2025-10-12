import React from 'react'
import {useContext} from 'react'
import { LoginContext } from '../App'

const Component2 = () => {
    const m = useContext(LoginContext)
  return (
    <div>
      I am component 2 {m}
    </div>
  )
}

export default Component2
