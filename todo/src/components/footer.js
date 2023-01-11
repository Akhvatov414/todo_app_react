import React from 'react';
import TasksFilter from './tasksFilter';

const Footer = ({taskLeft, clearCompleted, filterAll, filterActive, filterCompleted}) => {
    return (
        <footer className="footer">
          <span className="todo-count">{taskLeft} items left</span>
          <TasksFilter filter={filterAll}/>
          <button className="clear-completed"
                  onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;