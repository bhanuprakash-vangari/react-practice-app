import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from 'styled-components'


const StyledButton = styled.button`
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  font-family: Poppins;
  box-shadow: 2px 5px 8px ${(props) => (props.alt ? "#6ed6ff" : "#a0ff33")};
  padding: 8px 25px;
  background-color: ${(props) => (props.alt ? "mediumblue" : "green")};
  border-radius :8px;
  color: white;
  border: none;
  outline: none;

  &:hover {
    background-color: ${(props) => (props.alt ? "skyblue" : "#a0ff33")};
    color: black;
    boxshadow: 2px 5px 8px ${(props) => (props.alt ? "#308dff" : "#b6ffaa")};
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
        <StyledButton alt={this.state.showPerson} onClick={this.togglePersonHandler}>
          Click Me
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
