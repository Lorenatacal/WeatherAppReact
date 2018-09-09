import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import MockAdapter from 'axios-mock-adapter';


Enzyme.configure({ adapter: new Adapter() });

function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
}

test("Weather should render correctly without data", () => {
    const wrapper = Enzyme.shallow(<Weather />)
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Weather should render correctly with data", async () => {
    //we re returning a fake response
    const mockedResponse = {
        name: "London",
        sys: {
            country: "UK",
        },
        weather: [{
            description: "sunny",
        }],
        main: {
            temp: 296,
            temp_min: 293.15,
            temp_max: 296,
            humidity: 10,
        },
        clouds: {
            all: 10,
        },
        wind: {
            speed: 4.1,
        },
    };
    const mock = new MockAdapter(axios);
    mock
        .onGet('https://api.openweathermap.org/data/2.5/weather?')
        .reply(200, mockedResponse);
    // we are mocking the props object
    const coordinates = {
        latitude: 51.48827190000001, 
        longitude: -0.059787999999999994
    }; 
    const wrapper = Enzyme.shallow(<Weather coords={coordinates} />)
    await flushPromises();
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("fahrenheitButton should change the temperature from Celsiuse to Fahrenhite", async () => {
    const mockedResponse = {
        name: "London",
        sys: {
            country: "UK",
        },
        weather: [{
            description: "sunny",
        }],
        main: {
            temp: 296.15,
            temp_min: 293.15,
            temp_max: 296.15,
            humidity: 10,
        },
        clouds: {
            all: 10,
        },
        wind: {
            speed: 4.1,
        },
    };
    const mock = new MockAdapter(axios);
    mock
        .onGet('https://api.openweathermap.org/data/2.5/weather?')
        .reply(200, mockedResponse);

    const coordinates = {
        latitude: 51.48827190000001, 
        longitude: -0.059787999999999994
    }; 

    const wrapper = Enzyme.shallow(<Weather coords={coordinates} />)
    await flushPromises();
    const button = wrapper.find('[data-name="fahrenheitButton"]');
    button.simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();  
});

test("celsiuseButton should change the temperature from Fahrenheit to Celsiuse", async () => {
    const mockedResponse = {
        name: "London",
        sys: {
            country: "UK",
        },
        weather: [{
            description: "sunny",
        }],
        main: {
            temp: 296.15,
            temp_min: 293.15,
            temp_max: 296.15,
            humidity: 10,
        },
        clouds: {
            all: 10,
        },
        wind: {
            speed: 4.1,
        },
    };
    const mock = new MockAdapter(axios);
    mock
        .onGet('https://api.openweathermap.org/data/2.5/weather?')
        .reply(200, mockedResponse);

    const coordinates = {
        latitude: 51.48827190000001, 
        longitude: -0.059787999999999994
    }; 

const wrapper = Enzyme.shallow(<Weather coords={coordinates} />);
await flushPromises();
const celsiuseButton = wrapper.find('[data-name="celsiuseButton"]');
celsiuseButton.simulate('click');
expect(toJson(wrapper)).toMatchSnapshot();
  
});