import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    SEARCH_UPDATE,
    SEARCH_FETCH_SUCCESS
} from './types';

export const searchUpdate = ({ prop, value }) => {
  return {
      type: SEARCH_UPDATE,
      payload: { prop, value }
  };
};


export const searchedFetch = (tag) => {
    const bytag = String(tag);
    return (dispatch) => {
    firebase.database().ref(`/events`).orderByChild("/tag").equalTo(bytag)
    .on('value', snapshot => {
        dispatch({ type: SEARCH_FETCH_SUCCESS, payload: snapshot.val() });
    });

 };
};