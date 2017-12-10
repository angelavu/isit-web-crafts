import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import '../public/javascripts/tools/tiny-pub-sub.js';
import App from './App';
import ShowUsers from './ShowUsers';
import ShowUser from './ShowUser';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {connect} from 'react-redux';

const paperStyle = {
    height: '85%',
    width: '85%',
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};

class HomeButtons extends React.Component {

    constructor() {
        super();

        this.state = {
            makeImage: 'Make Image',
            makeHtml: 'Make HTML',
            'open': false,
            'component': null
        };
    }

    // trigger the event
    makeHtml() {
        $.publish('clientMakeHtml', {
            message: 'The user wants to makeHtml.'
        });
    }

    makeImage() {
        $.publish('clientMakeImage', {
            message: 'The user wants to makeImage.'
        });
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleShowLogin = () => {
        this.setState({open: false});
        this.props.dispatch({type: 'SWITCH_COMPONENT', component: 'app'});
    };

    handleShowUsers = () => {
        this.setState({open: false});
        this.props.dispatch({type: 'SWITCH_COMPONENT', component: 'show_users'});
    };

    render() {
        let content = null;
        switch (this.props.component) {
        case 'app':
            content = <App/>;
            break;

        case 'show_users':
            content = <ShowUsers/>;
            break;

        case 'show_user':
            content = <ShowUser/>;
            break;

        default:
            content = <App/>;
        }
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Home Page</h1>
                    <RaisedButton
                        id="makeHtml"
                        style={buttonStyle}
                        primary={true}
                        onClick={this.makeHtml}>{this.state.makeHtml}</RaisedButton>

                    <RaisedButton
                        id="makeImage"
                        style={buttonStyle}
                        primary={true}
                        onClick={this.makeImage}>{this.state.makeImage}</RaisedButton>
                    <p>Select a button.</p>
                    <p>This is the HomeButtons react component.</p>
                </div>
                <div>
                    <AppBar
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        title="Concurrently Express React"
                        onLeftIconButtonClick={this.handleToggle}
                    />

                    <Paper style={paperStyle} zDepth={5}>
                        <Toolbar style={{'justifyContent': 'center'}}>
                            <ToolbarTitle text="Material UI"/>
                        </Toolbar>
                        {content}
                    </Paper>

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>

                        <AppBar title="AppBar"/>
                        <MenuItem onClick={this.handleShowLogin}>Show Login</MenuItem>
                        <MenuItem onClick={this.handleShowUsers}>Show Users</MenuItem>

                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

const buttonStyle = {
    margin: '15px'
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        component: state.component,
        signInLabel: state.signInLabel

    };
};

/*const mapStateToProps = (state) => {
    return {
        open: state.open,
        component: state.component
    }
};*/

HomeButtons = connect(mapStateToProps)(HomeButtons);

export default HomeButtons;

