import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    USER_UPDATE,
    USER_CREATE,
    USER_SAVE_SUCCESS,
    USER_FETCH_SUCCESS
} from './types';

export const userUpdate = ({ prop, value }) => {
  return {
      type: USER_UPDATE,
      payload: { prop, value }
  };
};


export const userCreate = ({ username , surname, age, userlocation, hobby }) => {
    const currentUser = firebase.auth().currentUser.uid;
    const myRef = firebase.database().ref(`/users/${currentUser}/userInfo/${currentUser}`);
    const joinedEvents = 0;

    return (dispatch) => {
        myRef.set({ username , surname, age, userlocation, hobby})
     .then(() => {
         dispatch({ type: USER_CREATE });
     });
 };
};


export const userFetch = () => {
    const { currentUser } = firebase.auth().currentUser;


   return (dispatch) => {
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/userInfo`)
      .on('value', snapshot => {
          dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
      });

   };
};


export const userSave = ({ username , surname, age, userlocation, hobby, uid }) => {
    const { currentUser } = firebase.auth().currentUser;
    const myRef = firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/userInfo/${uid}`);
    return(dispatch) => {

         myRef.set({ username , surname, age, userlocation, hobby })
        .then(() => {
            dispatch ({ type: USER_SAVE_SUCCESS });
         Actions.pop({ type: 'reset' });
        });
    };
};
