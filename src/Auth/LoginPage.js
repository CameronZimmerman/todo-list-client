import React, { Component } from 'react'
import { loginUser } from '../api-utils.js'
import { setToken } from '../local-storage-utils.js'
export default class SignUpPage extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let token = await loginUser(this.state)
        setToken(token)
        this.props.handleTokenChange(token);
        this.props.history.push('/todos')
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label> Email
                        <input value = {this.state.email} onChange = {this.handleEmailChange}/>
                    </label>
                    <label> Password
                        <input value = {this.state.password} onChange = {this.handlePasswordChange}/>
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}