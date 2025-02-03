import React, { useReducer } from 'react'

function RedCounter() {
    const reducer = (state, action) =>{
            if(action.type === "increment") {
                return state += 1
            }
            if(action.type === "decrement") {
                return state -= 1
            }
    }
    const [state, dispatch] = useReducer(reducer, 0)
    
  return (
    <>
    <div>RedCounter</div>
    <h1>{state}</h1>
    <button onClick={() => dispatch({type: "increment"})}>+</button>
    <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </>
  )
}

export default RedCounter