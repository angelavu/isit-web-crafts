import React from 'react';
import ReactDOM from 'react-dom';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');
configure({adapter: new Adapter()});

describe('WebCrafts MakeHtmlDropDowns Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('expects a dropdown menu', () => {
        const wrapper = shallow(<MakeHtmlDropDowns/>);
        elfDebugEnzyme.getAll(wrapper);
        const dropdown = wrapper.find('DropDownMenu');
        console.log(dropdown);
        expect(dropdown.length).toBe(2);
    });

    it('renders component MakeHtmlDropDowns p tag', () => {
        const wrapper = shallow(<MakeHtmlDropDowns/>);
        const ptag = <p>This is the MakeHtmlDropDowns component.</p>;
        elfDebugEnzyme.getLast(wrapper, 'p', true);
        expect(wrapper.contains(ptag)).toEqual(true);
    });

    it('renders default value of H1 tag', () => {
        const wrapper = shallow(<MakeHtmlDropDowns/>);
        const h1tag = <h1>Render Markdown as HTML</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(h1tag)).toEqual(true);
    });

});
