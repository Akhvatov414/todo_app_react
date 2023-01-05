import React, { Component } from 'react'

export default class Task extends Component {

    state = {
        completed: false,
    }        
      

    changeStatus = () => {
        this.setState({
            completed: true,
        })
    }

    

  render() {
    const {id, description, created, stateTask} = this.props;
    const {completed} = this.state;
    let classNames = '';

    if(completed){
        classNames = 'completed'

        return (
            <li className={classNames} key={id}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={this.changeStatus}/>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
                <input type="text" className="edit" defaultValue={description}/>
            </li>
        )
    }

    if(!completed){
        classNames = '';
    }

    return (
        <li className={classNames} key={id}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={this.changeStatus}/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        </li>
    )
  }
}