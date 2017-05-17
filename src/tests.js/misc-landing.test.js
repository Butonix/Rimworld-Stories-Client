import React from 'react';
import ReactDOM from 'react-dom';
import {Landing} from '../components/misc-landing';
import {shallow, mount} from 'enzyme';

describe('<Landing />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Landing />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Landing dispatch={() => {}} />);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
        expect(wrapper.find('.log-in').exists()).toBe(true);
        expect(wrapper.find('.landing-text').exists()).toBe(true);
        expect(wrapper.find('.landing-text').text()).not.toBe(null);
        expect(wrapper.find('.facebook').text()).toEqual(" Sign in with facebook");
    });
});
