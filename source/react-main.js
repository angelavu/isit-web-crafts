import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome';
import MakeHtml from './MakeHtml'; //import MakeHtml main component
import MakeImage from './MakeImage'; //import MakeImage main component

let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml/>, homeDiv);
}

function reactMakeImage(event, customMessage) {
    ReactDOM.render(<MakeImage/>, homeDiv);
}

function reactHome() {
    document.getElementById('pageLoad').innerHTML = '';
    home();
}

function home() {
    ReactDOM.render(<div><ReactHome/></div>, homeDiv);
}

$(document).ready(function () {
    homeDiv = document.getElementById('home');
    $.subscribe('reactMakeHtml', reactMakeHtml);
    $.subscribe('reactMakeImage', reactMakeImage);
    $.subscribe('home', reactHome);
    home();
});
