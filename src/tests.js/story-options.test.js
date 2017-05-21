import React from 'react';
import ReactDOM from 'react-dom';
import {StoryOptions} from '../components/story-options';
import {shallow, mount} from 'enzyme';

describe('<StoryOptions />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoryOptions />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoryOptions currentStory={{_id: '123456'}} />);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
        expect(wrapper.find('.delete').exists()).toBe(true);
        expect(wrapper.find('.modal').exists()).toBe(true);
    });
});
