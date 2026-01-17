import { useState } from 'react';

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTask(task.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li className="task-item">
      <input 
        type="checkbox" 
        checked={task.isCompleted} 
        onChange={() => toggleTask(task.id)} 
      />

      {isEditing ? (
        <div className="edit-container">
          <input 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleSave}>שמור</button>
          <button onClick={() => setIsEditing(false)}>ביטול</button>
        </div>
      ) : (
        <div className="view-container">
          <span className={task.isCompleted ? 'completed' : ''}>
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>עריכה</button>
          <button onClick={() => deleteTask(task.id)}>מחיקה</button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;