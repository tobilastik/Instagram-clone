import React, {Component} from 'react';
import Welcome from './src/screens/Welcome';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Home from './src/screens/HomeScreen';
import Notifications from './src/screens/Notifications';
import Search from './src/screens/SearchScreen';
import Upload from './src/screens/Upload';
import Messages from './src/screens/MessageScreen';
import {FontAwesome, Ionicons, Foundation} from '@expo/vector-icons';
import Profile from './src/screens/Profile';

export default class App extends Component {
  render () {
    return <AppContainer />;
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
      screen: Notifications,
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
  AppStackNavigator,
});
const AppContainer = createAppContainer (AppSwitchNavigator);
