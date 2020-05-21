import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>This is it</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">
          My Hobbies: Racing
        </Person>
        <Person name="Mike" age="36" />
      </div>
    );
    // return React.createElement('root');
  }
}

export default App;
