import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setValue] = useState('');
  const [filter, setFilter] = useState('all');

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => {
        if (input.trim() !== '') {
          setTasks([...tasks, { text: input, completed: false }]);
          setValue('');
        }
      }}>Add Task</button>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
        {tasks.filter(task => {
          if (filter === 'active') return !task.completed;
          if (filter === 'completed') return task.completed;
          return true;
        }).map((task, index) => (
          <li
            key={index}
            onClick={() => {
              const updatedTasks = tasks.map((t, i) =>
                i === index ? { ...t, completed: !t.completed } : t
              );
              setTasks(updatedTasks);
            }}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            <span>{task.text}</span>
            <button onClick={(e) => {
              e.stopPropagation();
              setTasks(tasks.filter((_, i) => i !== index));
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;