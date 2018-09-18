# Get Weather App

A project in React that is taking the user location and shows the weather in that location. The user will find out what is the description of the weather, the humidity, chances of rain, wind, temperature and he will also be able to change the temperature from Fahrenheit to Celsiuse.

## To start the project:

 * In order to receive the API data you need to obtain a key:

    - make an account on: https://openweathermap.org/api;
    - click API key;
    - give a name and click Generate;
    - install dotenv ```npm install --save dotenv```
    - create a new file .env in which you need to add a constant REACT_APP_WEATHER_API_KEY=YOUR KEY
    - import dotenv in index.js at top level


 * Install and start the app:

    - ```clone the repo```
    - ```cd into the folder```
    - ```run npm install```
    - ```npm start```

## Screenshots

Weather App before the API Call is made:

![WeatherApp](./screenshots/appWithoutData.png "WeattherApp")

Weather App after the API call is made:

![WeatherApp](./screenshots/appWithData.png "WeatherApp")

Weather App with the temperature in Fahrenheit:

![WeatherApp](./screenshots/changeCelsiuse.png "WeatherApp")

#### To see the game online: https://get-weather-app.herokuapp.com/

## Extra info:

All the routes are created at the top level component `<App />`
To style the project I have used Styled Components, the styling being secondary in importance to the features.
This was a good learning opportunity as I created the first React Project in which I am calling an API. I have used a Higher-Order Component and I have also tested my project for the first time .

#### Testing

 * To run the tests: ```click npm run test```

 ##### Some useful things I've learned:

console.log(wrapper.debug()); - print a wrapper react component in the terminal; while running Jest
git commit --amend - changes the git commit message

   