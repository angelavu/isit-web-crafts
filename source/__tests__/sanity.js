import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../Main';
import HomeButtons from '../HomeButtons';
import MakeHtml from '../MakeHtml';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MakeImage from '../MakeImage';
import MakeImageButtons from '../MakeImageButtons';

describe('WebCrafts Sanity Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('Main renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Main/>, div);
    });

    it('HomeButtons renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeButtons/>, div);
    });

    // ===== Start JestMocks =====

    it('tests if we can load MakeHtml', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtml />, div);
    });

    it('tests if we can load MakeHtml DropDowns', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlDropDowns />, div);
    });

    it('tests if we can load MakeHtml HomeButton', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlHomeButton />, div);
    });

    it('tests if we can load MakeImage', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeImage />, div);
    });

    it('tests if we can load MakeImage Buttons', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeImageButtons />, div);
    });
});
