import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { eventUpdate } from '../actions';
import { LoginSection, Input, Card, CardSection, Button, Background, FeedButton, } from './common';
import { eventJoin } from '../actions/EventActions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MembersList from './MembersList';
class SearchDetailed extends Component {
 
  render() {
    const { name, date, location, tag, description } = this.props.search;

    return (
      <Background>
        <View style={styles.header}>
          <Image
            style={{
              height: 200,
              width: null,
              flex: 1,
            }}
            source={{
              uri: 'https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-1/c120.0.720.720/11067469_10153348248977429_3631293933715085157_n.jpg?_nc_cat=0&oh=dbcca123d980ecc2571374fcbd534956&oe=5B888BCC'
            }}
          />
        </View>

        <View style={styles.body}>
          <View style={styles.name}>
            <Text style={styles.nameStyle}>
              {name}
            </Text>
          </View>

          <View style={styles.LocDate}>
            <View style={styles.date}>
              <Text style={styles.LocDateText}>
                {date}
              </Text>
            </View>

            <View style={styles.location}>
              <Text style={styles.LocDateText}>
                {location}
              </Text>
            </View>
          </View>

          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              {description}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Button onPress={eventJoin(this.props.search)}> Join </Button>
        </View>
      </Background>
    );
  }
}

const styles = {
  container: {
  },
  header: {
    height: 200,
  },
  body: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
  },
  name: {},
  LocDate: {
    flexDirection: 'row'
  },
  location: {
    marginLeft: 10,
  },
  date: {},
  tags: {},
  footer: {
    margin: 30,
  },
  description: {
    marginTop: 20,
  },
  nameStyle: {
    fontSize: 27,
    color: '#2699fb',
    fontWeight: '600',
  },
  LocDateText: {
    color: '#2699fb',
  },
  descriptionText: {
    color: '#2699fb',
    lineHeight: 22,
  },
};


export default SearchDetailed;