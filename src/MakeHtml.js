import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeHtmlDropDowns from './MakeHtmlDropDowns';

class MakeHtml extends React.Component {
    render() {

        return (
            <MuiThemeProvider>
                <div>
                    <MakeHtmlDropDowns/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MakeHtml;