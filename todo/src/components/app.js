import React, { Component } from 'react';
import NewTaskForm from './newTaskForm';
import TaskList from './taskList';
import Footer from './footer';




export default class App extends Component {
    state = {
        tasks: [
            this.createTask('Completed task'),
            this.createTask('Editing task'),
            this.createTask('Active task'),
        ]
    }

    createTask(description) {
        return {
            id: Math.round(Math.random() * 1000),
            description,
            created: 'created 17 seconds ago',
            done: false,
            edit: false,
        }
    }

    deleteTask = (id) => {
        this.setState(({tasks}) => {
            const removeArr = [...tasks].filter((el) => el.id !== id)

            return {
                tasks: removeArr,
            }
        })
    }

    clearCompleted = () => {
        // this.setState(({tasks}) => {
        //     let activeTasks = tasks.filter((el) => !el.done);
        //     console.log(activeTasks);
        //     return activeTasks;
        // }) 
        this.setState(({tasks}) => {
            const removeArr = [...tasks].filter((el) => !el.done)

            return {
                tasks: removeArr,
            }
        })
    }

    addTask = (task) => {
        const newTask = this.createTask(task);

        this.setState(({tasks}) => {
            const newTasks = [...tasks, newTask];
            
            return {
                tasks: newTasks,
            }
        })
    }

    onToggleCompleted = (id) => {
        this.setState(({tasks}) => {
            let completeTask = tasks.map((task) => {
                if(task.id === id) {
                    task.done = !task.done
                }
                return task;
            })
            return completeTask;
        })
    }


    onToggleEdited = (id) => {
        this.setState(({tasks}) => {
            let completeTask = tasks.map((task) => {
                if(task.id === id) {
                    task.edit = !task.done
                }
                return task;
            })
            return completeTask;
        })
    }

  render() {
    const countDone = this.state.tasks.filter((el) => el.done).length;
    const taskCount = this.state.tasks.length - countDone

    return (
        <div>
            <NewTaskForm 
                onAdd={this.addTask}
            />
            <TaskList todos={this.state.tasks}
                    onDeleted={this.deleteTask}
                    onToggleCompleted={this.onToggleCompleted}
                    onToggleEdited={this.onToggleEdited}
            />
            <Footer taskLeft={taskCount}
                    clearCompleted={this.clearCompleted}
            />
        </div>
    );
  }
}