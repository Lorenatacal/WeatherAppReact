import React, { Component } from 'react';
import axios from 'axios';
import Icon from './Icon';
import Weather from './Weather';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import MockAdapter from 'axios-mock-adapter';

Enzyme.configure({ adapter: new Adapter() });

test("Icon should show render rainIcon when the description includes the word rain", () => {
    // create description mocked property
    const description = "rain";
    // create a wrapper around the Icon componenent
    const wrapper = Enzyme.shallow(<Icon description={description} />);
    // take a shanpshot and compare result
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Icon should render snowIcon when the description includes the word snow)", () => {
    const description = "snow";
    const wrapper = Enzyme.shallow(<Icon description={description} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Icon should render sunIcon when the description includes the word sun", () => {
    const description="sun";
    const wrapper = Enzyme.shallow(<Icon description={description} />);
    expect(toJson(wrapper)).toMatchSnapshot();
})