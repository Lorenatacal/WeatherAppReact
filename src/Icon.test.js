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
    const descriptionSun = "sun";
    const wrapper = Enzyme.shallow(<Icon description={descriptionSun} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Icon should render windIcon when the description includes the word wind", () => {
    const descriptionWind = "wind";
    const wrapper = Enzyme.shallow(<Icon description={descriptionWind} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Icon should render cloudIcon when the description includes the word cloud", () => {
    const description = "cloud";
    const wrapper = Enzyme.shallow(<Icon description={description} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Icon should render fogIcon when the description includes the word fog", () => {
    const fog = "fog";
    const wrapper = Enzyme.shallow(<Icon description={fog} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Icon should render mixtIcon when the description includes a different word", () => {
    const description = "";
    const wrapper = Enzyme.shallow(<Icon description={description} />);
    expect(toJson(wrapper)).toMatchSnapshot();
})