import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import color from '../constants/Colors';

export default class Story extends Component {
  render () {
    return (
      <View style={{borderBottomWidth: 0.25, borderBottomColor: 'lightgray'}}>
        <ScrollView
          contentContainerStyle={{
            marginHorizontal: 6,
            paddingBottom: 10,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{alignItems: 'center', padding: 2}}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                source={require ('../assets/images/welcome5.jpg')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginHorizontal: 8,
                  marginBottom: 4,
                  borderWidth: 1.5,
                  borderColor: 'red',
                }}
              />
              <View style={{position: 'absolute', bottom: 0, right: 6}}>
                <Ionicons name="ios-add-circle" color={color.blue} size={20} />
              </View>
            </TouchableOpacity>
            <Text>Your Story</Text>
          </View>
          <View style={{alignItems: 'center', padding: 2}}>
            <Image
              source={require ('../assets/images/welcome5.jpg')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginHorizontal: 8,
                marginBottom: 4,
                borderWidth: 1.5,
                borderColor: 'red',
              }}
            />
            <Text>tobilastik</Text>
          </View>
          <View style={{alignItems: 'center', padding: 2}}>
            <Image
              source={require ('../assets/images/welcome5.jpg')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginHorizontal: 8,
                marginBottom: 4,
                borderWidth: 1.5,
                borderColor: 'red',
              }}
            />
            <Text>shadownet</Text>
          </View>
          <View style={{alignItems: 'center', padding: 2}}>
            <Image
              source={require ('../assets/images/welcome5.jpg')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginHorizontal: 12,
                marginBottom: 4,
                borderWidth: 1.5,
                borderColor: 'red',
              }}
            />
            <Text>reactnative</Text>
          </View>
          <View style={{alignItems: 'center', padding: 2}}>
            <Image
              source={require ('../assets/images/welcome5.jpg')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginHorizontal: 12,
                marginBottom: 4,
                borderWidth: 1.5,
                borderColor: 'red',
              }}
            />
            <Text>developer</Text>
          </View>
          <View style={{alignItems: 'center', padding: 2}}>
            <Image
              source={require ('../assets/images/welcome5.jpg')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginHorizontal: 12,
                marginBottom: 4,
                borderWidth: 1.5,
                borderColor: 'red',
              }}
            />
            <Text>dveloper</Text>
          </View>
          <View style={{alignItems: 'center', padding: 2}}>
            <Image
              source={require ('../assets/images/welcome5.jpg')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginHorizontal: 12,
                marginBottom: 4,
                borderWidth: 1.5,
                borderColor: 'red',
              }}
            />
            <Text>dveloper</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
