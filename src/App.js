import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Binary from './Components/Binary'
import AppRouter from './router';
class App extends Component {
  render() {
    return (
      <div id="app">
        <AppRouter/>
      </div>
    );
  }
}

export default App;
