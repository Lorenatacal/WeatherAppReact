import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';

class Body extends React.Component {
    render () {
        return (
            <div>
                <Weather />
            </div>
        )
    }
}

export default Body;