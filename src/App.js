import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>" Hi I am a react app"</h1> 
      <Person />
      <Person />
      <Person />

      </div>
    );
    //return React.createElement('div', { className:'App'}, React.createElement('h1',null, 'Hi , I\'m a react app!!'));
  }
}

export default App;
