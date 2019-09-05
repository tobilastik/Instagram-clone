import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import color from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

const height = Dimensions.get ('window').height;

export default class HomeScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={require ('../assets/images/yoga.jpg')}
              style={styles.profilePicture}
            />
            <Text style={styles.textStyle}>Vladmir Putin</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.props.navigation.navigate ('ClapButton')}
              style={{position: 'absolute', right: 5}}
            >
              <Ionicons name="ios-more" size={20} />
            </TouchableHighlight>
          </View>

          <TouchableHighlight>
            <Image
              source={require ('../assets/images/yoga.jpg')}
              style={styles.uploadPicture}
            />
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    //margin: 14,
    marginVertical: 12,
  },
  profilePicture: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: color.red,
    borderWidth: 0.6,
    marginRight: 10,
    marginLeft: 10,
  },
  uploadPicture: {
    height: height - 250,
    width: '100%',
    marginTop: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
  },
});
