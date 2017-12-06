import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from '../ReactHome';

describe('WebCrafts react-main Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('loads component ReactHome without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReactHome/>, div);
    });

});