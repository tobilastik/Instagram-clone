import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Content,
  Item,
  Input,
  Title,
  Body,
  Right,
} from 'native-base';
import styles from '../constants/Styles';
import SmallButton from '../components/SmallButton';

export default class Forgetpassword extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button hasText transparent>
              <Text style={{color: 'blue'}}>Cancel</Text>
            </Button>
          </Left>
          <Body>
            <Title>Reset Password</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 27,
              marginBottom: 15,
              padding: 10,
            }}
          >
            Find your PiccyHub account
          </Text>
          <Item rounded>
            <Input placeholder="Enter your email address" />
          </Item>
          <SmallButton text="Search" handleOnPress={this.handleSignUp} />
        </Content>
      </Container>
    );
  }
}
