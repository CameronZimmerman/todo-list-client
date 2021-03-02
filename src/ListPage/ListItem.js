import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <span>{this.props.todo}</span>
                <input type = 'checkbox'/>
            </div>
        )
    }
}
