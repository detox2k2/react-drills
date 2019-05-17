import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      typeBox: '',
    };
  }
  handleChange(value){
    this.setState({typeBox: value});
  }
  render() {
    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        <p>{this.state.typeBox}</p> 

      </div>
    );
  }
}

export default App;
