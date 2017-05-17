import React from 'react';
import ReactDOM from 'react-dom';
import {StoryConfirmDelete} from '../components/story-confirm-delete';
import {shallow, mount} from 'enzyme';

describe('<StoryConfirmDelete />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoryConfirmDelete />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoryConfirmDelete />);
        expect(wrapper.find('.button').exists()).toBe(true);
        expect(wrapper.find('.delete').exists()).toBe(true);
        expect(wrapper.find('.confirm-delete').exists()).toBe(true);
    });
});
