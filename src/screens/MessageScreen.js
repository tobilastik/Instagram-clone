import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {TouchableOpacity, View, Text, Dimensions, Image} from 'react-native';
import {Feather, MaterialIcons, Ionicons} from '@expo/vector-icons';

const width = Dimensions.get ('window').width;

export default class MessageScreen extends React.Component {
  state = {
    messages: [],
  };

  componentWillMount () {
    this.setState ({
      messages: [
        {
          _id: 1,
          text: 'Hello tobilastik',
          createdAt: new Date (),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend (messages = []) {
    this.setState (previousState => ({
      messages: GiftedChat.append (previousState.messages, messages),
    }));
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            marginVertical: 16,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="ios-arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <View
            style={{
              paddingLeft: width / 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require ('../assets/images/avatar.png')}
              style={{height: 30, width: 30, borderRadius: 15, marginRight: 6}}
            />
            <View>
              <Text style={{fontSize: 22, fontWeight: '500'}}>
                tobilastik
              </Text>
              <Text style={{color: 'gray'}}>Active 1h ago</Text>
            </View>
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
              <Feather name="video" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginRight: 14}}
              onPress={() => this.props.navigation.navigate ('Messages')}
            >
              <Ionicons
                name="ios-information-circle-outline"
                size={28}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend (messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}
