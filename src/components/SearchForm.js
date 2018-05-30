import React, { Component } from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { searchUpdate } from '../actions';
import { LoginSection, Input } from './common';


class SearchForm extends Component {
    render() {
        return (
      <View>
             <LoginSection>
             <Input 
              label="Tag"
              placeholder="#tag"
              value={this.props.tag}
              onChangeText={value => this.props.searchUpdate({ prop: 'tag', value })}
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
    const { tag  } = state.searchForm;
  
    return {  tag  };
  };
  

export default connect(mapStateToProps, { searchUpdate })(SearchForm);
