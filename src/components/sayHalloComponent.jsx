import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/index';

const mapStateToProps = (state) => ({
    wish: state.wish,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default class SayHalloComponent extends React.Component {
    render() {
        return (
            <div>
                <div> Welcome to the Java Meetup Group, Ahemadabad</div>
                <h1 className="message">{this.props.wish.prefix} { this.props.wish.message }</h1>
                <div>
                    <button onClick={this.props.actions.wishMorning('Morning')}>wish Morning</button>
                    <button onClick={this.props.actions.wishNight('Night')}>wish Night</button>
                    <button onClick={this.props.actions.resetWish()}>Reset</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SayHalloComponent);
