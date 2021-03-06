import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import ElvenLogin from './ElvenLogin';
import firebase from 'firebase';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

class App extends Component {

    setConfig() {
        firebase.database().ref('/configuration/users/vu/base-dir').set('/home/bcuser');
    }

    insertConfig() {
        fetch('/makers/get-config')
            .then(function (response) {
                return response.json();
            })
            .then(function (configuration) {
                console.log(configuration);
                firebase.database().ref('/').set(configuration);
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return (

            <div>
                <p>React Stuff</p>

                <RaisedButton
                    label='Insert Config'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.insertConfig}
                />

                <RaisedButton
                    label='Update user'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.setConfig}
                />

                <ElvenLogin/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        signInLabel: state.signInLabel,
        configured: state.configured
    };
};

App = connect(mapStateToProps)(App);

export default App;
