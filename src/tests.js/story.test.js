import React from 'react';
import ReactDOM from 'react-dom';
import {Story} from '../components/story';
import {shallow, mount} from 'enzyme';
import StoryLayout from '../components/story-layout.js';
import StoryOptions from '../components/story-options.js';
import StoryConfirmDelete from '../components/story-confirm-delete.js';
import Comment from '../components/comment.js';

describe('<Story />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Story />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Story dispatch={() => {}} currentStory={{
            _id: '132456',
            comments: [{_id: 123456}, {_id: 456789}],
            stars: [{}, {}],
            author: {
                _id: '123456'
            },
            confirmDelete: true
        }} currentUser={{
            id: '123456'
        }} />);
        expect(wrapper.find(StoryLayout).exists()).toBe(true);
        expect(wrapper.find(StoryOptions).exists()).toBe(true);
        expect(wrapper.find(StoryConfirmDelete).exists()).toBe(true);
        expect(wrapper.find(Comment).exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
        expect(wrapper.find('h3').exists()).toBe(true);
        expect(wrapper.find('.fa-comments').exists()).toBe(true);
    });
});
