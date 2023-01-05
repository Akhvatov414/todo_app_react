import React from 'react';
import Footer from './footer';
import Task from './task';

const TaskList = () => {
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
        <section className="main">
            <Task todos = {tasks}/>
            <Footer/>
        </section>
    );
};

export default TaskList;