import React from 'react';
import ReactDOM from 'react-dom/client';
import NewTaskForm from './components/newTaskForm';
import TaskList from './components/taskList';


const root = ReactDOM.createRoot(document.getElementById('todoapp'));
root.render(
  <React.StrictMode>
    <NewTaskForm/>
    <TaskList/>
  </React.StrictMode>
);