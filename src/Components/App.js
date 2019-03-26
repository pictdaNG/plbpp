import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to PLBPP ( NON GraphQL )
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;