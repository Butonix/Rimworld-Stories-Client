import React from 'react';
import ReactDOM from 'react-dom';
import {Profile} from '../components/profile';
import {shallow, mount} from 'enzyme';

describe('<Profile />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Profile />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Profile dispatch={() => {}} />);
        // check how to simulate url parameter
    });
});
