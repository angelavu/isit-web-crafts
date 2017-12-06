import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeHtmlHomeButton from './MakeHtmlHomeButton';
import MakeImageButtons from './MakeImageButtons';

class MakeImage extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Pix Picker</h1>
                    <MakeHtmlHomeButton/>
                    <MakeImageButtons/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MakeImage;