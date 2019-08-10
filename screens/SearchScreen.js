import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/Category';
import Home from '../components/Home';
const {height, width} = Dimensions.get ('window');
import {Header, Item, Icon, Input} from 'native-base';

class SearchScreen extends Component {
  componentWillMount () {
    this.startHeaderHeight = 80;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header style={{height: 80}} searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input
                placeholder="Search Piccyhub"
                onChangeText={this.props.onChangeText}
                returnKeyType="search"
                onSubmitEditing={this.props.userSearch}
              />
            </Item>
          </Header>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
              <Text
                style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}
              >
                Explore Categories....
              </Text>

              <View style={{height: 130, marginTop: 20}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require ('../assets/images/ui-ux.png')}
                    name="UI/UX"
                  />
                  <Category
                    imageUri={require ('../assets/images/graphic-design.jpeg')}
                    name="Graphic Design"
                  />
                  <Category
                    imageUri={require ('../assets/images/photography.jpeg')}
                    name="Photography"
                  />
                  <Category
                    imageUri={require ('../assets/images/architecture.jpg')}
                    name="Architecture"
                  />
                  <Category
                    imageUri={require ('../assets/images/photoshop.jpg')}
                    name="Photoshop"
                  />

                  <Category
                    imageUri={require ('../assets/images/fitness.jpg')}
                    name="Sketch"
                  />
                  <Category
                    imageUri={require ('../assets/images/fitness.jpg')}
                    name="Illustration"
                  />
                </ScrollView>
              </View>
              <View style={{marginTop: 40, paddingHorizontal: 20}}>
                <Text style={{fontSize: 24, fontWeight: '700'}}>
                  Introducing Piccyhub
                </Text>
                <Text style={{fontWeight: '100', marginTop: 10}}>
                  This Week Best Project

                </Text>
                <View style={{width: width - 40, height: 200, marginTop: 20}}>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
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
            <View style={{marginTop: 40}}>
              <Text
                style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}
              >
                Suggestions
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
              >
                <Home
                  width={width}
                  name="Oppo Renoz"
                  type="Cain Yew"
                  rating={4}
                />
                <Home
                  width={width}
                  name="Velvet Winter"
                  type="Joel Manah"
                  rating={5}
                />
                <Home
                  width={width}
                  name="Tokyo Part One"
                  type="Mike Grabiel"
                  rating={2}
                />

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
  },
});
