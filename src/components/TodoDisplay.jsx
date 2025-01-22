import React, { useState } from 'react'
import { useTodo } from '../context/todo'

function TodoDisplay({ todo }) {
    const [isEditable, setIsEditable] = useState(false)
    const [todomsg, setTodoMsg] = useState(todo.todo)
    console.log("todo display ---->", todo)


    const { updateTodo, deleteTodo, completeTodo } = useTodo();

    const update = () => {
        updateTodo(todo.id, { ...todo, todo: todomsg })
        setIsEditable(false)
    }

    const toggleComplete = () => {
        completeTodo(todo.id)
    }
    return (
        <div>
            <input type='checkbox' value={todo.complete} onChange={toggleComplete} />
            <input type='text' value={todomsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isEditable} />
            <button onClick={() => {
                if (todo.complete) return
                if (isEditable) { update() } else { setIsEditable((prev) => !prev) }
            }

            }>{isEditable ? "yes" : "no"}</button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    )
}

export default TodoDisplay