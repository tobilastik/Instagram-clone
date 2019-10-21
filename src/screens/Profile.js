import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  StatusBar,
  Platform,
} from 'react-native';

import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Right,
  Button,
} from 'native-base';
import {MaterialIcons, Octicons} from 'react-native-vector-icons';
import CardComponent from '../components/CardComponent';
import {Feather, Ionicons, FontAwesome} from '@expo/vector-icons';
import color from '../constants/Colors';

var {height, width} = Dimensions.get ('window');
var images = [
  require ('../assets/images/chess.jpg'),
  require ('../assets/images/photoshop.jpg'),
  require ('../assets/images/fitness.jpg'),
  require ('../assets/images/chess.jpg'),
  require ('../assets/images/photoshop.jpg'),
  require ('../assets/images/fitness.jpg'),
  require ('../assets/images/chess.jpg'),
  require ('../assets/images/photoshop.jpg'),
  require ('../assets/images/fitness.jpg'),
];

var images2 = [
  require ('../assets/images/photoshop.jpg'),
  require ('../assets/images/architecture.jpg'),
  require ('../assets/images/ui-ux.png'),
  require ('../assets/images/photography.jpeg'),
];

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="person" style={{color: tintColor}} />
    ),
  };

  constructor (props) {
    super (props);

    this.state = {
      activeIndex: 0,
    };
  }

  segmentClicked (index) {
    this.setState ({
      activeIndex: index,
    });
  }
  checkActive = index => {
    if (this.state.activeIndex !== index) {
      return {color: 'grey'};
    } else {
      return {};
    }
  };

  renderSectionOne () {
    return images.map ((image, index) => {
      return (
        <View
          key={index}
          style={[
            {width: width / 3},
            {height: width / 3},
            {marginBottom: 2},
            index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0},
          ]}
        >
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
            }}
            source={image}
          />

        </View>
      );
    });
  }

  renderSectionTwo () {
    return images2.map ((image2, index) => {
      return (
        <View
          key={index}
          style={[
            {width: width / 3},
            {height: width / 3},
            {marginBottom: 2},
            index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0},
          ]}
        >
          <Image
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
            }}
            source={image2}
          />

        </View>
      );
    });
  }

  renderSection () {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

          {this.renderSectionOne ()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

          {this.renderSectionTwo ()}
        </View>
      );
    }
  }

  componentDidMount () {
    console.log (width);
  }

  render () {
    return (
      <Container style={styles.container}>
        <Header
          style={{
            paddingLeft: 10,
            paddingLeft: 10,
            backgroundColor: 'white',
            paddingTop: 15,
          }}
        >
          <Left>
            <Icon name="md-person-add" />
          </Left>
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: '400', fontSize: 22}}>tobilastik</Text>
          </View>
          <Right>
            <Feather name="menu" style={{fontSize: 32}} />
          </Right>
        </Header>

        <Content>

          <View style={{paddingTop: 10}}>

            {/** User Photo Stats**/}
            <View style={{flexDirection: 'row'}}>

              {/**User photo takes 1/3rd of view horizontally **/}
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Image
                  source={require ('../assets/images/welcome5.jpg')}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    marginHorizontal: 8,
                    marginBottom: 4,
                    borderWidth: 1.5,
                    borderColor: 'red',
                  }}
                />
                <View style={{position: 'absolute', bottom: 0, right: 6}}>
                  <Ionicons
                    name="ios-add-circle"
                    color={color.blue}
                    size={24}
                  />
                </View>
              </TouchableOpacity>
              {/**User Stats take 2/3rd of view horizontally **/}
              <View style={{flex: 3}}>

                {/** Stats **/}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                  }}
                >
                  <View style={{alignItems: 'center', marginTop: 22}}>
                    <Text style={{fontSize: 22}}>22</Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>Posts</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 22}}>225</Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>Followers</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 22}}>227</Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>Following</Text>
                  </View>
                </View>

              </View>
            </View>

            <View style={{paddingBottom: 10}}>
              <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                <Text style={{fontWeight: 'bold'}}>Raji Oluwatobiloba</Text>
                <Text>Software Developer</Text>
                <Text>bit.ly/2BoH3A9</Text>
              </View>
            </View>
            {/**Edit profile and Settings Buttons **/}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                paddingTop: 10,
              }}
            >

              <View style={{flexDirection: 'row'}}>

                {/** Edit profile takes up 3/4th **/}
                <TouchableHighlight
                  style={{
                    flex: 3,
                    marginLeft: 10,
                    justifyContent: 'center',
                    height: 30,
                    borderColor: 'lightgray',
                    borderWidth: 0.4,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    marginHorizontal: 12,
                  }}
                >
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Edit Profile
                  </Text>
                </TouchableHighlight>

              </View>
            </View>{/**End edit profile**/}

          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 1,
                borderTopColor: '#eae5e5',
              }}
            >
              <Button
                onPress={() => this.segmentClicked (0)}
                transparent
                active={this.state.activeIndex == 0}
              >
                <FontAwesome
                  name="table"
                  style={[
                    {fontSize: 26},
                    this.state.activeIndex == 0 ? {} : {color: 'grey'},
                  ]}
                />
              </Button>
              <Button
                onPress={() => this.segmentClicked (1)}
                transparent
                active={this.state.activeIndex == 1}
              >
                <MaterialIcons
                  name="person-pin"
                  style={[
                    {fontSize: 26},
                    this.state.activeIndex == 1 ? {} : {color: 'grey'},
                  ]}
                />
              </Button>

            </View>
            {this.renderSection ()}
          </View>
        </Content>
      </Container>
    );
  }
}
export default ProfileTab;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f6f7f9',
  },
});
