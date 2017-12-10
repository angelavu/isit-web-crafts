import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MenuItem from 'material-ui/MenuItem';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-html-drop-downs');

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

    it('gets drop down value', () => {
        const wrapper = shallow(<MakeHtmlDropDowns />);
        //elfDebugEnzyme.getAll(wrapper, true);
        elfDebugEnzyme.getLast(wrapper, 'MenuItem', true);
        const code = <MenuItem primaryText='/home/charlie/Git/CloudNotes/Isit320/'/>;
        expect(wrapper.containsMatchingElement(code)).toBe(true);
    });

    it('renders button click message for last pre tag', () => {
        const wrapper = shallow(<MakeHtmlDropDowns />);
        wrapper.find('#generate').simulate('click');
        elfDebugEnzyme.getLast(wrapper, 'pre', true);
        const paragraphData = wrapper.find('pre').last().debug();
        expect(paragraphData).toContain('/home/charlie/Git/CloudNotes/tips');
    });

    // Add a fourth test that proves that the page has a an element that matches this tag:
    //<pre id="configSummary" />
    // <<<<<<<<<<<<<<<<<<<<<<
    //The body of the test should contains four lines, the last two of which would look like this:
    //elfDebugEnzyme.getLast(wrapper, 'pre', true);
    //expect(wrapper.containsMatchingElement(code)).toBe(true);
    //The test should not include a button click. In other words, we are proving the tag exists before the button is clicked.


});
