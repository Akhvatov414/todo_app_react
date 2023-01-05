import React from 'react';
import Footer from './footer';
import Task from './task';

const TaskList = ({todos}) => {
    

    const elements = todos.map((item) => {
        const {id, stateTask, ...itemProps} = item;
/*
        if(item.stateTask === 'editing'){
            return (
                <li className={item.stateTask} key={item.id}>
                    <Task {...itemProps}/>
                    <input type="text" className="edit" defaultValue={item.description}/>
                </li>
            )
        }*/

        return(            
            <Task {...itemProps}/>
        )
    })

    return (
        <section className="main">
            <ul className="todo-list">
                {elements}
            </ul>
            <Footer/>
        </section>
    );
};

export default TaskList;