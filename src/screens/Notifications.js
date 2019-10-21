import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import color from '../constants/Colors';

export default class Notifications extends Component {
  con;
  render () {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#f6f7f9',
            top: 20,
            width: '100%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
        >
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Activity</Text>
        </View>

        <ScrollView style={{marginTop: 30}}>
          <View style={{marginHorizontal: 14}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Yesterday</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/raymond.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              raymond
            </Text>
            <Text style={{fontSize: 16}}> shared their first post. </Text>
            <Text style={{color: 'gray'}}>1d</Text>
            <Image
              source={require ('../assets/images/raymond.jpg')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          />

          <View style={{marginHorizontal: 14, marginTop: 16}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>This Week</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/ronaldo.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              ronaldo
            </Text>
            <Text style={{fontSize: 16}}> tagged you in a post. </Text>
            <Text style={{color: 'gray'}}>3d</Text>
            <Image
              source={require ('../assets/images/ronaldo.jpg')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          />

          <View style={{marginHorizontal: 14, marginTop: 16}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>This Month</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/photoshop.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              bright_nims
            </Text>
            <Text style={{fontSize: 16}}> liked your photo. </Text>
            <Text style={{color: 'gray'}}>1w</Text>
            <Image
              source={require ('../assets/images/ronaldo.jpg')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/messi.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              ronaldo
            </Text>
            <Text style={{fontSize: 16}}> started following you. </Text>
            <Text style={{color: 'gray'}}>4w</Text>
            <TouchableHighlight
              style={{
                backgroundColor: color.blue,
                padding: 10,
                position: 'absolute',
                right: 0,
                borderRadius: 7,
                width: 80,
                alignItems: 'center',
              }}
            >
              <Text style={{fontSize: 18, color: color.white}}>Follow</Text>
            </TouchableHighlight>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/pizza.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              pizza
            </Text>
            <Text style={{fontSize: 16}}> started following you. </Text>
            <Text style={{color: 'gray'}}>5w</Text>
            <Image
              source={require ('../assets/images/pizza.jpg')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/chess.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              chess
            </Text>
            <Text style={{fontSize: 16}}> tagged you in a post. </Text>
            <Text style={{color: 'gray'}}>1m</Text>
            <Image
              source={require ('../assets/images/chess.jpg')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/avatar.png')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              designer
            </Text>
            <Text style={{fontSize: 16}}> tagged you in a post. </Text>
            <Text style={{color: 'gray'}}>1m</Text>
            <Image
              source={require ('../assets/images/background.jpg')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/ui-ux.png')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              new_person
            </Text>
            <Text style={{fontSize: 16}}> shared their first post. </Text>
            <Text style={{color: 'gray'}}>3d</Text>
            <Image
              source={require ('../assets/images/ui-ux.png')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/welcome1.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              lanner
            </Text>
            <Text style={{fontSize: 16}}> tagged you in a post. </Text>
            <Text style={{color: 'gray'}}>3d</Text>
            <Image
              source={require ('../assets/images/welcome1.jpg')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 12,
              marginHorizontal: 14,
            }}
          >
            <Image
              source={require ('../assets/images/welcome2.jpg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'red',
              }}
            />

            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>
              ronaldo
            </Text>
            <Text style={{fontSize: 16}}> tagged you in a post. </Text>
            <Text style={{color: 'gray'}}>3d</Text>
            <Image
              source={require ('../assets/images/welcome2.jpg')}
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                marginLeft: 8,
                position: 'absolute',
                right: 4,
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
