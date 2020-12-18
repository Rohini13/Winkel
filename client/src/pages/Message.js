import React, { Component } from 'react'

export class Message extends Component {
    render() {
        return (
            <div className='container'>
                <h3>
                {this.props.msg}
                </h3>
            </div>
        )
    }
}

export default Message
