import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import {AntDesign} from '@expo/vector-icons';

class CardComponent extends Component {
  render () {
    const images = {
      '1': require ('../assets/images/chess.jpg'),
      '2': require ('../assets/images/photoshop.jpg'),
      '3': require ('../assets/images/fitness.jpg'),
    };

    return (
      <Card>

        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>

        <CardItem style={{height: 20, marginTop: 10}}>
          <Text>{this.props.likes} likes </Text>
          <Text> | {this.props.claps} claps</Text>

        </CardItem>
        <TouchableHighlight onPress={() => alert ('to comments page')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 10,
              marginTop: 10,
            }}
          >

            <Text style={{color: 'gray', marginLeft: 10}}>
              View all comments...
            </Text>
          </View>
        </TouchableHighlight>
        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight: '900'}}>Tobilastik </Text>
              Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;
