import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      moneySlang: ['bread', 'racks', 'cheddar', 'bag', 'scrilla',]
    };
  }

handleChange(filter) {
  this.setState({ filterString: filter });
}

render() {
  let moneySlangToDisplay = this.state.moneySlang
  .filter((element, index) => {
    return element.includes(this.state.filterString);
  })
  .map((element, index) => {
    return <h3 key={index}>{element}</h3>;
  });

  return (
    <div className='App'>
    <input onChange={e => this.handleChange(e.target.value)} type='text' />
    {moneySlangToDisplay}
    </div>
  );
}
}

export default App;
