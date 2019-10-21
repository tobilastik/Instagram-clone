import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import color from '../constants/Colors';
import home from '../api/home.json';
import HomeDetails from '../components/HomeDetails';
import {Feather, MaterialIcons} from '@expo/vector-icons';
import Story from '../components/Story';

const height = Dimensions.get ('window').height;
const width = Dimensions.get ('window').width;

console.disableYellowBox = true;

class HomeScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            marginVertical: 14,
          }}
        >
          <TouchableOpacity>
            <Feather name="camera" size={28} color="black" />
          </TouchableOpacity>
          <View
            style={{
              paddingLeft: width / 4.5,
            }}
          >
            <Text style={{fontSize: 32, fontWeight: '600'}}>
              Instagram
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              paddingVertical: 10,
              right: 0,
            }}
          >
            <TouchableOpacity style={{marginRight: 20}}>
              <MaterialIcons name="live-tv" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginRight: 14}}
              onPress={() => this.props.navigation.navigate ('Messages')}
            >
              <Feather name="send" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.container}>
          <Story />

          <FlatList
            data={home.items}
            renderItem={home => <HomeDetails home={home.item} />}
            keyExtractor={home => home.id}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create ({
  container: {
    //flex: 1,
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
