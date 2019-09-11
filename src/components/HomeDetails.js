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
import home from '../api/home.json';
import {
  Ionicons,
  FontAwesome,
  Entypo,
  Foundation,
  AntDesign,
} from '@expo/vector-icons';
import ClapButton from '../components/ClapButton';

const height = Dimensions.get ('window').height;
const width = Dimensions.get ('window').width;

export default class HomeDetails extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    let home = this.props.home;
    return (
      <View style={{paddingBottom: 30, paddingTop: 10}}>
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
            <Text style={styles.textStyle}>{home.snippet.name}</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.props.navigation.navigate ('ClapButton')}
              style={{position: 'absolute', right: 5}}
            >
              <Text style={{color: 'gray'}}>{home.snippet.time}</Text>
            </TouchableHighlight>
          </View>

          <TouchableHighlight>
            <Image
              source={require ('../assets/images/yoga.jpg')}
              style={styles.uploadPicture}
            />
          </TouchableHighlight>
          <View>
            <ClapButton />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 12,
              justifyContent: 'flex-start',
            }}
          >
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
            >

              <Foundation name="heart" size={25} style={styles.iconStyle} />
              <Text style={styles.iconText}>{home.snippet.likes}</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}
            >

              <FontAwesome
                name="comment-o"
                size={22}
                style={styles.iconStyle}
              />
              <Text style={styles.iconText}>
                {nFormatter (home.snippet.comments)}
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}
            >

              <Ionicons name="ios-eye" size={25} style={styles.iconStyle} />
              <Text style={styles.iconText}>
                {nFormatter (home.snippet.views)}
              </Text>

            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo
                name="share-alternative"
                size={20}
                style={styles.shareIcon}
              />
            </TouchableOpacity>
          </View>
          <TouchableHighlight onPress={() => alert ('to comments page')}>
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 10}}>

              <AntDesign name="github" size={20} color="gray" />
              <Text style={{color: 'gray', marginLeft: 10}}>
                View all comments...
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

nFormatter = (num, digits) => {
  var si = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: 'k'},
    {value: 1e6, symbol: 'M'},
    {value: 1e9, symbol: 'G'},
    {value: 1e12, symbol: 'T'},
    {value: 1e15, symbol: 'P'},
    {value: 1e18, symbol: 'E'},
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed (digits).replace (rx, '$1') + si[i].symbol;
};

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
    borderColor: 'red',
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
    flex: 1,
    color: 'gray',
    position: 'absolute',
    left: width - 230,
  },
  iconText: {
    marginLeft: 6,
    color: 'gray',
  },
});
