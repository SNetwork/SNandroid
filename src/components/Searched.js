import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { eventUpdate } from '../actions';
import { LoginSection, Input, Card, CardSection, Button, Background, FeedButton, } from './common';
import { eventJoin } from '../actions/EventActions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MembersList from './MembersList';

class Searched extends Component {
  componentWillMount() {
    _.each(this.props.event, (value, prop) => {
      this.props.eventUpdate({ prop, value });
    });
  }
  render() {
    const { name, date, location, tag, description } = this.props.event;

    return (
      <Background>
        <SearchedList tag={this.props.event.tag}/>
      </Background>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, date, location, tag, description } = state.eventForm;

  return { name, date, location, tag, description };
};


export default connect(mapStateToProps, { eventUpdate })(Searched);