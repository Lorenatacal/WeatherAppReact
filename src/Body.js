import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';
import GeolocatedWeather from './GeolocatedWeather';

class Body extends React.Component {
    render () {
        return (
            <div>
                <GeolocatedWeather />
            </div>
        )
    }
}

export default Body;