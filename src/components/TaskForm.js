import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName,
      };
      onAddTask(newTask);
      setTaskName('');
    }
  };

  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite um novo App..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Adicionar App</button>
    </form>
  );
}

export default TaskForm;
