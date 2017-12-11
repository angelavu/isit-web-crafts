import React from 'react';
import ReactDOM from 'react-dom';
import MakeImageButtons from '../MakeImageButtons';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');

describe('WebCrafts MakeImageButtons Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('renders component MakeImageButtons p tag', () => {
        const wrapper = shallow(<MakeImageButtons/>);
        const ptag = <p>This is the MakeImageButton component.</p>;
        elfDebugEnzyme.getLast(wrapper, 'p', true);
        expect(wrapper.contains(ptag)).toEqual(true);
    });
});
