import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, assert} from 'enzyme';
import CommentAuthor from '../components/comment-author.js';
import {Link} from 'react-router-dom';

describe('<CommentAuthor />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<CommentAuthor />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<CommentAuthor id="123" avatar="http://avatar.com/avatar.jpg" />);
        expect(wrapper.type()).toBe(Link);
        expect(wrapper.find('.comment-author').exists()).toBe(true);
        expect(wrapper.find('.comment').exists()).toBe(true);
    });
});
