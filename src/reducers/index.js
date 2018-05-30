import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EventFormReducer from './EventFormReducer';
import EventReducer from './EventReducer';
import UserFormReducer from './UserFormReducer';
import ProfileReducer from './ProfileReducer';
import JoinedEventReducer from './JoinedEventReducer';
import CreatedEventReducer from './CreatedEventReducer';
import chat from './ChatReducer';
import MembersReducer from './MembersReducer';
import SearchFormReducer from './SearchFormReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
   auth: AuthReducer,
   eventForm: EventFormReducer,
   events: EventReducer,
   searchForm: SearchFormReducer,
   userForm: UserFormReducer,
   usersInfo: ProfileReducer,
   joinedevents: JoinedEventReducer,
   createdevents: CreatedEventReducer,
   chat: chat,
   members: MembersReducer,
   searches: SearchReducer
});

