import React, { Component } from 'react';
import Body from './Body';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { ENETRESET } from 'constants';

Enzyme.configure({ adapter: new Adapter() });

test("Body should render correctly", () => {
    const wrapper = Enzyme.shallow(<Body />)
    expect(toJson(wrapper)).toMatchSnapshot();
});