import React, { Component } from 'react'

export default class tasksFilter extends Component {
  btns = [
    {name: 'all', value: 'all', id: Math.round(Math.random() * 1000)},
    {name: 'active', value: 'active', id: Math.round(Math.random() * 1000)},
    {name: 'completed', value: 'completed', id: Math.round(Math.random() * 1000)}
  ]
  
  render() {
    const {filter, filterStatus} = this.props;

    const buttons = this.btns.map(({name, value, id}) => {
      const isSelected = filterStatus === name;
      const selectClass = isSelected ? 'selected' : '';

      return (
        <li key={id}>
          <button className={selectClass} onClick={filter} value={value}>{name}</button>
        </li>
      )
    })
    

    return (
            <ul className="filters">
              {buttons}
            </ul>
    )
  }
}