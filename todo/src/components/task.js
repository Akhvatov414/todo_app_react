import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {

    state = {
        completed: false,
        editing: false,
    }
      

    changeStatus = () => {
        this.setState((state) => {
            return {
                completed: !state.completed,
            }
        })
    }

    editTask = () => {
        this.setState({
            editing: true,
        })
    }

    

  render() {
    const {id, done, edit, description, created, onDeleted, onToggleEdited, onToggleCompleted} = this.props;
    let classNames = '';

    if(done){
        classNames = 'completed';
    }

    if(edit){
        classNames = 'editing';
    }

    return (
        <li className={classNames} key={id}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={onToggleCompleted}/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">Created {formatDistanceToNow(created, { includeSeconds: true })}</span>
                </label>
                <button className="icon icon-edit" 
                    onClick={onToggleEdited}></button>
                <button className="icon icon-destroy" 
                    onClick={onDeleted}></button>
            </div>            
            <input type="text" className="edit" defaultValue={description}/>
        </li>
    )
  }
}