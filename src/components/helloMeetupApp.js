import React                    from 'react';
import {Provider}             from 'react-redux';
import SayHalloComponent      from './sayHalloComponent';


export default class HelloMeetupApp extends React.Component {
    static propTypes = {
        store: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <SayHalloComponent />
            </Provider>
        );
    }
}
