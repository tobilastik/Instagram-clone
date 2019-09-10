import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ForumItem extends Component {
  render () {
    let forum = this.props.forum;
    return (
      <View style={styles.container}>

        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => alert ('Coming soon...')}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={{uri: forum.snippet.thumbnails.medium.url}}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
            <View style={{paddingLeft: 10}}>

              <Text numberOfLines={2} style={{fontSize: 16, fontWeight: '500'}}>
                {forum.snippet.title}
                {' '}
              </Text>
              <Text style={{color: 'gray', fontSize: 12}}>
                1 HOUR AGO | BY YUIKO{' '}
              </Text>
            </View>
            <Ionicons
              name="ios-arrow-forward"
              style={{position: 'absolute', right: 10}}
              size={20}
            />
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    paddingTop: 20,
  },
});
