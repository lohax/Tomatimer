import React, { Component } from 'react'

import { toast } from 'react-toastify';

import ButtonGroup from './ButtonGroup'
import Display from './Display'
import Message from './Message'

class Timer extends Component {
    state = { 
        initialValue:10,
        duration: 10,
        message: '',
        handle: 0
    }

    notify = (text, type) => {
        toast[type](text, { autoClose: 1500});
        //toast.success(text, { autoClose: 1500});
      };

    prependZero = value => {
        return value < 10 ? '0' + value.toString() : value.toString()
    }

    formatDuration = () => {
        const minutes = Math.floor(this.state.duration / 60)
        const seconds = Math.floor(this.state.duration % 60) // Modulo pour avoir le reste
        return `${this.prependZero(minutes)}:${this.prependZero(seconds)}`
    }

    componentDidMount(){
        this.setState({
            initialValue: parseInt(this.props.duration, 10) * 60, //le ,10 c'est pour dire que l'on parse en
            duration: parseInt(this.props.duration, 10) * 60
        })
    }

    componentWillUnmount(){
        this.clean()
    }
    
    count = () => {
        this.setState({
            duration: this.state.duration - 1
        })
        if(this.state.duration === 0){
            this.clean()
        }
        
    }
    
    clean = (message) => {
        clearInterval(this.state.handle)
        this.setState({
            message:message
        })
    }

    start = () => {
        this.notify(`C'est parti`,'success')

        const handle = setInterval(()=>{
            this.count()
        },1000)

        this.setState({
            handle,
            message: ''
        })
    }

    stop = () => {
        this.notify('En pause','warn')
        this.clean('Mis en pause')
    }

    reset = () => {
        this.clean('réinitialisé')
        this.setState({
            duration:this.state.initialValue
        })
        this.notify('Réinitialisation','error')

    }
    
    render () {
        return (
            <div>
                <Display 
                    title={this.props.title} 
                    timerValue={this.formatDuration()}
                />

                <ButtonGroup 
                    onStart={this.start}
                    onStop={this.stop}
                    onReset={this.reset}
                />

                <Message msg={this.state.message}/>
                
            </div>
            
        )
    }
}

export default Timer 