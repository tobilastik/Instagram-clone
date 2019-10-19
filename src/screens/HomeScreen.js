import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Dimensions, FlatList} from 'react-native';
import color from '../constants/Colors';
import home from '../api/home.json';
import HomeDetails from '../components/HomeDetails';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addComment, removeComment} from '../store/actions/comments.actions';
import {increment} from '../store/actions/likes.action';

const height = Dimensions.get ('window').height;
const width = Dimensions.get ('window').width;

class HomeScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={home.items}
          renderItem={home => <HomeDetails home={home.item} />}
          keyExtractor={home => home.id}
          ItemSeparatorComponent={() => (
            <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />
          )}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps (state) {
  return {
    likes: state.likes,
    comments: state.comments,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({addComment, removeComment, increment}, dispatch);
}
export default connect (mapStateToProps, mapDispatchToProps) (HomeScreen);

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
    borderColor: color.red,
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
    color: 'gray',
  },
  iconStyle: {
    color: 'gray',
  },
  shareIcon: {
    position: 'absolute',
    left: width - 220,
    color: 'gray',
  },
  iconText: {
    marginLeft: 6,
    color: 'gray',
  },
});
