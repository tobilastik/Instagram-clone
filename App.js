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
import Messages from './src/screens/MessageScreen';
import ClapButton from './src/components/ClapButton';
import {
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class App extends Component {
  render () {
    return <AppContainer />;
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
        tabBarLabel: 'Home',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-home" color={tintColor} size={20} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-search" color={tintColor} size={20} />
        ),
      },
    },
    'Job Portal': {
      screen: Portal,
      navigationOptions: {
        tabBarLabel: 'Job Portal',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="support" color={tintColor} size={20} />
        ),
      },
    },
    Inbox: {
      screen: Messagetab,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <Entypo name="message" color={tintColor} size={20} />
        ),
      },
    },
    Forum: {
      screen: Forum,
      navigationOptions: {
        tabBarLabel: 'Forum',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons name="forum" color={tintColor} size={20} />
        ),
      },
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
