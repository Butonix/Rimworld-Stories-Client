import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, assert} from 'enzyme';
import {Comment} from '../components/comment.js';
import {Link} from 'react-router-dom';

describe('<Comment />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Comment />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Comment comm={{author: 'test user', comment: 'test comment'}} currentUser={{id: '1234'}} />);
        expect(wrapper.type()).toBe('div');
        expect(wrapper.find('.comment').exists()).toBe(true);
        expect(wrapper.find('.comment-top-bar').exists()).toBe(true);
        expect(wrapper.find('.comment-right-box').exists()).toBe(true);
        expect(wrapper.find('.comment-options').exists()).toBe(true);
    });
});
