import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeImageButtons from './MakeImageButtons';

class MakeImage extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Pix Picker</h1>
                    <MakeImageButtons/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MakeImage;