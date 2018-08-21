import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';
import FahrenheitButton from './FahrenheitButton';

class Body extends React.Component {
    render () {
        return (
            <div>
                <Weather />
                <FahrenheitButton />
            </div>
        )
    }
}

export default Body;