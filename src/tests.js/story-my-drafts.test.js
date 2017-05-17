import React from 'react';
import ReactDOM from 'react-dom';
import {MyDrafts} from '../components/story-my-drafts';
import {shallow, mount} from 'enzyme';

describe('<MyDrafts />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<MyDrafts />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<MyDrafts stories={[{_id: '123456', status:'draft'}, {_id: '456789', status:'draft'}]} />);
        expect(wrapper.find('.fake-link').exists()).toBe(true);
        expect(wrapper.find('.list-item').exists()).toBe(true);
        expect(wrapper.find('.story-list-title').exists()).toBe(true);
        expect(wrapper.find('.list-stories-date').exists()).toBe(true);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
    });
});
