import React, { Component } from 'react';
import Header from './Header';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test("Header should render correctly", () => {
    const wrapper = Enzyme.shallow(<Header />); //create a wrapper with the rendered component
    expect(wrapper).toMatchSnapshot();
});
