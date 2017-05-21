import React from 'react';
import ReactDOM from 'react-dom';
import StoryNoneFound from '../components/story-none-found';
import {shallow, mount} from 'enzyme';

describe('<StoryNoneFound />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoryNoneFound />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoryNoneFound  />);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.story-preview').exists()).toBe(true);
        expect(wrapper.find('.story-preview-title').exists()).toBe(true);
    });
});
