import React from 'react';
import ReactDOM from 'react-dom';
import {StoryStar} from '../components/story-star';
import {shallow, mount} from 'enzyme';

describe('<StoryStar />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoryStar />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoryStar currentStory={{stars: [{_id: '123456'}, {_id: '456789'}]}} currentUser={{id: '123456'}} />);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
        expect(wrapper.find('.par').exists()).toBe(true);
        expect(wrapper.find('.fa-3x').exists()).toBe(true);
    });
});
