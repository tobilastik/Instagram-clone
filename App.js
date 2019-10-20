import React, {Component} from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import Welcome from './src/screens/Welcome';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Forgetpassword from './src/screens/Forgetpassword';
import Home from './src/screens/HomeScreen';
import Notifications from './src/screens/Notifications';
import Portal from './src/screens/JobPortal';
import Forum from './src/screens/Forum';
import Search from './src/screens/SearchScreen';
import Upload from './src/screens/Upload';
import Messages from './src/screens/MessageScreen';
import ClapButton from './src/components/ClapButton';
import {FontAwesome, Ionicons, Foundation} from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import SideMenu from './src/components/SideMenu';
import Settings from './src/screens/Settings';
import Profile from './src/screens/Profile';
import ChangePassword from './src/screens/ChangePassword';
import {Provider} from 'react-redux';
import store from './src/store/store';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const Messagetab = createMaterialTopTabNavigator (
  {
    Messages: {
      screen: Messages,
      navigationOptions: {
        tabBarLabel: 'MESSAGES',
      },
    },
    Portal: {
      screen: Portal,
      navigationOptions: {
        tabBarLabel: 'NOTIFICATIONS',
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: 'white',
      style: {
        height: 56,
        backgroundColor: 'orange',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

const AppTabNavigator = createBottomTabNavigator (
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Foundation name="home" color={tintColor} size={28} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-search" color={tintColor} size={28} />
        ),
      },
    },

    Upload: {
      screen: Upload,
      navigationOptions: {
        tabBarLabel: 'Upload',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="plus-square-o" color={tintColor} size={28} />
        ),
      },
    },
    Inbox: {
      screen: Messagetab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-heart-empty" color={tintColor} size={28} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="user-o" color={tintColor} size={28} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
  }
);

const AppStackNavigator = createStackNavigator (
  {
    AppTabNavigator: AppTabNavigator,
    ClapButton: ClapButton,
    Settings: Settings,
    Profile: Profile,
    ChangePassword: ChangePassword,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            style={{marginLeft: 10}}
            onPress={() => navigation.openDrawer ()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);
const AppDrawerNavigator = createDrawerNavigator (
  {
    Setting: {
      screen: AppStackNavigator,
    },
  },
  {
    contentComponent: props => (
      <SideMenu currentScreen={props.navigation.state.routeName} {...props} />
    ),
  }
);
const AppSwitchNavigator = createSwitchNavigator ({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
  Signup: {screen: AppDrawerNavigator},
  Forget: {screen: Forgetpassword},
});
const AppContainer = createAppContainer (AppSwitchNavigator);
