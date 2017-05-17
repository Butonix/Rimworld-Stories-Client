import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, assert} from 'enzyme';
import {NewComment} from '../components/comment-new.js';
import {Link} from 'react-router-dom';

describe('<NewComment />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<NewComment />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<NewComment  />);
        expect(wrapper.hasClass('container')).toEqual(true);
        expect(wrapper.type()).toBe('div');
        expect(wrapper.find('.new-comment-textarea').exists()).toBe(true);
        expect(wrapper.find('.button').exists()).toBe(true);
        expect(wrapper.find('.submit').exists()).toBe(true);
    });
});
