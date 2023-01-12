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
            created: Date.now(),
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
        if(e.target.value === 'all'){
            this.setState(({filter}) => {
                return {
                    filter: 'all'
                }
            })
        }
        
        if(e.target.value === 'completed'){
            this.setState(({filter}) => {
                return {
                    filter: 'completed'
                }
            })
        }
        
        if(e.target.value === 'active'){
            this.setState(({filter}) => {
                return {
                    filter: 'active'
                }
            })
        }
    }

    filterActive = (e) => {
    }

    filterCompleted = () => {
        console.log('Completed');
    }

  render() {
    const countDone = this.state.tasks.filter((el) => el.done).length;
    const taskCount = this.state.tasks.length - countDone;

    let todosItems = [...this.state.tasks].map((item) =>  item);
    let filteredItems;
    switch(this.state.filter){
        case 'completed': filteredItems = todosItems.filter((el) => el.done);
        break;
        case 'active' : filteredItems = todosItems.filter((el) => !el.done);
        break;
        default: filteredItems = todosItems;
    }

    

    return (
        <div>
            <NewTaskForm 
                onAdd={this.addTask}
            />
            <TaskList todos={filteredItems}
                      filter={this.state.filter}
                      onDeleted={this.deleteTask}
                      onToggleCompleted={this.onToggleCompleted}
                      onToggleEdited={this.onToggleEdited}
            />
            <Footer buttons={this.state.filterButtons}
                    taskLeft={taskCount}
                    clearCompleted={this.clearCompleted}
                    filterAll={this.filterAll}
                    filterStatus={this.state.filter}
            />
        </div>
    );
  }
}