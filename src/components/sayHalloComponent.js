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
                <a href="/#app/page2" > Go To Page 2 </a>

                <div> Welcome to the Java Meetup Group, Ahemadabad</div>
                <h1 className="message">{ this.props.wish.message }</h1>
                <div>
                    <button onClick={()=>{this.props.actions.updateWish('Good Morning')}}>wish Morning</button>
                    <button onClick={()=>{this.props.actions.updateWish('Good Night')}}>wish Night</button>
                    <button onClick={this.props.actions.wishBye}>Reset</button>
                </div>
                <img src="http://photos1.meetupstatic.com/photos/event/5/0/f/c/highres_260900732.jpeg" />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SayHalloComponent);
