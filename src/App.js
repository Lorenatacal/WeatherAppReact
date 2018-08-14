import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import GetLocation from './GetLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GetLocation />
      </div>
    );
  }
}

export default App;
