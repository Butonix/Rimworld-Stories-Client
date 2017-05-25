import React from 'react';
import ReactDOM from 'react-dom';
import {StoriesList} from '../components/story-home-list';
import {shallow, mount} from 'enzyme';
import Loader from '../components/misc-loader';
import Filters from '../components/misc-filters';

describe('<StoriesList />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<StoriesList />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<StoriesList dispatch={() => {}}
        currentUser={{_id: '591982ed367e8e27383d392f'}}
        landingList={{list: [{_id: '123', author:{_id: '591982ed367e8e27383d392f'}}, 
        {_id: '456', author:{_id: '591982ed367e8e27383d392f'}}]}} />);
        expect(wrapper.find(Loader).exists()).toBe(true);
        expect(wrapper.find(Filters).exists()).toBe(true);
        expect(wrapper.find('.listStories').exists()).toBe(true);
    });
});
