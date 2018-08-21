import React, { Component } from 'react';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import Weather from './Weather';

class FahrenheitButton extends React.Component {
    render() {
        return (
            <div>
                <button>Change °C</button>
                <button>Change °F</button>
            </div>
        )
    }
}

export default FahrenheitButton;