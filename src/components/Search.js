import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUpdate } from '../actions';
import { Actions } from 'react-native-router-flux';
import { LoginButton,Card,Input,FeedButton, LoginSection, Button, Background } from './common';
import SearchForm from './SearchForm';
import SearchedList from './SearchedList';
import { View, Text, TextInput } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class Search extends Component {

  onButtonPress(){
    const { tag  } = this.props;
    Actions.SearchedList({ tag: this.props.tag });
   }


    render() {
      const { tag } = this.props;
        return(
        <Background>
          <View style={styles.wrapper}>
          <View style={styles.container1}>
        	<View style={styles.icon}>
        		<EvilIcons name='search' color='#2699fb' size={26} />
        	</View>
          <Input 
              label="Tag"
              placeholder="#tag"
              value={this.props.tag}
              onChangeText={value => this.props.searchUpdate({ prop: 'tag', value })}
          /> 
        </View>
    </View>
        <View style={styles.footer}>
           <FeedButton onPress={this.onButtonPress.bind(this)}> Search  </FeedButton>
        </View>
        </Background>
        );
    }
}

const styles = {
  wrapper: {
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: '7%',
  },
	container1:{
    flexDirection: 'row',
		height: 45,
		borderWidth: 1,
		borderColor: '#bce0fd',
		borderRadius: 6,
    paddingLeft: 8,
	 },
  container2: {
    marginTop: '5%',
    flexDirection: 'row',
    height: 45,
    paddingLeft: 4,
   },
	icon: {
    justifyContent: 'center'
	 },
  inputStyle2: {
    flex: 1,
    backgroundColor: '#f1f9ff',
    marginRight: '10%',
    marginLeft: '5%',
  },
	textStyle:{
		width:300,
		fontSize:15,
    fontWeight: '400',
		color:'#2699fb',
    },
    footer:{
      backgroundColor:'#f1f9ff'
    }
};

const mapStateToProps = (state) => {
  const { tag  } = state.searchForm;

  return { tag  };
};


export default connect(mapStateToProps,
     { searchUpdate
        })(Search);