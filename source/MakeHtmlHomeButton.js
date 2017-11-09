import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import '../public/javascripts/tools/tiny-pub-sub.js';

class MakeHtmlHomeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            home: 'Go Home'
        };
    }

    goHome() {
        $.publish('home', {
            message: 'The user wants to go home.'
        });
    }

    render() {

        return <MuiThemeProvider>
            <div>
                <RaisedButton
                    //id="homey" ****
                    style={buttonStyle}
                    primary={true}
                    onClick={this.goHome}>
                    {this.state.home}
                </RaisedButton>
                <p>This is the React MakeHtmlHomeButton component.</p>
            </div>
        </MuiThemeProvider>;
    }
}

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default MakeHtmlHomeButton;
