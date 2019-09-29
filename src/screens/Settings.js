import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Linking,
  AsyncStorage,
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import {DrawerActions} from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';
//import Loader from '../screens/Loader';

export default class Settings extends Component {
  state = {
    isLoading: false,
  };
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    title: 'Settings',
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.dispatch (DrawerActions.openDrawer ())}
      >
        <View style={{paddingHorizontal: 10}}>
          <Ionicons name="md-menu" size={24} />
        </View>
      </TouchableOpacity>
    ),
  });

  async userLogout () {
    try {
      await AsyncStorage.removeItem ('token');
      this.setState ({isLoading: true});
      setTimeout (() => {
        this.props.navigation.navigate ('Auth');
      }, 3000);
    } catch (error) {
      console.log ('AsyncStorage error: ' + error.message);
    }
  }

  constructor () {
    super ();
    this.onEmailChange = this.onEmailChange.bind (this);
    this.state = {
      switchValue: false,
      pushValue: true,
      emailValue: false,
      soundValue: true,
    };
  }

  render () {
    return (
      <View style={{backgroundColor: '#EFEFF4', flex: 1}}>
        <View style={{backgroundColor: '#EFEFF4', flex: 1}}>

          <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
            <SettingsList.Header headerStyle={{marginTop: 15}} />

            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.pushValue}
              switchOnValueChange={this.onPushChange}
              hasNavArrow={false}
              title="Email Notifications"
            />
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.emailValue}
              switchOnValueChange={this.onEmailChange}
              hasNavArrow={false}
              title="Push Notifications"
            />

            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.soundValue}
              switchOnValueChange={this.onSoundChange}
              hasNavArrow={false}
              title="Sound effects"
            />

            <SettingsList.Header headerStyle={{marginTop: 15}} />
            <SettingsList.Item
              title="Change Password"
              onPress={() => this.props.navigation.navigate ('ChangePassword')}
            />
            <SettingsList.Item
              title="About PiccyHub"
              onPress={() => Linking.openURL ('http://www.eazzicashng.com')}
            />
            {/* <SettingsList.Item
              title="Privacy Policy"
              onPress={() => Linking.openURL ('http://app.eazzicashng.com')}
            /> */}
            <SettingsList.Header headerStyle={{marginTop: 15}} />

            <SettingsList.Item
              title="Logout"
              onPress={() => this.userLogout ()}
            />
          </SettingsList>
        </View>
        {/* {this.state.isLoading ? <Loader /> : null} */}
      </View>
    );
  }
  onSoundChange = value => {
    this.setState ({soundValue: value});
  };

  onEmailChange (value) {
    this.setState ({emailValue: value});
  }

  onPushChange = value => {
    this.setState ({pushValue: value});
  };
}

const styles = StyleSheet.create ({});
