/* eslint no-undef: "off"*/
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
 state = {
   persons: [
     { name: 'Marina', age: 28 },
     { name: 'Denis', age: 24 },
     { name: 'Victoria', age: 26},
   ],
   otherState: 'some other value'
 }

 switchNameHandler = (newName) => {
   // consle.log('Was clicked!');
this.setState({
    persons: [
       { name: newName, age: 28 },
       { name: 'Denis', age: 25 },
       { name: 'Victoria', age: 26},
     ]
   })
  }

  nameChangeHandler = (event) =>{
    this.setState({
        persons: [
           { name: 'Marina', age: 28 },
           { name: event.target.value, age: 23 },
           { name: 'Victoria', age: 26},
         ]
       })
  }

render(){
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid pink',
    padding: '8px',
    cursor: 'pointer'
  };
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>It's me, React App</p>
        <button
        style={style}
         onClick={this.switchNameHandler.bind(this, 'Marina')}>Switch name</button>
        <Person
        name = {this.state.persons[0].name}
        age = {this.state.persons[0].age}/>

        <Person
        name = {this.state.persons[1].name}
        age = {this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Maryna')}
        changed={this.nameChangeHandler}>My Hobbies: Dancing </Person>

        <Person
        name = {this.state.persons[2].name}
        age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World'));
  }
}

export default App;
