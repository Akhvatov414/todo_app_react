import React, { Component } from 'react'

export default class tasksFilter extends Component {
  state = { 
    selected: false
  }

  selectItem = () => {
    this.setState((state) => {
      return {
        selected: !state.selected,
      }
    })
  }

  render() {
    const {filter} = this.props
    let classNames = '';
    //console.log(this.state);
    if(this.state.selected){
      classNames = 'selected';
    }

    return (
            <ul className="filters">
              <li>
                <button className={classNames} onClick={filter} value='All'>All</button>
              </li>
              <li>
                <button className={classNames} onClick={filter} value='Active'>Active</button>
              </li>
              <li>
                <button className={classNames} onClick={filter} value='Completed'>Completed</button>
              </li>
            </ul>
    )
  }
}