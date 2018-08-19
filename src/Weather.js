import React, { Component } from 'react';
import axios from 'axios';
import { geolocated } from 'react-geolocated';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 0,
            long: 0,
        }
    }

    render() {
        console.log(process.env, 'process');
        if (this.props.coords){
            axios.get('https://api.openweathermap.org/data/2.5/weather?', {
                params: {
                    lat: this.props.coords.latitude,
                    lon: this.props.coords.longitude,
                    appid: process.env.REACT_APP_WEATHER_API_KEY,
                }
            })
            .then(function (response) {
                console.log(response, "Api");
            })
        }
        return(  
            <div>
                <h2> The weather today:</h2>   
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

