import React, { Component } from 'react'

export default class Task extends Component {



  render() {
    const todos = this.props;

    const renderTasks = todos.todos.map((item) => {
        if(item.stateTask === 'editing'){
            return (
                <li className={item.stateTask} key={item.id}>
                    <div className="view">
                        <input className="toggle" type="checkbox"/>
                        <label>
                            <span className="description">{item.description}</span>
                            <span className="created">{item.created}</span>
                        </label>
                        <button className="icon icon-edit"></button>
                        <button className="icon icon-destroy"></button>
                    </div>
                    <input type="text" className="edit" defaultValue={item.description}/>
                </li>
            )
        }

        return (
            <li className={item.stateTask} key={item.id}>
                <div className="view">
                <input className="toggle" type="checkbox" onClick={() => {console.log(`${item.description}`)}}/>
                <label>
                    <span className="description">{item.description}</span>
                    <span className="created">{item.created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
                </div>
            </li>
        )
    })



    return (

        <ul className="todo-list">
            {renderTasks}
        </ul>
    );
  }
}




// import React from 'react';

// const Task = ({todos}) => {

    
    // const renderTasks = todos.map((item) => {
    //     if(item.stateTask === 'editing'){
    //         return (
    //             <li className={item.stateTask} key={item.id}>
    //             <div className="view">
    //             <input className="toggle" type="checkbox"/>
    //             <label>
    //                 <span className="description">{item.description}</span>
    //                 <span className="created">{item.created}</span>
    //             </label>
    //             <button className="icon icon-edit"></button>
    //             <button className="icon icon-destroy"></button>
    //             </div>
    //             <input type="text" className="edit" defaultValue={item.description}/>
    //         </li>
    //         )
    //     }

    //     return (
    //         <li className={item.stateTask} key={item.id}>
    //             <div className="view">
    //             <input className="toggle" type="checkbox"/>
    //             <label>
    //                 <span className="description">{item.description}</span>
    //                 <span className="created">{item.created}</span>
    //             </label>
    //             <button className="icon icon-edit"></button>
    //             <button className="icon icon-destroy"></button>
    //             </div>
    //         </li>
    //     )
    // })



    // return (

    //     <ul className="todo-list">
    //         {renderTasks}
    //     </ul>
    // );
// };

// export default Task;