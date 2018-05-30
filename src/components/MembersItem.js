import React, { Component } from 'react';
import {
      Text,
      TouchableWithoutFeedback,
      View,
      TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ProfileButton, CardSection, ProfileSection, ProfileCard } from './common';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { ProfileStyles } from './common';
import UserAvatar from 'react-native-user-avatar';

class MembersItem extends Component {

      render() {

            const { name, surname, age, location, hobby } = this.props.member;

            return (
                  <ProfileCard>
                   <UserAvatar name={this.props.member.name} size={50} />

                  </ProfileCard>
            );
      }
}

export default MembersItem;


