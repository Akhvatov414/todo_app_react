import PropTypes from 'prop-types';
import React from 'react';

import Task from './task';

function TaskList(props) {
  const { todos, onDeleted, onToggleCompleted, onToggleEdited, onEdit, updateTime } = props;
  console.log(props);
  const elements = todos.map((item) => {
    const { ...itemProps } = item;
    return (
      <Task
        {...itemProps}
        onDeleted={() => onDeleted(item.id)}
        onToggleCompleted={() => onToggleCompleted(item.id)}
        onToggleEdited={() => onToggleEdited(item.id)}
        onEdit={onEdit}
        updateTime={updateTime}
        key={item.id}
      />
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
}

TaskList.defaultProps = {
  key: Math.round(Math.random() * 1000),
  onDeleted: () => {
    console.log('Deleted');
  },
  onToggleCompleted: () => {
    console.log('Completed');
  },
  onToggleEdited: () => {
    console.log('Edited');
  },
};

TaskList.propType = {
  key: PropTypes.number,
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  onToggleEdited: PropTypes.func,
};
export default TaskList;
