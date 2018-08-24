import React, { Component } from 'react';
import axios from 'axios';
import { geolocated } from 'react-geolocated';
import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: false,
            name: '',
            country: '',
            description: '',
            clouds: 0,
            icon: '',
            tempCelsiuse: 0,
            tempFahrenheit: 0,
            minTempCelsiuse: 0,
            minTempFahrenheit: 0,
            maxTempCelsiuse: 0,
            maxTempFahrenheit: 0,
            wind: 0,
            humidity:0,
        };
    }

    handleClick = (event) => {
        this.setState({
            tempCelsiuse: this.state.tempFahrenheit,
            minTempCelsiuse: this.state.minTempFahrenheit,
            maxTempCelsiuse: this.state.maxTempFahrenheit,
        });
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
                this.setState({
                    response: true,
                    name: response.data.name,
                    country: response.data.sys.country,
                    description: response.data.weather[0].description,
                    tempCelsiuse: kelvinToCelsius(response.data.main.temp),
                    tempFahrenheit: kelvinToFahrenheit(response.data.main.temp),
                    minTempCelsiuse: kelvinToCelsius(response.data.main.temp_min),
                    minTempFahrenheit: kelvinToFahrenheit(response.data.main.temp_min),
                    maxTempCelsiuse: kelvinToCelsius(response.data.main.temp_max),
                    maxTempFahrenheit: kelvinToFahrenheit(response.data.main.temp_max),
                    clouds: response.data.clouds.all,
                    wind: response.data.wind.speed,
                    humidity: response.data.main.humidity,
                })
            })
        }
        return(  
            <div>
                <h2> Today in: {this.state.name}, {this.state.country}</h2> 
                <h3> We have {this.state.description}, with {this.state.clouds}% clouds</h3>
                <h3> The teperature is: {this.state.tempCelsiuse}°C, with minimum of {this.state.minTempCelsiuse}°C and a maximum of {this.state.maxTempCelsiuse}°C</h3>
                <h3> The wind is blowing with: {this.state.wind}m/s and we have a humidity of: {this.state.humidity}%</h3>
                <button>Change °C</button>
                <button onClick={this.handleClick}>Change °F</button>
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

