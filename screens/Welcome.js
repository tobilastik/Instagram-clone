import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import styles from '../constants/Styles';
import RoundedButton from '../components/RoundedButton';

export default class Welcome extends Component {
  onPress = () => {
    alert ('HI');
  };

  handleSignUp = () => {
    this.props.navigation.navigate ('Signup');
  };
  render () {
    return (
      <View style={styles.welcomeContainer}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 20,
            alignItems: 'center',
          }}
        >
          <Image
            style={{height: 50, width: 50}}
            source={require ('../assets/images/logo.png')}
          />
          <Text style={styles.piccyStyle}> PiccyHub </Text>
        </View>
        <Text style={styles.textStyle}>Let your creativity fuel you...</Text>
        <View style={styles.bottomView}>
          <RoundedButton text="Sign Up" handleOnPress={this.handleSignUp} />
          <Button title="Log In" onPress={this.onPress} />
        </View>
      </View>
    );
  }
}
