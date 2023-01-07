import React from 'react';
import TasksFilter from './tasksFilter';

const Footer = ({taskLeft}) => {
    return (
        <footer className="footer">
          <span className="todo-count">{taskLeft} items left</span>
          <TasksFilter/>
          <button className="clear-completed">Clear completed</button>
        </footer>
    );
};

export default Footer;