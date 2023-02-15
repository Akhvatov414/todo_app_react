import React, { useState } from 'react';
//import PropTypes from 'prop-types';

const NewTaskForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const resetForm = () => {
    setDescription('');
    setMinutes('');
    setSeconds('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(description, minutes, seconds);

    resetForm();
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          required
          type="number"
          min={0}
          max={1000}
          step={1}
          onChange={(e) => {
            setMinutes(e.target.value);
          }}
          value={minutes}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          required
          type="number"
          min={0}
          max={59}
          step={1}
          onChange={(e) => {
            setSeconds(e.target.value);
          }}
          value={seconds}
        />
        <button type="submit" style={{ display: 'none' }}>
          Send
        </button>
      </form>
    </header>
  );
};

export default NewTaskForm;
