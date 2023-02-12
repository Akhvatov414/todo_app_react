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
    setTasks((prev) =>
      prev.map((value) => {
        if (value.id === id) {
          return { ...value, time: newValueTimer };
        }
        return value;
      })
    );
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
  let filteredItems;
  switch (filter) {
    case 'completed':
      filteredItems = tasks.map((item) => item).filter((el) => el.done);
      break;
    case 'active':
      filteredItems = tasks.map((item) => item).filter((el) => !el.done);
      break;
    case 'all':
      filteredItems = tasks.map((item) => item);
      break;
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
