import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from '../components/ui-header';
import {shallow, mount} from 'enzyme';
import {Link} from 'react-router-dom';
import Burger from '../components/ui-burger.js';

describe('<Header />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Header />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Header currentUser={{id: '123456'}} />);
        expect(wrapper.find(Link).exists()).toBe(true);
        expect(wrapper.find(Burger).exists()).toBe(true);
        expect(wrapper.find('.fa-bars').exists()).toBe(true);
        expect(wrapper.find('.burger-container').exists()).toBe(true);
        expect(wrapper.find('.header-login').exists()).toBe(true);
    });
});
