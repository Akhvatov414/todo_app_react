import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class newTaskForm extends Component {
  state = {
    description: '',
  };

  static defaultProps = {
    onAdd: () => {
      console.log('item added');
    },
  };

  static propTypes = {
    onAdd: PropTypes.func,
  };

  onChangeHandler = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      description: '',
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.description);

    this.resetForm();
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onChangeHandler}
            value={this.state.description}
            autoFocus
          />
        </form>
      </header>
    );
  }
}
