import React, { Component } from "react";
import "./App.css";
import Validation from './Validation/Validation'

class App extends Component {
  state = {
    userInput: "",
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength = {this.state.userInput.length}/>
      </div>
    );
  }
}

export default App;
