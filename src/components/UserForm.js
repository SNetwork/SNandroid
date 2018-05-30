import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { userUpdate } from '../actions';
import { LoginSection, Input } from './common';


class UserForm extends Component {
    render() {
        return (
      <View>
          <LoginSection>
             <Input 
              label="Name"
              placeholder="Name..."
              value={this.props.username}
              onChangeText={value => this.props.userUpdate({ prop: 'username', value })}
              />
             </LoginSection>

             <LoginSection>
             <Input 
              label="Surname"
              placeholder="SurName..."
              value={this.props.surname}
              onChangeText={value => this.props.userUpdate({ prop: 'surname', value })}
              /> 
             </LoginSection>
            
             <LoginSection>
             <Input 
              label="Age"
              placeholder="Age..."
              value={this.props.age}
              onChangeText={value => this.props.userUpdate({ prop: 'age', value })}
              /> 
             </LoginSection>

             <LoginSection>
             <Input 
              label="Location"
              placeholder="City..."
              value={this.props.userlocation}
              onChangeText={value => this.props.userUpdate({ prop: 'userlocation', value })}
              /> 
             </LoginSection>

             <LoginSection>
             <Input 
              label="Hobby"
              placeholder="Hobby.."
              value={this.props.hobby}
              onChangeText={value => this.props.userUpdate({ prop: 'hobby', value })}
              /> 
             </LoginSection>
      </View>
        );
    }
}

const styles ={
    pickerTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#000000',
        paddingLeft: 15
    }
};

const mapStateToProps = (state) => {
    const { username , surname, age, userlocation, hobby } = state.userForm;
  
    return { username , surname, age, userlocation, hobby };
  };
  

export default connect(mapStateToProps, { userUpdate })(UserForm);
