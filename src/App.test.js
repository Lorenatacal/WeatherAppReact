import React, { Component } from 'react';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test("App should render correctly", () => {
    const wrapper = Enzyme.shallow(<App />)
    expect(toJson(wrapper)).toMatchSnapshot();
});