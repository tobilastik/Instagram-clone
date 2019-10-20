import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
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
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
const height = Dimensions.get ('window').height;
const width = Dimensions.get ('window').width;

//const image_source = require('../assets/images/yoga.jpg')

class HomeDetails extends Component {
  constructor (props) {
    super (props);
    this.state = {
      bookmarkIcon: true,
    };
  }
  bookmarkImage = () => {
    this.setState ({bookmarkIcon: !this.state.bookmarkIcon});
  };
  render () {
    const {increment, addComment, removeComment, post, i} = this.props;
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
              style={{position: 'absolute', right: 15}}
            >
              <Ionicons name="ios-more" size={20} color="black" />
            </TouchableHighlight>
          </View>

          <TouchableHighlight>
            <Image
              source={require ('../assets/images/yoga.jpg')}
              style={styles.uploadPicture}
            />
          </TouchableHighlight>

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

              <Ionicons
                name="ios-heart-empty"
                size={30}
                style={styles.iconStyle}
              />

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
                size={28}
                style={styles.iconStyle}
              />

            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}
            >

              <Feather name="send" size={25} style={styles.iconStyle} />

            </TouchableOpacity>

            <TouchableHighlight
              underlayColor="transparent"
              style={{position: 'absolute', right: 6}}
              onPress={() => this.bookmarkImage ()}
            >
              {this.state.bookmarkIcon
                ? <FontAwesome
                    name="bookmark-o"
                    size={30}
                    style={styles.shareIcon}
                  />
                : <FontAwesome
                    name="bookmark"
                    size={30}
                    style={styles.shareIcon}
                  />}
            </TouchableHighlight>
          </View>

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

export default HomeDetails;

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
    color: 'black',
  },
  iconStyle: {
    color: 'black',
  },
  shareIcon: {
    flex: 1,
    color: 'black',
    position: 'absolute',
    right: 4,
  },
  iconText: {
    marginLeft: 6,
    color: 'gray',
  },
});
