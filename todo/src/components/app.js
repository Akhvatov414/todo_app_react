import React from 'react';
import NewTaskForm from './newTaskForm';
import TaskList from './taskList';

const App = () => {

    return (
        <div>
            <NewTaskForm/>
            <TaskList/>
        </div>
    );
};

export default App;