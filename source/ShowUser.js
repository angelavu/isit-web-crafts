import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';

class ShowUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseDir: 'unknown',
            bootswatch: 'unknown'
        };
        this.getUserData();
    }

    getUserData = () => {
        let that = this;

        firebase.database()
            .ref('/configuration/users/' + this.props.user + '/base-dir')
            .once('value')
            .then(function(snapshot) {
                const baseDir =  snapshot.val();
                that.setState({baseDir: baseDir});
                console.log('baseDir: ' + baseDir);
            });

        firebase.database()
            .ref('/configuration/users/' + this.props.user + '/bootswatch')
            .once('value')
            .then(function(snapshot) {
                const bootswatch = snapshot.val();
                that.setState({bootswatch: bootswatch});
                console.log('bootswatch: ' + bootswatch);
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
    }
};

ShowUser = connect(mapStateToProps)(ShowUser);

export default ShowUser;