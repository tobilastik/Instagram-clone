import React, {Component} from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import Welcome from './screens/Welcome';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forgetpassword from './screens/Forgetpassword';
import Home from './screens/HomeScreen';
import Notifications from './screens/Notifications';
import Portal from './screens/JobPortal';
import Search from './screens/SearchScreen';
import Messages from './screens/MessageScreen';

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
