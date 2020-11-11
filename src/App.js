import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Timer from './Components/Timer'

class App extends Component {
  render(){
    return (
      <>
        <ToastContainer />
        <Timer duration='45' title='pomodoro'/>
        <Timer duration='5' title='Courte pause' />
        <Timer duration='10' title='Longue pause' />
      </>
    );
  }
}

export default App;
