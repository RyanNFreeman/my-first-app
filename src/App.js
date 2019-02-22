import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Ryan', age: 28},
      { name: 'Lucy', age: 2},
      { name: 'Rachael', age: 23}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchHandler = (newName) => {
    //Don't do this this.state.persons[0].name = 'Ryan the beautiful'
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Lucy the brave', age: 2},
        { name: 'Rachael the pretty', age: 23}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ryanlolol', age: 28},
        { name: event.target.value, age: 2},
        { name: 'Rachael the pretty', age: 23}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={() => this.togglePersonsHandler()}>Switch Name</button>
        {
          this.state.showPersons === true ? 
            <div>
              <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchHandler.bind(this, 'Ryan')}
              />  
              <Person
                changed={this.nameChangedHandler} 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}>My hobbies: wedding planning</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}>My hobbies: wedding planning</Person>
              </div> : null
          }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
  }
}

export default App;
