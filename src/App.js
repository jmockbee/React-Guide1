import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// state and props are the only things that change the dom 
// use components try to avoid state 

class App extends Component {
  state ={
    persons : [
      { name: 'Jon', age: 489},
      { name: 'Isabella ', age: 14},
      { name: 'Amelie', age: 12},
    ],
    otherState:'some other value '
  }

switchNameHandler = (newName) =>
{
  //console.log('was clicked');
  this.setState({persons:
    [
      { name: newName , age: 489},
      { name: 'Isabella ', age: 14},
      { name: 'Amelie', age: 21},
    ]
  })
}

nameChangedHandler =(event) => {
  this.setState({persons:
    [
      { name: 'Jon' , age: 489},
      { name: event.target.value, age: 14},
      { name: 'Amelie', age: 21},
    ]
  })

}

render() {
    return (
      <div className="App">
      <h1>" Hi I am a react app"</h1> 
      <button onClick={this.switchNameHandler.bind (this, 'Jonathan')}> switchname </button>
      <Person  
      name={this.state.persons[0].name} 
      age ={this.state.persons[0].age}/>
      <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind (this, 'Jon!')}
       changed= {this.nameChangedHandler}> My Hobbies: Bicycling</Person>
      <Person  
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>

      </div>
    );
    //return React.createElement('div', { className:'App'}, React.createElement('h1',null, 'Hi , I\'m a react app!!'));
  }
}

export default App;
