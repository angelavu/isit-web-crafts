import React from 'react';
import ReactDOM from 'react-dom';
import HomeButtons from '../HomeButtons';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import '../../public/javascripts/tools/tiny-pub-sub.js';

describe('WebCrafts Home Buttons Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('loads component HomeButtons without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeButtons/>, div);
    });

    //Test 2: renders state of XXX after button click
    it('publishes clientMakeHtml event after button click', () => {
        const wrapper = shallow(<HomeButtons/>);
        let subscriptionCalled = false;
        $.subscribe('clientMakeHtml', (event, target) => {
            console.log(JSON.stringify(event, null, 4));
            console.log(target);
            expect(event.type).toBe('clientMakeHtml');
            expect(target.message).toBe('The user wants to makeHtml.');
            subscriptionCalled = true;
        });
        wrapper.find('#makeHtml').simulate('click');
        expect(subscriptionCalled).toBeTruthy();
    });

    it('publishes clientMakeImage event after button click', () => {
        const wrapper = shallow(<HomeButtons/>);
        let subscriptionCalled = false;
        $.subscribe('clientMakeImage', (event, target) => {
            console.log(JSON.stringify(event, null, 4));
            console.log(target);
            expect(event.type).toBe('clientMakeImage');
            expect(target.message).toBe('The user wants to makeImage.');
            subscriptionCalled = true;
        });
        wrapper.find('#makeImage').simulate('click');
        expect(subscriptionCalled).toBeTruthy();
    });
});
