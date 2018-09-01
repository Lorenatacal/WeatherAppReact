import Weather from './Weather';
import { geolocated } from 'react-geolocated';

export default geolocated(
    {
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    }
)(Weather);