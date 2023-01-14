import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from './tasksFilter';

function Footer(props) {
  const { taskLeft, clearCompleted, filterAll, filterStatus } = props;

  return (
    <footer className="footer">
      <span className="todo-count">{taskLeft} items left</span>
      <TasksFilter filter={filterAll} filterStatus={filterStatus} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  taskLeft: 0,
  clearCompleted: () => {
    console.log('All completed');
  },
  filterAll: () => {
    console.log('Filter');
  },
  filterStatus: 'all',
};

Footer.propTypes = {
  taskLeft: PropTypes.number,
  clearCompleted: PropTypes.func,
  filterAll: PropTypes.func,
  filterStatus: PropTypes.any,
};

export default Footer;
