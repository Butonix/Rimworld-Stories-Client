import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../App';
import {shallow, mount} from 'enzyme';

describe('<App />', () => {

    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<App />);
        });
    });
});
