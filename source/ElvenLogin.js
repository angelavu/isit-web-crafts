import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import firebase from 'firebase';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

const defaultState = {
    googleApiToken: 'Unknown',
    elfUser: 'Unknown',
    signInStatus: 'Not Logged In',
    email: 'Unknown',
    emailVerified: false,
    isAnonymous: false,
    providerData: 'Unknown',
    photoURL: 'favicon.png',
    uid: 0
};

class ElvenLogin extends Component {

    constructor(props) {
        super(props);
        if (!this.props.configured) {
            this.elfConfigure();
        } else {
            this.elfSignIn();
        }

        this.state = defaultState;
        this.elfUser = {};
    }

    // Handle Login/Logout button.
    toggleSignIn() {
        if (!firebase.auth().currentUser) {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/plus.login');
            firebase.auth().signInWithRedirect(provider);
        } else {
            firebase.auth().signOut();
        }
        document.getElementById('elf-sign-in').disabled = true;
    }

    elfConfigure = () => {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBClsyxhlFMK0sre0u_c3IgcohEIplJabI",
            authDomain: "isit320-vu-express-react.firebaseapp.com",
            databaseURL: "https://isit320-vu-express-react.firebaseio.com",
            projectId: "isit320-vu-express-react",
            storageBucket: "",
            messagingSenderId: "240481814168"
        };
        firebase.initializeApp(config);
        this.elfSignIn();
    };

    elfSignIn = () => {
        const that = this;
        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
                that.setState({googleApiToken: result.credential.accessToken});
            } else {
                that.setState({googleApiToken: 'Unknown'});
            }
            that.elfUser = result.user;
        }).catch(function (error) {
            // const fireBaseAuthCredential = error.credential;
            if (error.code === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');
                // If you use multiple auth providers handle linking accounts here.
            } else {
                console.error(error);
            }
        });

        firebase.auth().onAuthStateChanged(function (user) {
            that.props.dispatch({type: 'LOGIN_STATUS', loggedIn: user});

            if (user) {
                // User is signed in.
                that.elfUser = user;
                that.setState({
                    elfUser: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    signInStatus: 'Logged In',
                    isAnonymous: user.isAnonymous,
                    providerData: user.providerData,
                    photoURL: user.photoURL,
                    uid: user.uid
                });
            } else {
                that.setState(defaultState);
            }

            document.getElementById('elf-sign-in').disabled = false;
        });

    };

    render() {
        return (
            <div>
                <p>ElvenLogin</p>
                <RaisedButton
                    id='elf-sign-in'
                    label={this.props.signInLabel}
                    style={buttonStyle}
                    primary={true}
                    onClick={this.toggleSignIn}
                />

                <p><span>{this.state.signInStatus}</span></p>
                <pre><code>{this.state.elfUser}</code></pre>
                <pre><code>{this.state.email}</code></pre>

                <img id='elfPhoto' src={this.state.photoURL} alt='' width='10%' min-width='120px'/>

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

ElvenLogin = connect(mapStateToProps)(ElvenLogin);

export default ElvenLogin;