import React, {Component} from 'react';
import 'react-native';
import Welcome from './screens/Welcome';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forgetpassword from './screens/Forgetpassword';

export default class App extends Component {
  render () {
    return <AppContainer />;
  }
}

const AppSwitchNavigator = createSwitchNavigator ({
  Forget: {screen: Forgetpassword},
  Welcome: {screen: Welcome},
  Login: {screen: Login},
  Signup: {screen: Signup},
});
const AppContainer = createAppContainer (AppSwitchNavigator);
