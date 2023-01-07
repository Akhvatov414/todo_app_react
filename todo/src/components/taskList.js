import React from 'react';
import Task from './task';

const TaskList = ({todos, onDeleted}) => {
    

    const elements = todos.map((item) => {
        const {id, stateTask, ...itemProps} = item;

        return(            
            <Task {...itemProps}
                onDeleted={() => onDeleted(id)}
                key={id}
            />
        )
    })

    return (
        <section className="main">
            <ul className="todo-list">
                {elements}
            </ul>
        </section>
    );
};

export default TaskList;