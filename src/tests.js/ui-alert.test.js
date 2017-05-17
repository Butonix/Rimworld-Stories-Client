import React from 'react';
import ReactDOM from 'react-dom';
import {Alert} from '../components/ui-alert';
import {shallow, mount} from 'enzyme';

describe('<Alert />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Alert />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Alert alert={{type: 'APIerror', message:'this is a test message'}} />);
        expect(wrapper.type()).toBe('div');
        expect(wrapper.text()).toBe('this is a test message');
    });
});
