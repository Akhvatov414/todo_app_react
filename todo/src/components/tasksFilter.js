import React, { Component } from 'react';

export default class TasksFilter extends Component {
  btns = [{ name: 'all' }, { name: 'active' }, { name: 'completed' }];

  render() {
    const { filter, filterStatus } = this.props;

    const buttons = this.btns.map(({ name }) => {
      const isSelected = filterStatus === name;
      const selectClass = isSelected ? 'selected' : '';

      return (
        <li key={name}>
          <button className={selectClass} onClick={filter} value={name}>
            {name}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}
