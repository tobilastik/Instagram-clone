import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions, SafeAreaView } from 'react-navigation';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import color from '../constants/Colors';
import {
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons,
    Feather,
} from '@expo/vector-icons';

const screen = Dimensions.get('screen');

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null,
    };

    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        //let {activeTintColor, activeBackgroundColor} = props;
        return (
            <View
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#f89b5f',
                }}
            >
                <SafeAreaView style={styles.container}>
                    <View
                        style={{
                            // flexDirection: 'row',
                            // justifyContent: 'center',
                            // alignSelf: 'stretch',
                            // justifyContent: 'center',
                            // alignItems: 'center',
                            height: '100%',
                            width: 280,
                            backgroundColor: 'rgba(0,0,0,0.6)',
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <Image
                                source={require('../assets/images/avatar.png')}
                                style={{
                                    height: 150,
                                    width: 150,
                                    borderRadius: 75,
                                    marginTop: 25,
                                    alignSelf: 'center',
                                }}
                            />
<Text style = {{fontSize: 18, color: color.white, alignSelf: 'center',}}>Raji Oluwatobiloba</Text>
                        </View>
                        
                        <ScrollView>

                            <View
                                style={{
                                    borderTopColor: color.white,
                                    borderTopWidth: 2,
                                    borderTopColor: 'lightgray',
                                    padding: 15,
                                }}
                            >
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={this.navigateToScreen('Home')}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                        }}
                                    >
                                        <MaterialCommunityIcons
                                            name="home-outline"
                                            size={30}
                                            color="white"
                                        />
                                        <Text style={styles.drawerText}>
                                            Home
                    </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View
                                style={{
                                    borderTopColor: color.white,
                                    //borderTopWidth: 1,
                                    padding: 15,
                                }}
                            >
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={this.navigateToScreen('Profile')}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                        }}
                                    >
                                        <MaterialIcons name="person-outline" size={30} color="white" />

                                        <Text style={styles.drawerText}>
                                            Profile
                    </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View
                                style={{
                                    borderTopColor: color.white,
                                    //borderTopWidth: 1,
                                    padding: 15,
                                }}
                            >
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={this.navigateToScreen('Settings')}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                        }}
                                    >
                                        <Feather name="settings" size={30} color="white" />

                                        <Text style={styles.drawerText}>
                                            Settings
                    </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View
                                style={{
                                    borderTopColor: color.white,
                                    //borderTopWidth: 1,
                                    padding: 15,
                                }}
                            >
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={this.navigateToScreen('Dgrad')}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                        }}
                                    >
                                        <Feather
                                            name="bookmark"
                                            size={30}
                                            color="white"
                                        />

                                        <Text style={styles.drawerText}>
                                            Bookmarks
                    </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View
                                style={{
                                    borderTopColor: color.white,
                                    //borderTopWidth: 1,
                                    padding: 15,
                                }}
                            >
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    onPress={this.navigateToScreen('Dgrk')}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                        }}
                                    >
                                        <MaterialIcons
                                            name="report"
                                            size={30}
                                            color="white"
                                        />

                                        <Text style={styles.drawerText}>
                                            Privacy
                    </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                           
                        </ScrollView>
                        <View style={styles.footerContainer}>
                            <Text
                                style={{
                                    color: color.white,
                                    fontSize: 14,
                                }}
                            >
                                 v.1.0.0
              </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        //paddingTop: 50,
        //padding: 10,
        flex: 1,
        //backgroundColor: color.navybluebutton,
    },

    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 28,
        color: color.white,
        fontWeight: '500',
        alignSelf: 'center',
    },
    drawerText: {
        fontSize: 23,
        fontWeight: '900',
        color: color.white,
        marginLeft: 12,
    },
    footerContainer: {
        padding: 20,
        borderTopColor: color.white,
        borderTopWidth: 0.4,
        alignItems: 'center',
    },
});


