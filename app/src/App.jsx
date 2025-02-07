import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => {
              const confirmDelete = window.confirm('Are you sure you want to delete this todo?');
              if (confirmDelete) {
                const updatedTodos = todos.filter((_, i) => i !== index);
                setTodos(updatedTodos);
              }
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
