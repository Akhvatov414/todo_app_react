import React, { Component } from 'react';

export default class TasksFilter extends Component {
  btns = [
    { name: 'all', value: 'all' },
    { name: 'active', value: 'active' },
    { name: 'completed', value: 'completed' },
  ];

  render() {
    const { filter, filterStatus } = this.props;

    const buttons = this.btns.map(({ name, value }) => {
      const isSelected = filterStatus === name;
      const selectClass = isSelected ? 'selected' : '';

      return (
        <li key={name}>
          <button className={selectClass} onClick={filter} value={value}>
            {name}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}
