import React, { Component } from 'react'

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
    const {id, description, created, onDeleted} = this.props;
    const {completed, editing} = this.state;
    let classNames = '';

    if(completed){
        classNames = 'completed';
    }

    if(editing){
        classNames = 'editing';
    }

    return (
        <li className={classNames} key={id}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={this.changeStatus}/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit" 
                    onClick={this.editTask}></button>
                <button className="icon icon-destroy" 
                    onClick={onDeleted}></button>
            </div>            
            <input type="text" className="edit" defaultValue={description}/>
        </li>
    )
  }
}