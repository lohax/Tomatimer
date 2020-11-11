import React, { Component } from 'react'

class Message extends Component {
    render () {
        return (<div style={{marginLeft:15}}>{this.props.msg}</div>)
    }
}

export default Message