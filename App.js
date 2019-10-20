import React, {Component} from 'react';
import Welcome from './src/screens/Welcome';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Forgetpassword from './src/screens/Forgetpassword';
import Home from './src/screens/HomeScreen';
import Notifications from './src/screens/Notifications';
import Search from './src/screens/SearchScreen';
import Upload from './src/screens/Upload';
import Messages from './src/screens/MessageScreen';
import {FontAwesome, Ionicons, Foundation} from '@expo/vector-icons';
import Profile from './src/screens/Profile';
import ChangePassword from './src/screens/ChangePassword';
import {Provider} from 'react-redux';
import store from './src/store/store';
import JobPortal from './src/screens/JobPortal';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

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
    Notifications: {
      screen: JobPortal,
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
    Profile: Profile,
    ChangePassword: ChangePassword,
    Messages: Messages,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator ({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
  Signup: {screen: AppStackNavigator},
  Forget: {screen: Forgetpassword},
});
const AppContainer = createAppContainer (AppSwitchNavigator);
