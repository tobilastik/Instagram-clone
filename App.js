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
import Search from './src/screens/SearchScreen';
import Messages from './src/screens/MessageScreen';
import ClapButton from './src/components/ClapButton';

export default class App extends Component {
  render () {
    return <AppContainer />;
  }
}
const AppTabNavigator = createBottomTabNavigator (
  {
    Home,
    Search,
    Portal,
    Notifications,
    Messages,
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
const AppDrawerNavigator = createDrawerNavigator ({
  Settings: {
    screen: AppStackNavigator,
  },
});
const AppSwitchNavigator = createSwitchNavigator ({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
  Signup: {screen: AppDrawerNavigator},
  Forget: {screen: Forgetpassword},
});
const AppContainer = createAppContainer (AppSwitchNavigator);
