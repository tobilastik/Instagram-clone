import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import colors from '../constants/Colors';

export default class SmallButton extends Component {
  render () {
    const {text, handleOnPress} = this.props;
    return (
      <TouchableOpacity
        style={styles.smallButton}
        onPress={handleOnPress}
        underlayColor="transparent"
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 5,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
