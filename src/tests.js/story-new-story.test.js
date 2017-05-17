import React from 'react';
import ReactDOM from 'react-dom';
import {NewStory} from '../components/story-new-story';
import {shallow, mount} from 'enzyme';

describe('<NewStory />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<NewStory />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<NewStory currentDraft={{_id: '123456', status: 'draft'}} />);
        expect(wrapper.find('.par').exists()).toBe(true);
        expect(wrapper.find('.create-new-story').exists()).toBe(true);
        expect(wrapper.find('.save-draft').exists()).toBe(true);
        expect(wrapper.find('.toggle-auto-save').exists()).toBe(true);
        expect(wrapper.find('.delete').exists()).toBe(true);
        expect(wrapper.find('.modal-content').exists()).toBe(true);
        expect(wrapper.find('.small').exists()).toBe(true);
        expect(wrapper.find('.delete').exists()).toBe(true);
    });
});
