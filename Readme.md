### Using dotenv:
    - install dotevn using npm install dotenv --save
    - create a .env file in the root
    - save in this folder your API key -> example: REACT_APP_WEATHER_API_KEY=myAPIKey
    - import dotenv in index.js -> example: import dotenv from 'dotenv';
    - add the .env file in .gitignore file
    - use the environment variable using process.env.myVariableName -> example appid: process.env.REACT_APP_WEATHER_API_KEY