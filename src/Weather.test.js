import React, { Component } from 'react';
import Weather from './Weather';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test("Weather should render correctly", () => {
    const wrapper = Enzyme.shallow(<Weather />)
    expect(toJson(wrapper)).toMatchSanpshot();
})