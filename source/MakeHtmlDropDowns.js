import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';

const styles = {
    customWidth: {
        width: 500,
    },
};

const siteDirs = [];
const destDirs = [];

class MakeHtmlDropDowns extends React.Component {
    constructor() {
        super();

        this.state = {
            walk: 'Generate HTML',
            siteDir: 'unknown',
            destDir: 'unknown',
            configSummary: [],
            value: 1
        };

        this.handleSiteDir = this.handleSiteDir.bind(this);
        this.handleDestinationDir = this.handleDestinationDir.bind(this);
        this.generateHtml = this.generateHtml.bind(this);
    }

    handleSiteDir(event, index, value) {
        this.setState({
            value: value,
            siteDir: event.target.innerHTML
        });
    }

    handleDestinationDir(event, index, value) {
        this.setState({
            value: value,
            destDir: destDirs[value].props.primaryText
        });
    }


    /**
     * @typedef {Object} configSummary
     * @property {Object} siteDirs
     * @property {Object} destinationDirs
     * @property {String} baseDir
     * @property {String} mostRecentDate
     */
    loadConfig() {
        //const that = this;
        fetch('/makers/config')
            .then(function (response) {
                return response.json();
            })
            .then(function (configSummary) {
                //console.log('parsed json', JSON.stringify(configSummary, null, 4));
                siteDirs.length = 0;
                destDirs.length = 0;
                configSummary.siteDirs.forEach(function (dir, index) {
                    const showDir = configSummary.baseDir + dir;
                    siteDirs.push(<MenuItem value={index} key={index} primaryText={showDir}/>);
                });
                configSummary.destDirs.forEach(function (dir, index) {
                    //const showDir = configSummary.baseDir + dir;
                    const showDir = dir;
                    destDirs.push(<MenuItem value={index} key={index} primaryText={showDir}/>);
                });
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    generateHtml() {
        console.log(this.state.value);
        console.log(siteDirs[this.state.value]);
        //walking.runWalkReact('qSingle', this.state.siteDir, this.state.destDir);
        const query = '/makers/walk?siteDirsIndex=' + this.state.value;
        var that = this;
        fetch(query)
            .then(function (response) {
                return response.json();
            })
            .then(function (configSummary) {
                console.log(JSON.stringify(configSummary, null, 4));
                // CALL that.setState to **state.configSummary** to configSummary.htmlFilesWritten
                that.setState({
                    configSummary: configSummary.htmlFilesWritten
                });
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    componentDidMount() {
        this.loadConfig();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Home Page</h1>
                    <DropDownMenu
                        id="siteDirs"
                        value={this.state.value}
                        onChange={this.handleSiteDir}
                        style={styles.customWidth}
                        autoWidth={true}
                    >
                        {siteDirs}
                    </DropDownMenu>
                    <br/>
                    <DropDownMenu
                        id="destDirs"
                        value={this.state.value}
                        onChange={this.handleDestinationDir}
                        style={styles.customWidth}
                        autoWidth={true}
                    >
                        {destDirs}
                    </DropDownMenu>
                    <p>This is the MakeHtmlDropDowns component.</p>
                    <br/>
                    <RaisedButton
                        id="walk"
                        style={buttonStyle}
                        primary={true}
                        onClick={this.generateHtml}>
                        {this.state.walk}
                    </RaisedButton>
                    <pre>{JSON.stringify(this.state.configSummary, null, 4)}</pre>
                </div>
            </MuiThemeProvider>
        );
    }
}

const buttonStyle = {
    margin: '15px'
};

export default MakeHtmlDropDowns;