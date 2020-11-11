import React, { Component } from 'react'
import Button from './Button'

class ButtonGroup extends Component {
    state = {}
    render () {
        return (
            <div>
                <Button text='start' onBtnClick={this.props.onStart} btnCssClasses='btn btn-success ml-3'/>
                <Button text='Stop' onBtnClick={this.props.onStop} btnCssClasses='btn btn-warning ml-3'/>
                <Button text='Reset' onBtnClick={this.props.onReset} btnCssClasses='btn btn-danger ml-3'/>
            </div>
        )
    }
}

export default ButtonGroup