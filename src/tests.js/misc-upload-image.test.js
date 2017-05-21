import React from 'react';
import ReactDOM from 'react-dom';
import {UploadImage} from '../components/misc-upload-image';
import {shallow, mount} from 'enzyme';

describe('<UploadImage />', () => {
    it('renders without crashing', () => {
        it('renders without crashing', () => {
            shallow(<UploadImage />);
        });
    });

    it('Renders the right divs initially', () => {
        const wrapper = shallow(<UploadImage dispatch={() => {}} />);
        expect(wrapper.find('Dropzone').exists()).toBe(true);
        expect(wrapper.find('.dropzone').exists()).toBe(true);
        expect(wrapper.find('.small').exists()).toBe(true);
        expect(wrapper.find('.small').text()).not.toBe(null);
    });
});
