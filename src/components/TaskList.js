import React from 'react';

function TaskList({ tasks, onRemoveTask }) {
  return (
    <div className="TaskList">
      <h2>Lista de APP's</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => onRemoveTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
