import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/';

const mapStateToProps = (state) => ({
  wish: state.wish,
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actions, dispatch)
});

export default class MainView extends React.Component {

  constructor() {
    super();
  };

  wishMorning = () => {
    this.props.actions.wishMorning();
  };

  wishNight = () => {
    this.props.actions.wishNight();
  };

  resetWish = () => {
    this.props.actions.resetWish();
  };

  render() {
    return(
      <div>
        <div> Welcome to the Java Meetup Group, Ahemadabad</div>
        <h1 className="message" >{ this.props.wish.message }</h1>
        <div>
          <button onClick={this.wishMorning.bind(this)}>wish Morning</button>
          <button onClick={this.wishNight.bind(this)}>wish Night</button>
          <button onClick={this.resetWish.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
