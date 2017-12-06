import React from 'react';
import ReactDOM from 'react-dom';
import MakeImage from '../MakeImage';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MakeImageButtons from '../MakeImageButtons';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');
configure({adapter: new Adapter()});


describe('WebCrafts MakeImage Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('expects MakeHtmlHomeButton in MakeImage', () => {
        const wrapper = shallow(<MakeImage/>);
        const component = <MakeHtmlHomeButton/>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(component)).toEqual(true);
    });

    it('expects MakeImageButtons in MakeImage', () => {
        const wrapper = shallow(<MakeImage/>);
        const component = <MakeImageButtons/>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(component)).toEqual(true);
    });

    //Added for JestMocks
    it('renders default value of H1 tag', () => {
        const wrapper = shallow(<MakeImage />);
        const h1tag = <h1>Pix Picker</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(h1tag)).toEqual(true);
    });
});
