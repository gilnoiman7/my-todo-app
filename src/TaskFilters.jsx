function TaskFilters({ currentFilter, setFilter }) {
  return (
    <div className="filters-container">
      <button 
        className={currentFilter === 'all' ? 'active' : ''} 
        onClick={() => setFilter('all')}
      >
        הכל
      </button>
      <button 
        className={currentFilter === 'active' ? 'active' : ''} 
        onClick={() => setFilter('active')}
      >
        פעילות
      </button>
      <button 
        className={currentFilter === 'completed' ? 'active' : ''} 
        onClick={() => setFilter('completed')}
      >
        הושלמו
      </button>
    </div>
  );
}

export default TaskFilters;