import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, assert} from 'enzyme';
import {CommentConfirmDelete} from '../components/comment-confirm-delete.js';
import {Link} from 'react-router-dom';

describe('<CommentConfirmDelete />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<CommentConfirmDelete />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<CommentConfirmDelete id="123" avatar="http://avatar.com/avatar.jpg" />);
        expect(wrapper.hasClass('confirm-delete')).toEqual(true);
        expect(wrapper.type()).toBe('div');
        expect(wrapper.find('.delete').exists()).toBe(true);
        expect(wrapper.find('.button').exists()).toBe(true);
    });
});
