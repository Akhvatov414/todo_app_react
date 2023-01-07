import React, { Component } from 'react';
import NewTaskForm from './newTaskForm';
import TaskList from './taskList';
import Footer from './footer';




export default class App extends Component {

    state = {
        tasks: [
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
    }

    deleteTask = (id) => {
        this.setState(({tasks}) => {
            const removeArr = [...tasks].filter((el) => el.id !== id)

            return {
                tasks: removeArr,
            }
        })
    }

    addTask = (task) => {
        const newTask = {
            id: Math.round(Math.random() * 1000),
            description: task,
            created: 'created 0 minutes ago',
        }

        this.setState(({tasks}) => {
            const newTasks = [...tasks, newTask];
            
            return {
                tasks: newTasks,
            }
        })
    }

  render() {
    return (
        <div>
            <NewTaskForm 
                onAdd={this.addTask}
            />
            <TaskList todos={this.state.tasks}
                    onDeleted={this.deleteTask}
            />
            <Footer taskLeft={1}/>
        </div>
    );
  }
}