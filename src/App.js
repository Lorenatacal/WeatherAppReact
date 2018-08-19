import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Local Weather" />
        <Body />
      </div>
    );
  }
}

export default App;
