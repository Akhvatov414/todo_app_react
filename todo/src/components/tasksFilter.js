import React, { Component } from 'react';

export default class TasksFilter extends Component {
  names = ['all', 'active', 'completed'];

  render() {
    const { filter, filterStatus } = this.props;

    const buttons = this.names.map((el) => {
      const isSelected = filterStatus === el;
      const selectClass = isSelected ? 'selected' : '';

      return (
        <li key={el}>
          <button className={selectClass} onClick={filter} value={el}>
            {el}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}
