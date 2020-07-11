import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';
import Validation from './Validation/Validation.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state={
    name:"Kitu" ,
    work:"Student",   
    lentext:"0",
    charsequence: "Kitu".split('')
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

  Lengthhandler = (event)=>{
    var str=event.target.value;
    this.setState({
      lentext:  str.length,
      charsequence: str.split('')
    });
  }
  deleteCharHandler = ( index ) => {
    console.log("Hello");
    const text = this.state.name.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({name: updatedText});
  }

  render() {
    const charList = this.state.name.split('').map((ch, index) => {
      return <CharComponent 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}
         />;
    });
    return (
      <div className='App'>
        <input type="text" onChange={this.Lengthhandler}></input>
        <UserInput changes={this.NameHandler}  ></UserInput> 
        <button onClick={this.SwitchHandler}>Switch</button>
        <UserOutput name={this.state.name} work={this.state.work} > </UserOutput>
        <Validation lentext={this.state.lentext} > </Validation>
        {charList}
      </div>
    );
  }
}

export default App;
