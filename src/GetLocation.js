import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';

class GetLocation extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : this.props.coords
        ? <table>
            <tbody>
                <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
            </tbody>
        </table>
        : <div>Getting the location data&hellip;</div>
    }    
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GetLocation);
