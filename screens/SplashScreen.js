import React, { Component } from 'react';
import { Text, View ,Button ,Image, StyleSheet, Dimensions} 
from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradiant from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

export class SplashScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                  <Animatable.Image
                    animation="bounceIn" 
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                    />
                </View>
                <Animatable.View 
                style={styles.footer}
                animation="fadeInUp"
                >
                    <Text style={styles.title}>Stay connected with everyone!</Text>
                    <Text style={styles.text}>Sign In with account</Text>
                    <View style={styles.button}> 
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignInScreen')}  >
                        <LinearGradiant 
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.signIn}
                        >
                        <Text style={styles.textSign} >Get Started</Text>
                      <MaterialIcon 
                      name="chevron-forward-outline"
                      color="#fff"
                      size={20}
                      />
                        </LinearGradiant>
                    </TouchableOpacity>
                    </View>
                </Animatable.View>
                
            </View>
        )
    }
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });
