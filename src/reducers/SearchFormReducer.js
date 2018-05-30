import { 
    SEARCH_UPDATE, 
   } from '../actions/types';
  
  const INITIAL_STATE = {
    tag: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SEARCH_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      default:
        return state;
    }
  };