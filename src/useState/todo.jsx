import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };
  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div style={styles.container}>
      <h2>Todo List</h2>
      <div >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo} >Add</button>
      </div>
      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} >
            {todo}
            <button onClick={() => removeTodo(index)} >X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Todo;
