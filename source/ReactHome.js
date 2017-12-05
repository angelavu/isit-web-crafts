import React from 'react';
import HomeButtons from './HomeButtons';
import MakeImage from './MakeImage';
import MakeImageButtons from './MakeImageButtons';

export default class ReactHome extends React.Component {
    render() {
        return (
            <div>
                <h1>An H1 element in a React Component</h1>
                <p>This is the ReactHome component.</p>
                <HomeButtons/>

            </div>
        );

    }
}
