import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from '../components/misc-login';
import {shallow, mount} from 'enzyme';

describe('<Login />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Login />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Login dispatch={() => {}} loginShow={true} />);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
        expect(wrapper.find('.log-in').exists()).toBe(true);
        expect(wrapper.find('.form-element').exists()).toBe(true);
        expect(wrapper.find('.or').exists()).toBe(true);
        expect(wrapper.find('.facebook').exists()).toBe(true);
        expect(wrapper.find('.facebook').text()).toEqual(" Sign in with facebook");
    });
});
