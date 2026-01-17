import { useState, useEffect } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import TaskFilters from './TaskFilters'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { 
      id: crypto.randomUUID(), 
      text: text, 
      isCompleted: false 
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.isCompleted));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true;
  });

  return (
    <div className="app-container">
      <h1>מנהל משימות</h1>
      
      <TaskInput addTask={addTask} />

      <TaskFilters currentFilter={filter} setFilter={setFilter} />

      <TaskList 
        tasks={filteredTasks} 
        toggleTask={toggleTask} 
        deleteTask={deleteTask} 
        editTask={editTask} 
      />

      <div className="footer">
        <p>משימות לביצוע: {tasks.filter(t => !t.isCompleted).length}</p>
        <button onClick={clearCompleted}>ניקוי משימות שהושלמו</button>
      </div>
    </div>
  )
}

export default App