import PropTypes from 'prop-types';
import React from 'react';
import Task from './task';

const TaskList = (props) => {
    const {todos, onDeleted, onToggleCompleted, onToggleEdited} = props;

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

    

    return (
        <section className="main">
            <ul className="todo-list">
                {elements}
            </ul>
        </section>
    );
};

TaskList.defaultProps = {
    key: Math.round(Math.random() * 1000),  
    onDeleted: () => {console.log('Deleted');},
    onToggleCompleted: () => {console.log('Completed');},
    onToggleEdited: () => {console.log('Edited');}
}

TaskList.propType = {
    key: PropTypes.number,  
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onToggleEdited: PropTypes.func
}
export default TaskList;