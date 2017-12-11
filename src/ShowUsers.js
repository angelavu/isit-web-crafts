import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import firebase from 'firebase';

class ShowUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.getUserNames();
    }

    getUserNames = () => {
        let that = this;
        firebase.database()
            .ref('/configuration/users/')
            .once('value')
            .then(function (snapshot) {
                const users = [];
                const userNames = snapshot.val();
                for (const userName in userNames) {
                    users.push(userName);
                }
                that.setState({users: users});
            });
    };


    dispatchUser = (event) => {
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: 'show_user',
            userName: event.target.firstChild.nodeValue
        });
        console.log('event: ' + event.target.firstChild.nodeValue);
    };

    render() {
        return (
            <div>
                <h1>Users</h1>
                <p>Click a button to see additional information about a user.</p>
                {this.state.users.map((user) => (
                    <RaisedButton
                        label={user}
                        key={user}
                        primary={true}
                        onClick={this.dispatchUser}
                    />
                ))}
            </div>
        );
    }
}


ShowUsers = connect()(ShowUsers);

export default ShowUsers;