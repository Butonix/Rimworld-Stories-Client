import React from 'react';
import ReactDOM from 'react-dom';
import StoryLayout from '../components/story-layout';
import {shallow, mount} from 'enzyme';
import StoryAuthorInfoBig from '../components/story-author-info-big.js';

describe('<StoryLayout />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoryLayout />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoryLayout story={{
            _id: '123456',
            screenshot: 'http://test',
            story: 'this is a test',
            comments: [{_id: 'comment1'}, {_id: 'comment2'}],
            stars: [{_id: 'comment1'}, {_id: 'comment2'}],
            author: {
                _id: '123456'
            }
        }} />);
        expect(wrapper.find('.story-preview-title').exists()).toBe(true);
        expect(wrapper.find('.story-screenshot-container').exists()).toBe(true);
        expect(wrapper.find('.story-content').exists()).toBe(true);
        expect(wrapper.find('.story-author-name').exists()).toBe(true);
        expect(wrapper.find(StoryAuthorInfoBig).exists()).toBe(true);
    });
});
