import React, { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [{ name: "Bhanu", age: 23, hobbies: "Write Something" }],
    showPerson: false,
  };
  switchNameHandler = () => {
    this.setState({
      persons: [{ name: "Bhanu Prakash", age: 23, hobbies: "Write Something" }],
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Bhanu Prakash", age: 23, hobbies: event.target.value },
      ],
    })
  }
  togglePersonHandler = () => {
    const showStatus = this.state.showPerson
    this.setState({ showPerson: !showStatus })
  }
  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
                    name={person.name} 
                    age={person.age}
                    hobbies={person.hobbies}
                    changed={this.nameChangeHandler} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Click Me</button>
        {persons}
      </div>
    )
  }
}

export default App
