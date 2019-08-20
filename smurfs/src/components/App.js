import React, { Component } from "react";
import "./App.css";
import Smurf from './Forms/Smurf.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <Smurf />
      </div>
    );
  }
}

export default App;
