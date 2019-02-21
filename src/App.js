import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Ryan', age: 28},
      { name: 'Lucy', age: 2},
      { name: 'Rachael', age: 23}
    ]
  }

  switchHandler = () => {
    //Don't do this this.state.persons[0].name = 'Ryan the beautiful'
    this.setState({
      persons: [
        { name: 'Ryan the beautiful', age: 28},
        { name: 'Lucy the brave', age: 2},
        { name: 'Rachael the pretty', age: 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: wedding planning</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: wedding planning</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: wedding planning</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
  }
}

export default App;
