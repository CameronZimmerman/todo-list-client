import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/todos">Todos</NavLink>
            </div>
        )
    }
}
