import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import color from '../constants/Colors';

export default class ClapButton extends Component {
  constructor (props) {
    super (props);
    this.state = {
      yPosition: new Animated.Value (0),
      opacity: new Animated.Value (0),
      claps: [],
      count: 0,
    };
  }

  componentDidMount () {
    Animated.parallel ([
      Animated.timing (this.state.yPosition, {
        toValue: -150,
        duration: 500,
      }),
      Animated.timing (this.state.opacity, {
        toValue: 1,
        duration: 500,
      }),
    ]).start (() => {
      setTimeout (() => {
        this.props.animationComplete (this.props.count);
      }, 500);
    });
  }

  onClap = () => {
    let count = this.state.count;
    let claps = this.state.claps;
    count++;
    claps.push (count);
    this.setState ({count});
    console.log (claps);
  };
  render () {
    let animationStyle = {
      transform: [{translateY: this.state.yPosition}],
      opacity: this.state.opacity,
    };
    return (
      <Animated.View style={[animationStyle, styles.clapBubble]}>
        <Text style={styles.clapText}>{this.props.count}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create ({
  clapBubble: {
    elevation: 4,
    backgroundColor: '#55BE6F',
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: 40,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clapText: {
    color: color.white,
    fontSize: 20,
  },
});
