import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, assert} from 'enzyme';
import {CommentOptions} from '../components/comment-options.js';
import {Link} from 'react-router-dom';

describe('<CommentOptions />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<CommentOptions />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<CommentOptions  />);
        expect(wrapper.type()).toBe('div');
        expect(wrapper.find('.delete').exists()).toBe(true);
        expect(wrapper.find('.modal').exists()).toBe(true);
    });
});
