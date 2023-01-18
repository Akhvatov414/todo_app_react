import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
  state = {
    label: this.props.description,
    idTask: this.props.id,
    completed: false,
    edited: false,
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
    this.props.onToggleEdited(this.state.idTask);
  };

  onChangeHandler = (e) => {
    let res;
    this.setState({
      label: e.target.value,
    });
    res = e.target.value;
    return res;
  };

  render() {
    const { id, done, edit, description, created, onDeleted, onToggleEdited, onToggleCompleted } = this.props;
    let classNames = '';

    if (done) {
      classNames = 'completed';
    }

    if (edit) {
      classNames = 'editing';
    }

    return (
      <li className={classNames} key={id}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
          <label>
            <span className="description">{description}</span>
            <span className="created">
              Created
              {formatDistanceToNow(created, { includeSeconds: true })}
            </span>
          </label>
          <button className="icon icon-edit" onClick={onToggleEdited} />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <form onSubmit={this.editTask}>
          <input type="text" className="edit" defaultValue={this.state.label} onChange={this.onChangeHandler} />
        </form>
      </li>
    );
  }
}
