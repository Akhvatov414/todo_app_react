import React from 'react';
import TasksFilter from './tasksFilter';

const Footer = ({taskLeft, clearCompleted, filterAll, filterStatus}) => {
    return (
        <footer className="footer">
          <span className="todo-count">{taskLeft} items left</span>
          <TasksFilter filter={filterAll} filterStatus={filterStatus}/>
          <button className="clear-completed"
                  onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;