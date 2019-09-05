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
    ]).start ();
  }

  render () {
    let animationStyle = {
      transform: [{translateY: this.state.yPosition}],
      opacity: this.state.opacity,
    };
    return (
      <View style={{flex: 1}}>
        <Animated.View style={[animationStyle, styles.clapBubble]}>
          <Text style={styles.clapText}>+1</Text>
        </Animated.View>
        <TouchableOpacity style={styles.clapbutton}>
          <Image
            style={styles.clap}
            source={require ('../assets/images/clap.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  clap: {
    height: 60,
    width: 50,
  },
  clapbutton: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#ecf0f1',
    bottom: 40,
    right: 10,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

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
