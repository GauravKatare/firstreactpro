import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';


class App extends Component {
  state={
    name:"Kitu" ,
    work:"Student"    
  }

  SwitchHandler=()=>{
    this.setState({
      name:"Kritika" ,
      work:"Aver Student"    
    });
  }

  NameHandler = (event)=>{
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className='App'>
        <UserInput changes={this.NameHandler}  ></UserInput> 
        <button onClick={this.SwitchHandler}>Switch</button>
        <UserOutput name={this.state.name} work={this.state.work} > </UserOutput>
      </div>
    );
  }
}

export default App;
