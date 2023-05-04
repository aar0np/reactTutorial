import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
        {/*<ParentComponent /> */}
        {/*<EventBind />*/}
        {/*<FunctionClick />*/}
        {/*<ClassClick />*/}
        {/*<Counter /> */}
        {/* <Message/> */}
        { /*<Greet name="Aaron" heroName="Dad">
          <p>
          Engineer, writes books, too.
          </p>
        </Greet>
        <Greet name="Coriene" heroName="Mom">
          <p>
          Owns and runs Healing House Energy Spa!
          </p>
          <button>Click me!</button>
        </Greet> */}
        {/*<Greet name="Emily" heroName="Daughter">
          <p>
          Needs to get schoolwork done.
          </p>
        </Greet>
        <Welcome name="Bruce" heroName="Batman" /> 
        <Welcome name="Tony" heroName="Iron Man" /> 
        <Welcome name="Steve" heroName="Captain America" /> 
        */ }
      </div>
    );
  }
}

export default App;
