import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from './timer';

export default class Task extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    label: this.props.description,
    idTask: this.props.id,
    completed: this.props.done,
    edited: false,
    timeInSeconds: this.props.time,
    timeFromCreated: 0,
  };

  spaceChecker = (e) => {
    if (e.target.value === null) console.log('Пустой');
  };

  changeStatus = () => {
    this.setState((state) => ({
      completed: !state.completed,
    }));
  };

  editTask = (e) => {
    e.preventDefault();
    this.setState({
      label: e.target.value,
    });
    this.props.onEdit(this.props.id, this.state.label);
    this.onToggleEdited();
  };

  onChangeHandler = (e) => {
    let res;
    this.setState({
      label: e.target.value,
    });
    res = e.target.value;
    return res;
  };

  onToggleEdited = () => {
    this.setState({
      edited: !this.state.edited,
    });
  };

  renderEdit = () => {
    return (
      <form onSubmit={this.editTask}>
        <input type="text" className="edit" defaultValue={this.state.label} onChange={this.onChangeHandler} />
      </form>
    );
  };

  renderField = (description, created, onToggleCompleted, onDeleted) => {
    const { timeInSeconds } = this.state;
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
        <label>
          <span className="title">{description}</span>
          <Timer time={timeInSeconds} completed={this.props.done} />
          <span className="description">{`Created ${formatDistanceToNow(created, {
            includeSeconds: true,
            addSuffix: true,
          })}`}</span>
        </label>
        <button className="icon icon-edit" onClick={this.onToggleEdited} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  };

  render() {
    const { id, done, description, created, onDeleted, onToggleCompleted } = this.props;
    let classNames = '';
    //console.log(this.props);

    if (done) {
      classNames = 'completed';
    }

    if (this.state.edited) {
      classNames = 'editing';
    }

    return (
      <li className={classNames} key={id}>
        {this.state.edited ? this.renderEdit() : this.renderField(description, created, onToggleCompleted, onDeleted)}
      </li>
    );
  }
}
