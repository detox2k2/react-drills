import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      moneySlang: ["scrilla", "paper", "bag", "racks", "cheddar"]
    };
  }

  render() {
    let moneyToDisplay = this.state.moneySlang.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{moneyToDisplay}</div>;
  }
}

export default App;