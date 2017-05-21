import React from 'react';
import ReactDOM from 'react-dom';
import StoryAuthorInfo from '../components/story-author-info-big';
import {shallow, mount} from 'enzyme';

describe('<StoryAuthorInfo />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoryAuthorInfo />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoryAuthorInfo author={{avatarUrl: 'http://test'}} nbViews={100} nbStars={5} />);
        expect(wrapper.find('.story-avatar').exists()).toBe(true);
        expect(wrapper.find('.date').exists()).toBe(true);
        expect(wrapper.find('.comment-top-bar').exists()).toBe(true);
        expect(wrapper.find('.comment-author').exists()).toBe(true);
        expect(wrapper.find('.fa-eye').exists()).toBe(true);
        expect(wrapper.find('.info-separator').exists()).toBe(true);
    });
});
