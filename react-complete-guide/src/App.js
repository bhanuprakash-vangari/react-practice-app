import React, { Component } from "react";
import "./App.css";
import Radium from 'radium';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "15VE1A05C7", name: "Bhanu", age: 23, hobbies: "Write Something" },
      { id: "15VE1A0587", name: "Rohini", age: 21, hobbies: "Write Something" },
      { id: "15VE1A05C9", name: "Bhagya", age: 45, hobbies: "Write Something" },
    ],
    showPerson: false,
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.hobbies = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };
  togglePersonHandler = () => {
    const showStatus = this.state.showPerson;
    this.setState({ showPerson: !showStatus });
  };
  render() {
    const buttonStyle = {
      margin: "auto",
      boxShadow: "2px 5px #A0FF33",
      padding: "5px 10px",
      backgroundColor: "green",
      border: "2px mediumblue",
      color: "white",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
        boxShadow: "2px 5px #B6FFAA",
      },
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                hobbies={person.hobbies}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );
      buttonStyle.backgroundColor='blue'
      buttonStyle.boxShadow ='2px 5px #AAFFE0'
      buttonStyle[":hover"] = {
        backgroundColor: "aquamarine",
        color: "black",
        boxShadow: "2px 5px #AAFFE0",
      };
    }
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button style={buttonStyle} onClick={this.togglePersonHandler}>
          Click Me
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
