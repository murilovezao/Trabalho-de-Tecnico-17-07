import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>APP's úteis</h1>
      </header>
      <div className="App-content">
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onRemoveTask={removeTask} />
      </div>
    </div>
  );
}

export default App;
