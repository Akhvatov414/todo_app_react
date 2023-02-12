import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from './newTaskForm';
import TaskList from './taskList';
import Footer from './footer';

const App = () => {
  const createTask = (description, time) => {
    return {
      id: uuidv4(),
      description,
      created: Date.now(),
      done: false,
      time: time,
    };
  };
  const [filter, setFilterValue] = useState('all');
  const [tasks, setTasks] = useState([
    createTask('Completed task', 20),
    createTask('Edited task', 60),
    createTask('Active task', 120),
  ]);

  console.log(tasks);

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((el) => el.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((el) => !el.done));
  };

  const isEmpty = (str) => {
    if (str.trim() == '') return true;
    return false;
  };

  const addTask = (task, minutes, seconds) => {
    if (isEmpty(task)) return;
    const timeInSeconds = Number(minutes) * 60 + Number(seconds);
    const newTask = createTask(task, timeInSeconds);

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const edTask = (id, newTask) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, description: newTask };
        }
        return task;
      })
    );
  };

  const updateTime = (id, newValueTimer) => {
    this.setState(({ tasks }) => {
      const newTime = tasks.map((value) => {
        if (value.id === id) {
          value.time = newValueTimer;
        }
        return value;
      });
      return newTime;
    });
  };

  const onToggleCompleted = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setFilter = (value) => {
    setFilterValue(value);
  };

  const filterAll = (e) => {
    if (e.target.value === 'all') setFilter('all');

    if (e.target.value === 'completed') setFilter('completed');

    if (e.target.value === 'active') setFilter('active');
  };
  const countDone = tasks.filter((el) => !el.done).length;

  const todosItems = tasks.map((item) => item);
  let filteredItems;
  switch (filter) {
    case 'completed':
      filteredItems = todosItems.filter((el) => el.done);
      break;
    case 'active':
      filteredItems = todosItems.filter((el) => !el.done);
      break;
    default:
      filteredItems = todosItems;
  }

  return (
    <section className="todoapp">
      <NewTaskForm onAdd={addTask} />
      <TaskList
        todos={filteredItems}
        filter={filter}
        onDeleted={deleteTask}
        onToggleCompleted={onToggleCompleted}
        onEdit={edTask}
        updateTime={updateTime}
      />
      <Footer taskLeft={countDone} clearCompleted={clearCompleted} filterAll={filterAll} filterStatus={filter} />
    </section>
  );
};

export default App;

// export default class App extends Component {
//   state = {
//     tasks: [
//       this.createTask('Completed task', 20),
//       this.createTask('Editing task', 60),
//       this.createTask('Active task', 61),
//     ],
//     filter: 'all',
//   };

//   createTask(description, time) {
//     return {
//       id: uuidv4(),
//       description,
//       created: Date.now(),
//       done: false,
//       time: time,
//     };
//   }

//   deleteTask = (id) => {
//     this.setState(({ tasks }) => {
//       const removeArr = tasks.filter((el) => el.id !== id);

//       return {
//         tasks: removeArr,
//       };
//     });
//   };

//   clearCompleted = () => {
//     this.setState(({ tasks }) => {
//       const removeArr = tasks.filter((el) => !el.done);

//       return {
//         tasks: removeArr,
//       };
//     });
//   };

//   isEmpty(str) {
//     if (str.trim() == '') return true;
//     return false;
//   }

//   addTask = (task, minutes, seconds) => {
//     if (this.isEmpty(task)) return;
//     const timeInSeconds = Number(minutes) * 60 + Number(seconds);
//     const newTask = this.createTask(task, timeInSeconds);

//     this.setState(({ tasks }) => {
//       const newTasks = [...tasks, newTask];

//       return {
//         tasks: newTasks,
//       };
//     });
//   };

//   edTask = (id, newTask) => {
//     this.setState(({ tasks }) => {
//       const editTask = tasks.map((task) => {
//         if (task.id === id) {
//           task.description = newTask;
//         }
//         return task;
//       });
//       return editTask;
//     });
//   };

//   updateTime = (id, newValueTimer) => {
//     this.setState(({ tasks }) => {
//       const newTime = tasks.map((value) => {
//         if (value.id === id) {
//           value.time = newValueTimer;
//         }
//         return value;
//       });
//       return newTime;
//     });
//   };

//   onToggleCompleted = (id) => {
//     this.setState(({ tasks }) => {
//       const completeTask = tasks.map((task) => {
//         if (task.id === id) {
//           task.done = !task.done;
//         }
//         return task;
//       });
//       return completeTask;
//     });
//   };

//   setFilter = (value) => {
//     this.setState(() => ({
//       filter: value,
//     }));
//   };

//   filterAll = (e) => {
//     if (e.target.value === 'all') this.setFilter('all');

//     if (e.target.value === 'completed') this.setFilter('completed');

//     if (e.target.value === 'active') this.setFilter('active');
//   };

//   render() {
//     const countDone = this.state.tasks.filter((el) => !el.done).length;

//     const todosItems = this.state.tasks.map((item) => item);
//     let filteredItems;
//     switch (this.state.filter) {
//       case 'completed':
//         filteredItems = todosItems.filter((el) => el.done);
//         break;
//       case 'active':
//         filteredItems = todosItems.filter((el) => !el.done);
//         break;
//       default:
//         filteredItems = todosItems;
//     }

//     return (
//       <section className="todoapp">
//         <NewTaskForm onAdd={this.addTask} />
//         <TaskList
//           todos={filteredItems}
//           filter={this.state.filter}
//           onDeleted={this.deleteTask}
//           onToggleCompleted={this.onToggleCompleted}
//           onEdit={this.edTask}
//           updateTime={this.updateTime}
//         />
//         <Footer
//           buttons={this.state.filterButtons}
//           taskLeft={countDone}
//           clearCompleted={this.clearCompleted}
//           filterAll={this.filterAll}
//           filterStatus={this.state.filter}
//         />
//       </section>
//     );
//   }
// }
