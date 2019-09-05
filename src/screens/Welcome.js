import React, {Component} from 'react';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';
import color from '../constants/Colors';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

const width = Dimensions.get ('window').width;
const height = Dimensions.get ('window').height;

export default class SwiperComponent extends Component {
  static navigationOptions = {
    header: null,
  };

  render () {
    return (
      <View style={{flex: 1}}>
        <Swiper
          style={styles.wrapper}
          autoplayTimeout={3}
          showsButtons={false}
          autoplay={true}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                bottom: 100,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'white',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                bottom: 100,
              }}
            />
          }
        >

          <View style={styles.slide1}>
            <ImageBackground
              source={require ('../assets/images/welcome1.jpg')}
              style={{height: '100%', width: '100%'}}
            >
              <View
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 20,
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: color.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 50,
                  }}
                >
                  <Ionicons name="ios-cash" size={60} color={color.navyblue} />
                </View>
                <Text style={styles.text}>ILLUSTRATOR</Text>

                <Text
                  style={{
                    marginTop: 42,
                    color: 'white',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
              </View>
            </ImageBackground>

          </View>
          <View style={styles.slide2}>
            <ImageBackground
              source={require ('../assets/images/welcome2.jpg')}
              style={{height: '100%', width: '100%'}}
            >

              <View
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 20,
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: color.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 50,
                  }}
                >
                  <Ionicons name="md-cash" size={60} color={color.navyblue} />
                </View>

                <Text style={styles.text}>UI/UX</Text>

                <Text
                  style={{
                    marginTop: 42,
                    color: 'white',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
              </View>

            </ImageBackground>
          </View>
          <View style={styles.slide3}>
            <ImageBackground
              source={require ('../assets/images/welcome3.jpg')}
              style={{height: '100%', width: '100%'}}
            >

              <View
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 20,
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: color.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 50,
                  }}
                >
                  <MaterialCommunityIcons
                    name="bank-transfer"
                    size={60}
                    color={color.navyblue}
                  />
                </View>
                <Text style={styles.text}>ARCHITECTURE</Text>

                <Text
                  style={{
                    marginTop: 22,
                    color: 'white',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
              </View>

            </ImageBackground>
          </View>
          <View style={styles.slide4}>
            <ImageBackground
              source={require ('../assets/images/welcome4.jpg')}
              style={{height: '100%', width: '100%'}}
            >

              <View
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 20,
                  height: '100%',
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: color.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 50,
                  }}
                >
                  <MaterialCommunityIcons
                    name="finance"
                    size={60}
                    color={color.navyblue}
                  />
                </View>
                <Text style={styles.text}>PHOTOGRAPHY</Text>

                <Text
                  style={{
                    marginTop: 22,
                    color: 'white',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
              </View>

            </ImageBackground>
          </View>
          <View style={styles.slide4}>
            <ImageBackground
              source={require ('../assets/images/welcome5.jpg')}
              style={{height: '100%', width: '100%'}}
            >

              <View
                style={{
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  padding: 20,
                  height: '100%',
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    backgroundColor: color.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 50,
                  }}
                >
                  <MaterialCommunityIcons
                    name="finance"
                    size={60}
                    color={color.navyblue}
                  />
                </View>
                <Text style={styles.text}>GRAPHICS DESIGN</Text>

                <Text
                  style={{
                    marginTop: 22,
                    color: 'white',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
              </View>

            </ImageBackground>
          </View>

        </Swiper>
        <View style={{position: 'absolute', alignSelf: 'center', bottom: 8}}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate ('Home')}
            underlayColor="transparent"
            style={{
              height: 50,
              width: 100,
              borderColor: 'white',
              borderRadius: 40,
              borderWidth: 0.8,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 15,
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
          >
            <Text style={{fontSize: 17, color: color.white}}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BB22',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
  },
});
