import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View,
    Image,
    TouchableOpacity
 } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FeedButton, LoginSection,CardSection,Card } from './common';
import { eventJoin } from '../actions/EventActions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { ListItem } from './ListItem';

class CreatedItem extends Component {
      
    onButtonPress() {
        Actions.eventEdit({ createdevent: this.props.createdevent });
    }
    render() {

        const { name , date, location , tag , description } = this.props.createdevent;

        return(
            <Card>
                  <View style={styles.container}>
                      <View style={styles.header}>
                          <View style={styles.subsection1}>
                          <View style={styles.photo}>
                                    <Image
                                        style={{
                                            height: null,
                                            width: null,
                                            flex: 1,
                                            borderRadius: 25,
                                        }}
                                        source={{
                                            uri: 'https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-1/c120.0.720.720/11067469_10153348248977429_3631293933715085157_n.jpg?_nc_cat=0&oh=dbcca123d980ecc2571374fcbd534956&oe=5B888BCC'
                                        }}
                                    />
                                </View>
                              
                              <View style={styles.mainInfo}>
                                  <View style={styles.name}>
                                      <Text style={styles.nameStyle}>
                                           {name}
                                      </Text>
                                  </View>
                                  
                                  <View style={styles.LocDate}>
                                      <View style={styles.location}>
                                          <Text>
                                              {location}
                                          </Text>
                                      </View>
                                      
                                      <View style={styles.date}>
                                          <Text>
                                              {date}
                                          </Text>
                                      </View>
                                  </View>
                              </View>
                          </View>
                          
                          <Text style={styles.description}>
                              {description}
                          </Text>
                      </View>
                      
                      <View style={styles.image}>
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

                      
                      <View style={styles.footer}>
                          <FeedButton onPress={this.onButtonPress.bind(this)}> Edit </FeedButton>
                      </View>
                  </View>
            </Card>
        );
    }
}



const styles ={
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    header: {
      padding: 10,
    },
    subsection1: {
      flexDirection: 'row',
    },
    photo: {
      height: 50,
      width: 50,
      backgroundColor: 'lightblue',
      borderRadius: 25,
    },
    mainInfo: {
      paddingLeft: 10,
    },
    name: {
      
    },
    nameStyle: {
      fontSize: 20,
      color: '#2699fb',
    },
    LocDate: {
      flexDirection: 'row',
    },
    location: {
      marginRight: '7%',
    },
    date: {
      
    },
    description: {
      color: '#000',
      marginTop: '3%',
    },
    image: {
      height: 200,
      backgroundColor: 'lightblue',
    },
    footer: {
      
    },
};

export default CreatedItem;


