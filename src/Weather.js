import React, { Component } from 'react';
import axios from 'axios';
import { geolocated } from 'react-geolocated';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: false,
            name: '',
            country: '',
            description: '',
            icon: '',
            temperature: 0,
            wind: 0,
            humidity:0,
        }
    }

    render() {
        if (this.props.coords && !this.state.response){
            axios.get('https://api.openweathermap.org/data/2.5/weather?', {
                params: {
                    lat: this.props.coords.latitude,
                    lon: this.props.coords.longitude,
                    appid: process.env.REACT_APP_WEATHER_API_KEY,
                }
            })
            .then((response) => {
                console.log(response)
                this.setState({
                    response: true,
                    name: response.data.name,
                })
            })
        }
        return(  
            <div>
                <h2> The weather today in: {this.state.name}, {this.state.country}</h2> 
                <h3> Today is going to be {this.state.description}</h3>
                <h3> {this.state.icon} </h3>
                <h3> The temperature is: {this.state.temperature} </h3>
                <h3> The wind is blowing with: {this.state.wind} </h3>
                <h3> and we have a humidity of: {this.state.humidity}</h3>
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

