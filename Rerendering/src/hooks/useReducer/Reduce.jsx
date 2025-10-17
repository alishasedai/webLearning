import React, { act, use, useReducer } from 'react'

const Reduce = () => {
    const reducer = (state, action) => {
        console.log(state, action)
        if(action.type ==="INCREMENT"){
            return state+1;
        }
         if(action.type ==="DECREMENT"){
            return state-1
        }

    }
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
        <h3>{state}</h3>
        <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button> <br /> <br />
        <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default Reduce
