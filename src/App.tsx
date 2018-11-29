import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Description from './Description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className='App-logo' alt="logo" />
          <Header name="Cristian Aleman"/>
        </header>
        <Description countBy={2} />
      </div>
    );
  }
}

export default App;
