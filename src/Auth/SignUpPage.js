import React, { Component } from 'react'

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
    handleSubmit = (e) => {
        e.preventDefault();
        //api stuff goes here
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <form>
                    <label> Email
                        <input value = {this.state.email} onChange = {this.handleEmailChange}/>
                    </label>
                    <label> Password
                        <input value = {this.state.password} onChange = {this.handlePasswordChange}/>
                    </label>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
