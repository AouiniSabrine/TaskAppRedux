import React from 'react';

import TasksList from './Components/TasksList';
import AddTasks from './Components/AddTasks';

import './App.css';

function App() {
  return (
    <div className='App'>
      <AddTasks />
      <TasksList />
    </div>
  );
}

export default App;
