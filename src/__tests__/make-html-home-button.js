import React from 'react';
import ReactDOM from 'react-dom';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../public/javascripts/tools/tiny-pub-sub.js';
configure({adapter: new Adapter()});
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');

describe('WebCrafts MakeHtmlHomeButton Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('publishes home button event after button click', () => {
        const wrapper = shallow(<MakeHtmlHomeButton/>);
        let subscriptionCalled = false;
        $.subscribe('home', (event, target) => {
            console.log(JSON.stringify(event, null, 4));
            console.log(target);
            expect(event.type).toBe('home');
            expect(target.message).toBe('The user wants to go home.');
            subscriptionCalled = true;
        });
        wrapper.find('#home').simulate('click');
        expect(subscriptionCalled).toBeTruthy();
    });

    it('renders p tag with home button instructions', () => {
        const wrapper = shallow(<MakeHtmlHomeButton />);
        const h1tag = <p>Select button to return to the home page.</p>;
        elfDebugEnzyme.getLast(wrapper, 'p', true);
        expect(wrapper.contains(h1tag)).toEqual(true);
    });
});
