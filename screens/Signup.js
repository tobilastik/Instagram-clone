import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Form, Item, Input, Label, Text} from 'native-base';
import RoundedButton from '../components/RoundedButton';
import styles from '../constants/Styles';
import colors from '../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Constants, WebBrowser} from 'expo';

export default class Signup extends Component {
  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync ('https://expo.io');
  };

  render () {
    return (
      <Container>

        <Content>
          <Text
            style={[styles.piccyStyle, {marginTop: 100, alignSelf: 'center'}]}
          >
            Create your account
          </Text>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={{justifyContent: 'center', padding: 10}}>
            <Text>
              By signing up, you agree to the
            </Text>
            <TouchableOpacity onPress={this._handleOpenWithWebBrowser}>
              <Text style={{color: colors.navyblue}}>
                {' '}Terms of Service
              </Text>
            </TouchableOpacity>
            <Text> and</Text>
            <TouchableOpacity onPress={this._handleOpenWithWebBrowser}>
              <Text style={{color: colors.navyblue}}>
                {' '}Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
          <RoundedButton text="Sign up" />
        </Content>
      </Container>
    );
  }
}
