import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Ionicons} from '@expo/vector-icons';
import ForumItem from '../components/ForumItem';
import forum from '../api/forum.json';

const posts = [
  {
    label: 'Most Recent',
    value: 'Most Recent',
  },
  {
    label: 'Most Discussed',
    value: 'Most Discussed',
  },
];

export default class Forum extends Component {
  constructor (props) {
    super (props);
    this.state = {
      post: '',
    };
  }

  render () {
    const placeholder = {
      label: 'Select...',
      value: null,
      color: '#9EA0A4',
    };
    return (
      <View style={{margin: 12}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 12}}
        >
          <Text style={{fontSize: 18}}>Order posts by: </Text>
          <RNPickerSelect
            placeholder={placeholder}
            items={posts}
            onValueChange={post => this.setState ({post})}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 10,
                right: 12,
              },
            }}
            value={this.state.post}
            useNativeAndroidPickerStyle={false}
            textInputProps={{underlineColor: 'yellow'}}
            Icon={() => {
              return (
                <Ionicons
                  name="ios-arrow-dropdown-circle"
                  size={24}
                  color="gray"
                />
              );
            }}
          />
        </View>

        <View style={styles.body}>
          <FlatList
            data={forum.items}
            renderItem={forum => <ForumItem forum={forum.item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
            )}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({});

const pickerSelectStyles = StyleSheet.create ({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#539eff',
    borderRadius: 4,
    color: 'black',
    width: 200,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginLeft: 20,
    borderBottomColor: '#539eff',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#539eff',
    borderRadius: 8,
    width: 200,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
