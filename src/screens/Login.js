import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Form, Item, Input, Label, Text} from 'native-base';
import RoundedButton from '../components/RoundedButton';
import styles from '../constants/Styles';
import colors from '../constants/Colors';

export default class Signup extends Component {
  render () {
    return (
      <Container>
        <Content>
          <Text
            style={[styles.piccyStyle, {marginTop: 100, alignSelf: 'center'}]}
          >
            Log in to your account
          </Text>
          <Form>
            <Item floatingLabel>
              <Label>Email or username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <RoundedButton text="Log in" />
        </Content>
      </Container>
    );
  }
}
