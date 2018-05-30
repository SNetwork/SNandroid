import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { userUpdate , userSave} from '../actions';
import { Card, LoginSection, LoginButton,Button, Confirm, Background } from './common';

class UserEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.userInfo, (value, prop) => {
            this.props.userUpdate({ prop, value });
        });
     }
    onAccept() {
        const { username , surname, age, userlocation, hobby } = this.props;
        this.props.userSave({username , surname, age, userlocation, hobby, uid: this.props.userInfo.uid });
    }

   onDecline() {
        this.setState({ showModal:false });
    }


    render() {
        return (
            <Background>
                    <Card>
                        <UserForm />
                        <LoginSection>
                            <LoginButton onPress={() => this.setState({ showModal: !this.state.showModal })}>
                                Save changes
                            </LoginButton>
                        </LoginSection>
                        <Confirm 
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                        >
                            Edit Profile? 
                        </Confirm>
                    </Card>
            </Background>
        );
    }
}
const mapStateToProps = (state) => {
    const { username , surname, age, userlocation, hobby } = state.userForm;

    return { username , surname, age, userlocation, hobby };
  };


export default connect(
    mapStateToProps,
     { 
        userUpdate, 
        userSave
    })
    (UserEdit);