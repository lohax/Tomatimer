import React, { Component } from 'react'

class Display extends Component {
    render () {
        return (
            <>
                <h1 style={{marginLeft:15}}>{this.props.title}</h1>
                <h2 style={{marginLeft:15}}>Durée : {this.props.timerValue}</h2>
            </>
        )
    }
}

export default Display