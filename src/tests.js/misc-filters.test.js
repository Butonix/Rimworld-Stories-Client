import React from 'react';
import ReactDOM from 'react-dom';
import {Filters} from '../components/misc-filters';
import {shallow, mount} from 'enzyme';

describe('<Filters />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<Filters />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<Filters filters={{type: 'Most recent'}} />);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.inside-cont').exists()).toBe(true);
        expect(wrapper.find('.active').exists()).toBe(true);
        expect(wrapper.find('.active').text()).toEqual('Most recent');
    });
});
