import React, { useState } from 'react';
import { useTodo } from '../context/todo';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    console.log('Adding Todo:', todo);
    addTodo({ todo, complete: false });
    setTodo('');
  };

  return (
    <div>
      <form onSubmit={add}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
