import React, { Component } from 'react';
import _ from 'lodash';
import { View ,Text} from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Card, LoginSection, Button, Confirm, Background } from './common';
import { Image } from 'react-native';


class Settings extends Component {

  onAccept() {
    this.props.logoutUser();
}

onDecline() {
    this.setState({ showModal:false });
}
  state = { showModal: false };
  render() {
    return (
      <Background>
      <Card>
      <LoginSection>
        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Log Out  </Button>
      </LoginSection>
      <Confirm 
      visible={this.state.showModal}
      onAccept={this.onAccept.bind(this)}
      onDecline={this.onDecline.bind(this)}
      >
           Are you sure you want to log out? 
      </Confirm>
      </Card>
      </Background>
    );
  }

}
const mapStateToProps = ({auth}) => {
  const { email, password, error , loading } = auth;

  return { email, password, error , loading };
};
/***** Export component so it is available elsewhere *****/
export default connect(mapStateToProps,{
  logoutUser})(Settings);