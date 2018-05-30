//Feed

import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View,ListView } from 'react-native';
import { searchedFetch } from '../actions';
import { Card, LoginSection,Input,  Button,Background } from './common';
import SearchedItem from './SearchedItem';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class SearchedList extends Component {
    componentWillMount() {
        this.props.searchedFetch(this.props.tag);
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component 
        // will be rendered with 
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource ({ searches }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(searches);
    }


    renderRow(search) {
        return (
        <SearchedItem search={search} />
        );
    }

    render() {
       return(
           <Background>
                  <ListView 
                  enableEmptySections
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                  />
           </Background>
       );
    }
}

const mapStateToProps = (state) => {
    const searches = _.map(state.searches, (val, uid) => {
      return { ...val, uid };
  });
    return { searches };
  };
  
  export default connect(mapStateToProps, { searchedFetch })(SearchedList);