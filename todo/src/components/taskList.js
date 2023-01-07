import React from 'react';
import Task from './task';

const TaskList = ({todos, onDeleted, onToggleCompleted, onToggleEdited}) => {
    

    const elements = todos.map((item) => {
        const {id, stateTask, ...itemProps} = item;

        return(            
            <Task {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleCompleted={() => onToggleCompleted(id)}
                onToggleEdited={() => onToggleEdited(id)}
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