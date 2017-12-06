import React from 'react';
import ReactDOM from 'react-dom';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../public/javascripts/tools/tiny-pub-sub.js';

configure({adapter: new Adapter()});


describe('WebCrafts MakeHtmlHomeButton Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('loads component MakeHtmlHomeButton without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlHomeButton/>, div);
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
});
