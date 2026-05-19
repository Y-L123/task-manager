import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setValue] = useState('');

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
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
  
