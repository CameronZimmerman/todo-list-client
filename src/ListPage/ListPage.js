import React, { Component } from 'react'
import { getTodos } from '../api-utils.js'
import ListItem from './ListItem.js'
export default class ListPage extends Component {
    state = {
        todos: []
    }

    async componentDidMount() {
        const { token } = this.props
        let todos = getTodos(token)
        this.setState({todos})
    }
    render() {
        return (
            <div>
               {this.state.todos.map(todo => <ListItem todo = {todo.todo}/>)} 
            </div>
        )
    }
}
