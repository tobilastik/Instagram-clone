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
import ClapBubble from './ClapBubble';

export default class ClapButton extends Component {
  constructor (props) {
    super (props);
    this.state = {
      claps: [],
      count: 0,
    };
  }

  onClap = () => {
    let count = this.state.count;
    let claps = this.state.claps;
    count++;
    claps.push (count);
    this.setState ({count});
    console.log (claps);
  };

  animationComplete (countNum) {
    claps = this.state.claps;
    claps.splice (claps.indexOf (countNum), 1);
    this.setState ({claps});
  }

  renderClaps () {
    return this.state.claps.map (countNum => (
      <ClapBubble
        key={countNum}
        count={countNum}
        animationComplete={this.animationComplete.bind (this)}
      />
    ));
  }

  keepClapping = () => {
    this.keepClap = setInterval (() => {
      this.onClap ();
    }, 150);
  };

  stopClapping () {
    if (this.keepClap) {
      clearInterval (this.keepClap);
    }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        {this.renderClaps ()}
        <TouchableOpacity
          onPress={() => this.onClap ()}
          onPressIn={() => this.keepClapping ()}
          onPressOut={() => this.stopClapping ()}
          activeOpacity={0.6}
          style={styles.clapbutton}
        >
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
