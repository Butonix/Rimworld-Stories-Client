import React from 'react';
import ReactDOM from 'react-dom';
import {StoryThumb} from '../components/story-thumb';
import {shallow, mount} from 'enzyme';
import StoryAuthorInfo from '../components/story-author-info.js';

describe('<StoryThumb />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoryThumb />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoryThumb story={{
            title: 'test title',
            story: 'this is a test story',
            comments: [{}, {}],
            stars: [{}, {}]
        }} />);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
        expect(wrapper.find('.story-preview-title').exists()).toBe(true);
        expect(wrapper.find('.story-thumbnail-container').exists()).toBe(true);
        expect(wrapper.find('.story-thumbnail').exists()).toBe(true);
        expect(wrapper.find('.par').exists()).toBe(true);
        expect(wrapper.find(StoryAuthorInfo).exists()).toBe(true);
    });
});
