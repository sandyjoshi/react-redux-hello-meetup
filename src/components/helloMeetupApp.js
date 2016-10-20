import React                    from 'react';
import {Provider}             from 'react-redux';
import routes               from '../routes';


export default class HelloMeetupApp extends React.Component {
    static propTypes = {
        store: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                {routes}
            </Provider>
        );
    }
}
