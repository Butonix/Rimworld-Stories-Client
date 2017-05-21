import React from 'react';
import ReactDOM from 'react-dom';
import {UpdateUsername} from '../components/profile-update-username';
import {shallow, mount} from 'enzyme';

describe('<UpdateUsername />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<UpdateUsername />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<UpdateUsername />);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
        expect(wrapper.find('.change-username').exists()).toBe(true);
        expect(wrapper.find('.button').exists()).toBe(true);
    });
});
