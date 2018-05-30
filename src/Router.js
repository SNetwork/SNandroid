import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginForm from './components/LoginForm';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import EventCreate from './components/EventCreate';
import EventEdit from './components/EventEdit';
import EventList from './components/EventList';
import Settings from './components/Settings';
import SignUpForm from './components/SignUpForm';
import Profile from './components/Profile';
import Joined from './components/Joined';
import Created from './components/Created';
import Search from './components/Search';
import Searched from './components/Searched';
import SearchedList from './components/SearchedList';
import Message from './components/Message';
import Notification from './components/Notification';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import firebase from 'firebase';
import Detailed from './components/Detailed';
import SearchDetailed from './components/SearchDetailed';
import ChatScreenContainer from './components/Chat/Container';

const TabIcon1 = ({ }) => {
    return (
        <EvilIcons name='navicon' color='#fff' size={36} />
    );
};
const TabIcon2 = ({ }) => {
    return (
        <EvilIcons name='search' color='#fff' size={36} />
    );
};

const TabIcon3 = ({ }) => {
    return (
        <EvilIcons name='user' color='#fff' size={36} />
    );
};

const TabIcon4 = ({ }) => {
    return (
        <EvilIcons name='comment' color='#fff' size={36} />
    );
};

const TabIcon5 = ({ }) => {
    return (
        <EvilIcons name='bell' color='#fff' size={36} />
    );
};

const NavIcon = ({ }) => {
    return (
        <EvilIcons name='plus' color='#2699fb' size={36} />
    );
};

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login    " hideNavBar />
                    <Scene key="signup" component={SignUpForm} hideNavBar />
                    <Scene
                        key="userCreate"
                        component={UserCreate}
                        title="Create User    "
                        hideNavBar
                    />
                </Scene>

                <Scene key="Main"
                    tabs
                    swipeEnabled={true}
                    tabBarPosition='bottom'
                    activeBackgroundColor='#7bc1fc'
                    tabBarStyle={{ backgroundColor: '#2699fb' }}
                    labelStyle={{ color: '#fff', fontSize: 12 }}
                    showLabel={false}
                    animationEnabled = {false}
                    hideNavBar
                    panHandlers={null}>
                    <Scene key="Feed">
                        
                        <Scene
                            rightTitle={NavIcon}
                            onRight={() => { Actions.eventCreate() }}
                            key="eventList"
                            component={EventList}
                            initial
                            icon={TabIcon1}
                        />
                        <Scene
                            key="Detailed"
                            component={Detailed}
                            title="Details    "
                            icon={TabIcon1}
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                            
                        />
                        <Scene
                            key="eventCreate"
                            component={EventCreate}
                            title="Create Event    "
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                            icon={TabIcon1}
                        />
                    </Scene>
                    <Scene key="Search">
                        <Scene
                            key="Your Search"
                            component={Search}
                            title="Search    "
                            icon={TabIcon2}
                            initial
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                        />
                        <Scene
                            key="Searched"
                            component={Searched}
                            icon={TabIcon2}
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                        />
                        <Scene
                            key="SearchedList"
                            component={SearchedList}
                            icon={TabIcon2}
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                        />
                         <Scene
                            key="SearchDetailed"
                            component={SearchDetailed}
                            title="Details    "
                            icon={TabIcon1}
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                            
                        />
                    </Scene>
                    <Scene
                        key="Message"
                        component={Message}
                        title="Messages       "
                        icon={TabIcon4}
                        titleStyle={{ color: '#2699fb' }}
                        navBarButtonColor='#2699fb'
                    />
                    <Scene
                        key="Notification"
                        component={Notification}
                        icon={TabIcon5}
                        titleStyle={{ color: '#2699fb' }}
                        navBarButtonColor='#2699fb'
                    />
                    <Scene key="Profile">
                        <Scene
                            key="Your Profile"
                            component={Profile}
                            icon={TabIcon3}
                            hideNavBar
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                        />
                        <Scene
                            key="userEdit"
                            component={UserEdit}
                            title="Edit User    "
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                            icon={TabIcon3}
                        />
                        <Scene
                            key="Joined"
                            component={Joined}
                            title="Joined Events    "
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                            icon={TabIcon3}
                        />
                        <Scene
                            key="Created"
                            component={Created}
                            title="Created Events    "
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                            icon={TabIcon3}
                        />
                        <Scene
                            key="eventEdit"
                            component={EventEdit}
                            title="Edit Event    "
                            icon={TabIcon3}
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                        />
                        <Scene
                            key="Settings"
                            component={Settings}
                            title="Settings    "
                            titleStyle={{ color: '#2699fb' }}
                            navBarButtonColor='#2699fb'
                            icon={TabIcon3}
                        />
                        <Scene
                        key="chat"
                        component={ChatScreenContainer}
                        icon={TabIcon3}
                        titleStyle={{ color: '#2699fb' }}
                        navBarButtonColor='#2699fb'
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;