import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View,Text, ListView } from 'react-native';
import { userFetch } from '../actions';
import { Card, LoginSection, Input, Button, Background } from './common';
import ProfileItem from './ProfileItem';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class Profile extends Component {
    componentWillMount() {
        this.props.userFetch();
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component 
        // will be rendered with 
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    render() {

        const { username, surname, age, userlocation, hobby } = this.props.userInfo;

        return (

            <Background>
               <View style={styles.userName}>
                                    <Text>
                                          {username} {surname}
                                    </Text>
                              </View>

                              <View>
                                    <View>
                                          <Text >
                                                {userlocation},
                                    </Text>
                                    </View>

                                    <View>
                                          <Text style={styles.infoStyle}>
                                                {age}
                                          </Text>
                                    </View>
                              </View>

                              <View style={styles.description}>
                                    <Text style={styles.descriptionStyle}>
                                          {hobby}
                                    </Text>
                              </View>
            </Background>
        );
    }
}

const mapStateToProps = (state) => {
    const usersInfo = _.map(state.usersInfo, (val, uid) => {
        return { ...val, uid };
    });
    return { usersInfo };
};

export default connect(mapStateToProps, { userFetch })(Profile);