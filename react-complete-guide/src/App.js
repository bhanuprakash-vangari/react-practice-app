import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from 'styled-components'


const StyledButton = styled.button`
  margin: auto;
  box-shadow: 2px 5px #a0ff33;
  padding: 7.5px 15px;
  background-color: green;
  border: 2px mediumblue;
  color: white;
  border: none;
  outline: none;
  &:hover {
    background-color: lightgreen;
    color: black;
    boxshadow: 2px 5px #b6ffaa;
  }
`;
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
     
    }
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <StyledButton onClick={this.togglePersonHandler}>
          Click Me
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
