import React, { useEffect, useState } from 'react'
import { TodoProvider } from '../context/todo'
import TodoForm from './TodoForm'
import TodoDisplay from './TodoDisplay'

function Todo() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updateTodo = (id, updatedFields) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, ...updatedFields } : prevTodo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
    };

    const completeTodo = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, complete: !prevTodo.complete } : prevTodo
            )
        );
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, completeTodo }}>
            <TodoForm />
            {todos.map((todo) => (
                <div key={todo.id}>
                    <TodoDisplay todo={todo} />
                </div>
            ))}
        </TodoProvider>
    );
}


export default Todo