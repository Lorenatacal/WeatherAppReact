import React, { Component } from 'react';
import './Icon.css';

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
            mixtIcon: "https://images.onlinelabels.com/images/clip-art/Anonymous/Anonymous_simple_weather_symbols_13.png",
        };
    }
    render() {
        if(this.props.description.includes("rain")) {
            return (
                <div>
                    <img src={this.state.rainIcon} className="Icon-logo"/>
                </div>
            )
        } else if(this.props.description.includes("snow")) {
            return (
                <div>
                    <img src={this.state.snowIcon} className="Icon-logo"/>
                </div>
            )
        } else if(this.props.description.includes("sun")) {
            return (
                <div>
                    <img src={this.state.sunIcon} className="Icon-logo"/>
                </div>
            )
        } else if(this.props.description.includes("wind")) {
            return (
                <div>
                    <img src={this.state.windIcon} className="Icon-logo"/>
                </div>
            )
        } else if(this.props.description.includes("clouds")) {
            return (
                <div>
                    <img src={this.state.cloudIcon} className="Icon-logo"/>
                </div>
            )
        } else if(this.props.description.includes("fog")) {
            return (
                <div>
                    <img src={this.state.fogIcon} className="Icon-logo"/>
                </div>
            )
        } else {
            return (
                <div>
                    <img src={this.state.mixtIcon} className="Icon-logo"/>
                </div>
            )
        }
    }
}

export default Icon;