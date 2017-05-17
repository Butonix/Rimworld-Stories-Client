import React from 'react';
import ReactDOM from 'react-dom';
import {MyPublishedStores} from '../components/story-my-published';
import {shallow, mount} from 'enzyme';

describe('<MyPublishedStores />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<MyPublishedStores />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<MyPublishedStores stories={[{_id: '123456', status:'published'}, {_id: '456789', status:'published'}]} />);
        expect(wrapper.find('.fake-link').exists()).toBe(true);
        expect(wrapper.find('.list-item').exists()).toBe(true);
        expect(wrapper.find('.story-list-title').exists()).toBe(true);
        expect(wrapper.find('.list-stories-date').exists()).toBe(true);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
    });
});
