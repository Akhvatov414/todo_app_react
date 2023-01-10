import React from 'react';
import TasksFilter from './tasksFilter';

const Footer = ({taskLeft, clearCompleted}) => {
    return (
        <footer className="footer">
          <span className="todo-count">{taskLeft} items left</span>
          <TasksFilter/>
          <button className="clear-completed"
                  onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;