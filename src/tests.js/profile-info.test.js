import React from 'react';
import ReactDOM from 'react-dom';
import {ProfileInfo} from '../components/profile-info';
import {shallow, mount} from 'enzyme';

describe('<UploadImage />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<ProfileInfo />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<ProfileInfo info={{username: 'test'}} />);
        expect(wrapper.find('h2').exists()).toBe(true);
        expect(wrapper.find('h2').text()).toBe('test');
        expect(wrapper.find('.button').exists()).toBe(true);
        expect(wrapper.find('.button').text()).toBe(' Log out');
    });
});
