import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import color from '../constants/Colors';
//import Loader from '../screens/Loader';

export default class ChangePassword extends Component {
  state = {
    oldpassword: '',
    newpassword1: '',
    newpassword2: '',
    oldPasswordError: '',
    newPasswordError1: '',
    newPasswordError2: '',
    isLoading: false,
  };
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    title: 'Change Password',
  });
  handleSubmit = () => {
    const {oldPassword, newpassword1, newpassword2} = this.state;

    this.setState ({
      oldPasswordError: '',
      newPasswordError: '',
    });

    //Password validation
    if (this.state.oldpassword != '') {
      if (this.state.newpassword1 != '') {
        if (this.state.newpassword2 != '') {
          if (
            this.state.newpassword1.length >= 6 &&
            this.state.newpassword1.length <= 16
          ) {
            if (
              this.state.newpassword2.length >= 6 &&
              this.state.newpassword2.length <= 16
            ) {
              if (this.state.newpassword1 === this.state.newpassword2) {
                this.changePassword ();
                this.setState ({
                  newPasswordError1: '',
                  newPasswordError2: '',
                  oldPasswordError: '',
                });
              } else {
                this.setState ({
                  newPasswordError1: 'The two New Password must  match!',
                  newPasswordError2: 'The two New Password must match',
                });
              }
            } else {
              this.setState ({
                newPasswordError2: 'Password length should be between 6 and 16 characters',
              });
            }
          } else {
            this.setState ({
              newPasswordError1: 'Password length should be between 6 and 16 characters',
            });
          }
        } else {
          this.setState ({newPasswordError2: 'Password can not be empty.'});
        }
      } else {
        this.setState ({newPasswordError1: 'Password can not be empty'});
      }
    } else {
      this.setState ({oldPasswordError: 'Password cannot be empty'});
    }
  };

  changePassword = () => {};

  render () {
    const {navigation} = this.props;
    const {oldPasswordError, newPasswordError1, newPasswordError2} = this.state;
    return (
      <KeyboardAvoidingView style={styles.changePassword} behavior="padding">
        <View>
          <View style={{alignItems: 'center', padding: 5}}>
            <Image
              source={require ('../assets/images/logo.png')}
              style={{height: 50, width: 50}}
            />
            <Text style={{fontSize: 19, color: 'gray'}}>Change Password</Text>
          </View>
          <View style={{marginTop: 30}} />
          <View>
            <View>
              <TextInput
                ref="oldpassword"
                secureTextEntry={true}
                placeholder="Old Password"
                style={styles.input}
                value={this.state.oldPassword}
                onChangeText={oldpassword => this.setState ({oldpassword})}
                onSubmitEditing={event => {
                  this.refs.newpassword1.focus ();
                }}
                returnKeyType="next"
              />
            </View>
            {oldPasswordError != ''
              ? <Text style={{color: 'red', marginLeft: 10}}>
                  {oldPasswordError}
                </Text>
              : null}

            <View>
              <TextInput
                ref="newpassword1"
                secureTextEntry={true}
                placeholder="New Password"
                style={styles.input}
                value={this.state.newpassword1}
                onChangeText={newpassword1 => this.setState ({newpassword1})}
                onSubmitEditing={event => {
                  this.refs.newpassword2.focus ();
                }}
                returnKeyType="next"
              />
            </View>
            {newPasswordError1 != ''
              ? <Text style={{color: 'red', marginLeft: 10}}>
                  {newPasswordError1}
                </Text>
              : null}

            <View>
              <TextInput
                ref="newpassword2"
                secureTextEntry={true}
                placeholder="Retype Password"
                style={styles.input}
                value={this.state.password}
                onChangeText={newpassword2 => this.setState ({newpassword2})}
                onSubmitEditing={event => {
                  this.refs.newpassword2.focus ();
                }}
                returnKeyType="next"
              />
            </View>
            {newPasswordError2 != ''
              ? <Text style={{color: 'red', marginLeft: 10}}>
                  {newPasswordError2}
                </Text>
              : null}
            <View style={{marginTop: 50}} />
            <TouchableHighlight
              style={{
                width: '60%',
                height: 40,
                alignItems: 'center',
                alignSelf: 'center',
                padding: 10,
                backgroundColor: color.navyblue,
              }}
              onPress={this.handleSubmit}
            >
              <Text
                style={{fontSize: 16, color: color.white, alignSelf: 'center'}}
              >
                Submit
              </Text>
            </TouchableHighlight>

          </View>
        </View>
        {/* {this.state.isLoading ? <Loader /> : null} */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create ({
  changePassword: {
    flex: 1,
    paddingTop: 20,
    margin: 12,
  },
  input: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    height: 50,
    width: '100%',
    backgroundColor: 'gainsboro',
    color: 'black',
    padding: 5,
    fontSize: 18,
    marginVertical: 10,
  },
});
