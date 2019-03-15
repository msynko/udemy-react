/* eslint no-undef: "off"*/
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
 state = {
   persons: [
     { id: 'foo', name: 'Marina', age: 28 },
     { id: 'moo', name: 'Denis', age: 24 },
     { id: 'boo', name: 'Victoria', age: 26}
   ],
   otherState: 'some other value',
   showPersons: false
 }

 switchNameHandler = (newName) => {
   // consle.log('Was clicked!');
this.setState({
    persons: [
       {  name: newName, age: 28 },
       {  name: 'Denis', age: 25 },
       {  name: 'Victoria', age: 26}
     ]
   })
  }

nameChangeHandler = (event, id) =>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  });
  const person = {
    ...this.state.persons[personIndex]
  };
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = persons;
  this.setState( {persons: persons} );

  }

deleteNameHandler = (personIndex) =>{
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons:persons})
}

togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
}

render(){
  const stylebtn = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid pink',
    padding: '8px',
    cursor: 'pointer',
    backgroundColor: '#E9D6CF'
  };

  let persons = null;

  if (this.state.showPersons){
    persons = (
      <div >
      { this.state.persons.map((person, index) =>{
        return <Person
         click={ () => this.deleteNameHandler(index)}
         name ={person.name}
         age={person.age}
         key={person.id}
         changed={(event)=> this.nameChangeHandler(event, person.id)}/>
      })}
  </div>

    );
   stylebtn.backgroundColor= '#E9E2E0';
  }
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>It's me, React App</p>
        <button
        style={stylebtn}
         onClick={this.togglePersonsHandler}>Toggle Persons</button>

         {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World'));
  }
}

export default App;
