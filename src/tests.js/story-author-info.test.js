import React from 'react';
import ReactDOM from 'react-dom';
import StoryAuthorInfo from '../components/story-author-info';
import {shallow, mount} from 'enzyme';

describe('<StoryAuthorInfo />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoryAuthorInfo />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoryAuthorInfo author={{avatarUrl: 'http://test'}} nbViews={100} nbStars={5} nbComments={10} datePosted={'10/10/10'} />);
        expect(wrapper.find('.profile-avatar').exists()).toBe(true);
        expect(wrapper.find('.date').exists()).toBe(true);
        expect(wrapper.find('.date').text()).toBe('10/10/2010 - 00:00');
        expect(wrapper.find('.story-preview-info').exists()).toBe(true);
        expect(wrapper.find('.fa-star').exists()).toBe(true);
        expect(wrapper.find('.fa-eye').exists()).toBe(true);
        expect(wrapper.find('.info-separator').exists()).toBe(true);
        expect(wrapper.find('.fa-comments').exists()).toBe(true);
    });
});
