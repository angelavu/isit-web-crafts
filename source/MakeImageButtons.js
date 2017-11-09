import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MakeHtmlHomeButton from './MakeHtmlHomeButton';
import 'whatwg-fetch';

class MakeImageButtons extends React.Component {


    constructor() {
        super();

        this.state = {
            createImage: 'Create Images',
            deleteMarkdown: 'Delete Markdown',
            results: []
        };

        this.markdownCreateImages = this.markdownCreateImages.bind(this);
        this.markdownDeleteMarkdown = this.markdownDeleteMarkdown.bind(this);
    }

    markdownCreateImages() {
        console.log(this.state.value);
        var that = this;
        fetch('/makers/makeImages')
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(JSON.stringify(result, null, 4));
                that.setState({
                    results: result
                });
            })
            .catch(function (ex) {
                console.log('markdownCreateImages parsing failed', ex);
            });
    }

    markdownDeleteMarkdown() {
        console.log(this.state.value);
        var that = this;
        fetch('/makers/deleteMarkdown')
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(JSON.stringify(result, null, 4));
                that.setState({
                    results: result
                });
            })
            .catch(function (ex) {
                console.log('markdownDeleteMarkdown parsing failed', ex);
            });
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <h1>Pix Picker</h1>
                <p>This is the MakeImageButton component.</p>
                <br/>
                <MakeHtmlHomeButton/>
                <br/>
                <RaisedButton
                    id="createImageButton"
                    style={buttonStyle}
                    primary={true}
                    onClick={this.markdownCreateImages}
                >
                    {this.state.createImage}
                </RaisedButton>
                <RaisedButton
                    id="deleteMarkdownButton"
                    style={buttonStyle}
                    primary={true}
                    onClick={this.markdownDeleteMarkdown}
                >
                    {this.state.deleteMarkdown}
                </RaisedButton>
                <pre>{JSON.stringify(this.state.results, null, 4)}</pre>
            </div>
        </MuiThemeProvider>;
    }
}

var buttonStyle = {
    margin: '15px'
};

export default MakeImageButtons;