//Feed

import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View,ListView } from 'react-native';
import { membersFetch } from '../actions';
import { Card, LoginSection,Input,  Button,Background } from './common';
import MembersItem from './MembersItem';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class MembersList extends Component {
    componentWillMount() {
        this.props.membersFetch(this.props.uid);
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component 
        // will be rendered with 
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource ({ members }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(members);
    }


    renderRow(member) {
        return (
        <MembersItem member={member} />
        );
    }

    render() {
       return(
           <Background>
                  <ListView 
                  horizontal={true}
                  enableEmptySections
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                  />
           </Background>
       );
    }
}

const mapStateToProps = (state) => {
    const members = _.map(state.members, (val, uid) => {
      return { ...val, uid };
  });
    return { members };
  };
  
  export default connect(mapStateToProps, { membersFetch })(MembersList);