import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        
        return (
            <div>
                <span>{this.props.todo.todo}</span>
                <input type = 'checkbox' checked = {this.props.todo.complete} onChange = {() => this.props.handleTodoToggle(this.props.todo.id)}/>
            </div>
        )
    }
}
