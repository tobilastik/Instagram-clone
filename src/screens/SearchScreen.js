import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {Header, Item, Icon, Input} from 'native-base';
import {MaterialIcons, FontAwesome} from '@expo/vector-icons';

const {width} = Dimensions.get ('window');
class SearchScreen extends Component {
  componentDidMount () {
    this.startHeaderHeight = 200;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render () {
    return (
      <SafeAreaView style={[styles.container]}>
        <View style={{flex: 1}}>
          <Header
            style={{height: 60}}
            searchBar
            backgroundColor="white"
            rounded
          >
            <Item style={{backgroundColor: 'lightgray'}}>
              <Icon name="ios-search" />
              <Input
                placeholder="Search"
                onChangeText={this.props.onChangeText}
                returnKeyType="search"
                onSubmitEditing={this.props.userSearch}
              />
            </Item>
          </Header>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: '#f6f7f9', paddingTop: 10}}>

              <View
                style={{height: 130, marginTop: 1, backgroundColor: '#f6f7f9'}}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={{...styles.category, flexDirection: 'row'}}>
                    <MaterialIcons name="live-tv" size={18} />
                    <Text
                      style={{fontSize: 18, fontWeight: 'bold', marginLeft: 6}}
                    >
                      IGTV
                    </Text>
                  </View>
                  <View style={{...styles.category, flexDirection: 'row'}}>
                    <FontAwesome name="shopping-bag" size={18} />
                    <Text
                      style={{fontSize: 18, fontWeight: 'bold', marginLeft: 6}}
                    >
                      Shop
                    </Text>
                  </View>

                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Style
                    </Text>
                  </View>
                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Beauty
                    </Text>
                  </View>
                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Music
                    </Text>
                  </View>
                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Decor
                    </Text>
                  </View>
                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      TV & Movies
                    </Text>
                  </View>
                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Animals
                    </Text>
                  </View>
                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Humor
                    </Text>
                  </View>
                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Gaming
                    </Text>
                  </View>
                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Sports
                    </Text>
                  </View>

                  <View style={styles.category}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Comics
                    </Text>
                  </View>
                </ScrollView>
              </View>
              <View>
                <View style={{marginTop: -60}}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Image
                        style={{
                          flex: 1,
                          height: 100,
                          width: width / 3,
                          resizeMode: 'cover',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: '#dddddd',
                        }}
                        source={require ('../assets/images/graphic-design.jpeg')}
                      />
                      <Image
                        style={{
                          flex: 1,
                          height: 100,
                          width: width / 3,
                          resizeMode: 'cover',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: '#dddddd',
                        }}
                        source={require ('../assets/images/chess.jpg')}
                      />
                    </View>
                    <Image
                      style={{
                        flex: 1,
                        height: 200,
                        width: width,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/pizza.jpg')}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>

                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/photography.jpeg')}
                    />
                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/architecture.jpg')}
                    />
                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/messi.jpg')}
                    />
                  </View>

                  <View style={{flexDirection: 'row'}}>

                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/ronaldo.jpg')}
                    />
                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/photoshop.jpg')}
                    />
                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/pizza.jpg')}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>

                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/raymond.jpg')}
                    />
                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/welcome1.jpg')}
                    />
                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/welcome2.jpg')}
                    />
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        flex: 1,
                        height: 200,
                        width: width,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/welcome5.jpg')}
                    />
                    <View>
                      <Image
                        style={{
                          flex: 1,
                          height: 100,
                          width: width / 3,
                          resizeMode: 'cover',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: '#dddddd',
                        }}
                        source={require ('../assets/images/yoga.jpg')}
                      />
                      <Image
                        style={{
                          flex: 1,
                          height: 100,
                          width: width / 3,
                          resizeMode: 'cover',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: '#dddddd',
                        }}
                        source={require ('../assets/images/welcome3.jpg')}
                      />
                    </View>

                  </View>
                  <View style={{flexDirection: 'row'}}>

                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/raymond.jpg')}
                    />
                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/messi.jpg')}
                    />
                    <Image
                      style={{
                        flex: 1,
                        height: 150,
                        width: width / 3,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/chess.jpg')}
                    />
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        flex: 1,
                        height: 400,
                        width: width,
                        resizeMode: 'cover',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                      }}
                      source={require ('../assets/images/ronaldo.jpg')}
                    />
                    <View>
                      <Image
                        style={{
                          flex: 1,
                          height: 100,
                          width: width / 3,
                          resizeMode: 'cover',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: '#dddddd',
                        }}
                        source={require ('../assets/images/background.jpg')}
                      />
                      <Image
                        style={{
                          flex: 1,
                          height: 100,
                          width: width / 3,
                          resizeMode: 'cover',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: '#dddddd',
                        }}
                        source={require ('../assets/images/fitness.jpg')}
                      />
                      <Image
                        style={{
                          flex: 1,
                          height: 100,
                          width: width / 3,
                          resizeMode: 'cover',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: '#dddddd',
                        }}
                        source={require ('../assets/images/chess.jpg')}
                      />
                      <Image
                        style={{
                          flex: 1,
                          height: 100,
                          width: width / 3,
                          resizeMode: 'cover',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: '#dddddd',
                        }}
                        source={require ('../assets/images/fitness.jpg')}
                      />
                    </View>

                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }
}
export default SearchScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f7f9',
    top: Platform.OS == 'android' ? 20 : 0,
  },
  category: {
    backgroundColor: 'white',
    padding: 5,
    height: 50,
    //width: '100%',
    borderColor: 'lightgray',
    borderWidth: 0.5,
    padding: 15,
    marginHorizontal: 6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
});
