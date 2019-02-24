/* eslint no-undef: "off"*/
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
 const [personsState, setPersonsState] = useState({
   persons: [
     { name: 'Marina', age: 28 },
     { name: 'Denis', age: 24 },
     { name: 'Victoria', age: 26},
   ],
 });

 const [otherState, setOtherState] = useState('some other value');

 console.log(personsState, otherState);
 
 const switchNameHandler = () => {
   // consle.log('Was clicked!');
   setPersonsState({
     persons: [
       { name: 'Maryna', age: 28 },
       { name: 'Denis', age: 25 },
       { name: 'Victoria', age: 26},
     ],
   })
 }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>It's me, React App</p>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My Hobbies: Dancing </Person>
        <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World'));
  }

export default app;
