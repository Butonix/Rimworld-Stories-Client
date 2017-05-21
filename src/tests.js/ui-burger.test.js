import React from 'react';
import ReactDOM from 'react-dom';
import {Burger} from '../components/ui-burger';
import {shallow, mount} from 'enzyme';
import {Link} from 'react-router-dom';

describe('<Burger />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Burger />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Burger currentUser={{
            _id: '132456'
        }} />);
        expect(wrapper.find(Link).exists()).toBe(true);
        expect(wrapper.find('.burger-button').exists()).toBe(true);
        expect(wrapper.find('.burger').exists()).toBe(true);
    });
});
