import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  FlatList,
} from 'react-native';
import color from '../constants/Colors';
import {
  Ionicons,
  FontAwesome,
  Entypo,
  Foundation,
  AntDesign,
} from '@expo/vector-icons';
import ClapButton from '../components/ClapButton';
import home from '../api/home.json';
import HomeDetails from '../components/HomeDetails';

const height = Dimensions.get ('window').height;
const width = Dimensions.get ('window').width;

export default class HomeScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={home.items}
          renderItem={home => <HomeDetails home={home.item} />}
          keyExtractor={home => home.id}
          ItemSeparatorComponent={() => (
            <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
          )}
        />
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
    color: 'gray',
  },
  iconStyle: {
    color: 'gray',
  },
  shareIcon: {
    position: 'absolute',
    left: width - 220,
    color: 'gray',
  },
  iconText: {
    marginLeft: 6,
    color: 'gray',
  },
});
