import React, { Component } from 'react';
import axios from 'axios';
import { geolocated } from 'react-geolocated';
import kelvinToCelsius from 'kelvin-to-celsius';

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
            temperature: 0,
            minTemp: 0,
            maxTemp: 0,
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
                    country: response.data.sys.country,
                    description: response.data.weather[0].description,
                    temperature: kelvinToCelsius(response.data.main.temp),
                    minTemp: kelvinToCelsius(response.data.main.temp_min),
                    maxTemp: kelvinToCelsius(response.data.main.temp_max),
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
                <h3> The teperature is: {this.state.temperature}°C, with minimum of {this.state.minTemp}°C and a maximum of {this.state.maxTemp}°C</h3>
                <h3> The wind is blowing with: {this.state.wind}m/s and we have a humidity of: {this.state.humidity}%</h3>
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

