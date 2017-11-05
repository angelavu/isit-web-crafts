import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome';
import MakeHtml from './MakeHtmlHomeButton';

let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml/>, homeDiv);
}

function reactHome() {
    document.getElementById('pageLoad').innerHTML = '';
    home();
}

function home() {
    ReactDOM.render(<ReactHome/>, homeDiv);
}

$(document).ready(function () {
    homeDiv = document.getElementById('home');
    $.subscribe('reactMakeHtml', reactMakeHtml);
    $.subscribe('home', reactHome);
    home();
});
