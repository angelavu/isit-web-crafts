import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';

class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseDir: 'unknown',
            bootswatch: 'unknown'
        };
        this.getUserData();
    }

    getUserData = () => {
        const that = this;
        const path = '/configuration/users/' + this.props.user;
        firebase.database().ref(path).once('value').then(function (snapshot) {
            const user = snapshot.val();
            console.log(user);
            that.setState({baseDir: user['base-dir'], bootswatch: user.bootswatch});
        });
    };

    render() {
        return (
            <div>
                <h1>User: {this.props.user}</h1>
                <p>
                    <strong>BaseDir:</strong> {this.state.baseDir}
                </p>
                <p>
                    <strong>Bootswatch:</strong> {this.state.bootswatch}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userName
    };
};

ShowUser = connect(mapStateToProps)(ShowUser);

export default ShowUser;