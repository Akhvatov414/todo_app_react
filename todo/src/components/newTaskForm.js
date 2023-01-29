import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class newTaskForm extends Component {
  state = {
    description: '',
    minValue: '',
    secValue: '',
  };

  static defaultProps = {
    onAdd: () => {
      console.log('item added');
    },
  };

  static propTypes = {
    onAdd: PropTypes.func,
  };

  onChangeHandler = (property, e) => {
    this.setState({
      [property]: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      description: '',
      minValue: '',
      secValue: '',
    });
  };

  onSubmit = (e) => {
    const { description, minValue, secValue } = this.state;
    e.preventDefault();
    if (this.state.description === '') console.log('Пустой элемент');
    this.props.onAdd(description, minValue, secValue);

    this.resetForm();
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit} className="new-todo-form">
          <input
            className="new-todo"
            placeholder="Task"
            onChange={(e) => {
              this.onChangeHandler('description', e);
            }}
            value={this.state.description}
            autoFocus
          />
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            required
            type="number"
            min={0}
            max={1000}
            step={1}
            onChange={(e) => {
              this.onChangeHandler('minValue', e);
            }}
            value={this.state.minValue}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Sec"
            required
            type="number"
            min={0}
            max={59}
            step={1}
            onChange={(e) => {
              this.onChangeHandler('secValue', e);
            }}
            value={this.state.secValue}
          />
          <button type="submit" style={{ display: 'none' }}>
            Send
          </button>
        </form>
      </header>
    );
  }
}
