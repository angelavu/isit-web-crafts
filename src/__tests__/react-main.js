import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../Main';

describe('WebCrafts react-main Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('loads component Main without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Main/>, div);
    });

});