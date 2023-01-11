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
        ],
        filter: 'all'
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

    filterAll = (e) => {
        let arrAllTasks = [...this.state.tasks];
        let arrActiveTasks = [...this.state.tasks].filter((el) => !el.done);
        let arrCompletedTasks = [...this.state.tasks].filter((el) => el.done);
        
        if(e.target.value === 'All'){
            this.setState(({tasks}) => {
                return {
                    tasks: arrAllTasks
                }
            })
            console.log('Изначальный массив', this.state.tasks);
        }
        
        if(e.target.value === 'Completed'){
            this.setState(({tasks}) => {
                return {
                    tasks: arrCompletedTasks
                }
            })
            console.log('Массив завершенных тасок', arrCompletedTasks);
        }
        
        if(e.target.value === 'Active'){
            this.setState(({tasks}) => {
                return {
                    tasks: arrActiveTasks
                }
            })
            console.log('Массив активных тасок ', arrActiveTasks);
        }
    }

    filterActive = (e) => {
    }

    filterCompleted = () => {
        console.log('Completed');
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
                      filter={this.state.filter}
                      onDeleted={this.deleteTask}
                      onToggleCompleted={this.onToggleCompleted}
                      onToggleEdited={this.onToggleEdited}
            />
            <Footer buttons={this.state.filterButtons}
                    taskLeft={taskCount}
                    clearCompleted={this.clearCompleted}
                    filterAll={this.filterAll}
                    filterActive={this.filterActive}
                    filterCompleted={this.filterCompleted}
            />
        </div>
    );
  }
}