import React, { Component } from 'react';
import axios from 'axios';
import { geolocated } from 'react-geolocated';

class Weather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.coords){
            axios.get('https://api.openweathermap.org/data/2.5/weather?', {
                params: {
                    lat: this.props.coords.latitude,
                    lon: this.props.coords.longitude,
                    appid: process.env.REACT_APP_WEATHER_API_KEY,
                }
            })
            .then(function (response) {
                console.log(response)
            })
        }
        return(  
            <div>
                <h2> The weather today in:</h2> 
                <h3> Today is going to be (main weather)  (main description)</h3>
                <h3> (main icon) </h3>
                <h3> The temperature is: </h3>
                <h3> The wind is blowing with: </h3>
                <h3> and we have a humidity of: </h3>
            </div>
        )
    }
}

export default geolocated(
    {
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    }
)(Weather);

