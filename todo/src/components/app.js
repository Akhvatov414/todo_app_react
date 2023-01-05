import React from 'react';
import NewTaskForm from './newTaskForm';
import TaskList from './taskList';

const App = () => {

    const tasks = [
        {   
            id: Math.round(Math.random() * 1000),
            description: 'Completed task',
            created: 'created 17 seconds ago',
            stateTask: 'completed',
        },
        {
            id: Math.round(Math.random() * 1000),
            description: 'Editing task',
            created: 'created 5 minutes ago',
            stateTask: 'editing',
        },
        {
            id: Math.round(Math.random() * 1000),
            description: 'Active task',
            created: 'created 5 minutes ago',
        }
    ]

    return (
        <div>
            <NewTaskForm/>
            <TaskList todos={tasks}/>
        </div>
    );
};

export default App;