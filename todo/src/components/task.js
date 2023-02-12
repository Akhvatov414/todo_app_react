import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from './timer';

const Task = ({ onEdit, updateTime, description, id, done, time, created, onToggleCompleted, onDeleted }) => {
  const [label, setLabel] = useState(description);
  //const [idTask, setIdTask] = useState(id);
  //const [completed, setCompleted] = useState(done);
  const [edited, setEdited] = useState(false);
  //const [timeInSeconds, setTimeInSeconds] = useState(time);
  //const [timeFromCreated, setTimeFromCreated] = useState(0);
  const editTask = (e) => {
    e.preventDefault();
    setLabel(e.target.value);
    onEdit(id, label);
    onToggleEdited();
  };

  const onToggleEdited = () => {
    setEdited((prev) => !prev);
  };

  const renderEdit = () => {
    return (
      <form onSubmit={editTask}>
        <input
          type="text"
          className="edit"
          defaultValue={label}
          onChange={(e) => {
            setLabel(e.target.value);
          }}
        />
      </form>
    );
  };

  const renderField = () => {
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
        <label>
          <span className="title">{description}</span>
          <Timer idTask={id} time={time} completed={done} updateTime={updateTime} />
          <span className="description">{`Created ${formatDistanceToNow(created, {
            includeSeconds: true,
            addSuffix: true,
          })}`}</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEdited} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  };
  let classNames = '';

  if (done) {
    classNames = 'completed';
  }

  if (edited) {
    classNames = 'editing';
  }

  return (
    <li className={classNames} key={id}>
      {edited ? renderEdit() : renderField(created, onToggleCompleted, onDeleted)}
    </li>
  );
};

export default Task;
