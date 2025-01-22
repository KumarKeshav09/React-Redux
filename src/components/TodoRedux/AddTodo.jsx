import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoSlice';

function AddTodo() {
    const [input, setInput] = useState();
    const dispatch = useDispatch()

    const addDispatch = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>
      <form onSubmit={addDispatch}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddTodo