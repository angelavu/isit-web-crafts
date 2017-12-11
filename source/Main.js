import React, {Component} from 'react';
import App from './App';
import ShowUsers from './ShowUsers';
import ShowUser from './ShowUser';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {connect} from 'react-redux';
import MakeHtml from './MakeHtml';
import MakeImage from './MakeImage';

const paperStyle = {
    height: '85%',
    width: '85%',
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'open': false,
            'component': null
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleShowUsers = this.handleShowUsers.bind(this);
        this.handleMakeHtml = this.handleMakeHtml.bind(this);
        this.handleMakeImage = this.handleMakeImage.bind(this);
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

    handleMakeHtml = () => {
        this.setState({open: false});
        this.props.dispatch({type: 'SWITCH_COMPONENT', component: 'make_html'});
    };

    handleMakeImage = () => {
        this.setState({open: false});
        this.props.dispatch({type: 'SWITCH_COMPONENT', component: 'make_image'});
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

        case 'make_html':
            content = <MakeHtml/>;
            break;

        case 'make_image':
            content = <MakeImage/>;
            break;

        default:
            content = <App/>;

        }

        return (
            <div>
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="Concurrently Express React"
                    onLeftIconButtonTouchTap={this.handleToggle}
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
                    <MenuItem onClick={this.handleMakeHtml}>Make HTML</MenuItem>
                    <MenuItem onClick={this.handleMakeImage}>Make Image</MenuItem>
                    <MenuItem onClick={this.handleShowLogin}>Show Login</MenuItem>
                    <MenuItem onClick={this.handleShowUsers}>Show Users</MenuItem>

                </Drawer>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.open,
        component: state.component
    };
};

Main = connect(mapStateToProps)(Main);

export default Main;