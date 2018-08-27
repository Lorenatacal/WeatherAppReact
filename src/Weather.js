import React, { Component } from 'react';
import axios from 'axios';
import { geolocated } from 'react-geolocated';
import kelvinToCelsius from 'kelvin-to-celsius';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import styled from 'styled-components';

const WeatherContainer = styled.div`
    border-radius: 20px;
    padding: 0.25em;
    margin: 4em 15em;
    border: 1px solid lightgrey;
    align: center;
    text-align: center;
    font-family: arial;
`;

const StyledButton = styled.button`
    border-radius: 5px;
    padding: 0.25em;
    margin: 2em;
    border: 0.5px, #007bff;
    background: #007bff;
    color: white;
    text-align: center;
    font-size: 1.2rem;
`
class Icon extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            rainIcon: "http://icons.iconarchive.com/icons/large-icons/large-weather/256/rain-icon.png",
            snowIcon: "http://www.free-icons-download.net/images/blue-snow-icon-38706.png",
            sunIcon: "http://www.pngmart.com/files/3/Sun-PNG-Photos.png",
            windIcon: "http://moziru.com/images/wind-clipart-weather-symbol-11.png",
            cloudIcon: "https://vignette.wikia.nocookie.net/farmville/images/5/57/Puffy_Cloud-icon.png/revision/latest?cb=20121010151231",
            fogIcon: "http://icongal.com/gallery/download/43079/256/png",
        };
    }
    render() {
        if("is raining".includes("rain")) {
            return (
                <div>
                    <img src={this.state.rainIcon} />
                </div>
            )
        }
    }
}

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
            tempCelsiuseI: 0,
            tempFahrenheit: 0,
            minTempCelsiuse: 0,
            minTempFahrenheit: 0,
            maxTempCelsiuse: 0,
            maxTempFahrenheit: 0,
            wind: 0,
            humidity:0,
            showCelsiuse: true,
        };
    }

    handleClickFahrenheit = () => {
        this.setState({
            showCelsiuse: false,
        });
    }

    handleClickCelsiuse = () => {
        this.setState({
            showCelsiuse: true,
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
                    <WeatherContainer>
                        <h2> Today in: {this.state.name}, {this.state.country}</h2>
                        <Icon /> 
                        <p> We have {this.state.description}, with {this.state.clouds}% clouds</p>
                        {
                            this.state.showCelsiuse ?  
                                <p>The temperature is: {this.state.tempCelsiuse}°C, with minimum of {this.state.minTempCelsiuse}°C and a maximum of {this.state.maxTempCelsiuse}°C</p> : 
                                <p> The temperature is: {this.state.tempFahrenheit}°F, with minimum of {this.state.minTempFahrenheit}°F and a maximum of {this.state.maxTempFahrenheit}°F</p>
                        }
                        <p> The wind is blowing with: {this.state.wind}m/s and we have a humidity of: {this.state.humidity}%</p>
                        <StyledButton onClick={this.handleClickFahrenheit}>Change °F</StyledButton>
                        <StyledButton onClick={this.handleClickCelsiuse}>Change °C</StyledButton>
                    </WeatherContainer>
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

