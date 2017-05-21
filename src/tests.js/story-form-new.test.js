import React from 'react';
import ReactDOM from 'react-dom';
import {NewStoryForm} from '../components/story-form-new';
import {shallow, mount} from 'enzyme';

describe('<NewStoryForm />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<NewStoryForm />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<NewStoryForm currentDraft={{_id: '123'}}/>);
        expect(wrapper.find('.title-input').exists()).toBe(true);
        expect(wrapper.find('.story-textarea').exists()).toBe(true);
        expect(wrapper.find('.submit').exists()).toBe(true);
        expect(wrapper.find('.submit').text()).toBe(' Publish');
    });
});
