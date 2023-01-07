import React, { Component } from 'react'

export default class newTaskForm extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" onClick={(e) => this.props.onAdd(e.target.value)} autoFocus/>
      </header>
    )
  }
}


// import React from 'react';

// const NewTaskForm = ({onAdd}) => {


//     return (
      //   <header className="header">
      //   <h1>todos</h1>
      //   <input className="new-todo" placeholder="What needs to be done?" onClick={onAdd} autoFocus/>
      // </header>
//     );
// };

// export default NewTaskForm;