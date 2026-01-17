import { useState } from 'react';

function TaskInput({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="הוסף משימה..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">הוספה</button>
    </form>
  );
}

export default TaskInput;