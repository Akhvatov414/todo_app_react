import React from 'react';
import Task from './task';

const TaskList = ({todos, filter, done, onDeleted, onToggleCompleted, onToggleEdited}) => {
    

    const elements = todos.map((item) => {
        const {id, stateTask, filter, ...itemProps} = item;
        //console.log(item);
        return(            
            <Task {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleCompleted={() => onToggleCompleted(id)}
                onToggleEdited={() => onToggleEdited(id)}
                key={id}
            />
        )
    })

    let filteredElements;
    if(filter === 'completed'){
       filteredElements = elements.filter((el) => el.props.done)
    }

    if(filter === 'active'){
        filteredElements = elements.filter((el) => !el.props.done)
     }

     if(filter === 'all'){
        filteredElements = elements
     }

    return (
        <section className="main">
            <ul className="todo-list">
                {filteredElements}
            </ul>
        </section>
    );
};

export default TaskList;