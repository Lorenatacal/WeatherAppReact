import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
      return (
        <div className="Header">
          <header className="App-header">
            <img src= "https://img.clipartxtras.com/96da9eda759c08834fa44d63ab4098dd_weather-png-images-transparent-free-download-pngmartcom-weather-clipart-png_512-512.png" className="Header-logo" alt="logo" />
            <h1 className="App-title">{this.props.title}</h1>
          </header>
        </div>
      );
    }
  }
  
  export default Header;