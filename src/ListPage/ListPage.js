import React, { Component } from 'react'
import { getTodos, addTodo } from '../api-utils.js'
import ListItem from './ListItem.js'
export default class ListPage extends Component {
    state = {
        todos: [],
        todo: ''
    }

    async componentDidMount() {
      await this.fetchTodos()
    }

    handleTodoSubmit = async (e) => {
        e.preventDefault()
        const { token } = this.props
        const todo = {todo: this.state.todo, complete: false}
        await addTodo(todo, token)
        await this.fetchTodos()
    }

    handleTodoChange = (e) => {
        this.setState({todo: e.target.value})
    }

    fetchTodos = async (e) => {
        const { token } = this.props
        let todos = await getTodos(token)
        this.setState({todos})
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                <h1>To Do list</h1>
                <form onSubmit = {this.handleTodoSubmit}>
                    <label> New To Do
                        <input onChange ={this.handleTodoChange}/>
                        <button>Add</button>
                    </label>
                </form>
                {!todos.length && <p>Nothing here... you're all done.</p>}
               {todos.map(todo => <ListItem todo = {todo.todo}/>)}

            </div>
        )
    }
}
