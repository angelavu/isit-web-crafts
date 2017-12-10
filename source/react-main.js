import React from 'react';
import ReactDOM from 'react-dom';
import HomeButtons from './HomeButtons';
import fireReducer from './fireReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(fireReducer);

$(document).ready(function() {
    try {
        const root = document.getElementById('home');
        ReactDOM.render(

            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <HomeButtons/>
                    </div>
                </MuiThemeProvider>
            </Provider>
            , root);
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
});
