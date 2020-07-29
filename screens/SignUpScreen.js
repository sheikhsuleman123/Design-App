import React, { Component, useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';

 const SignInScreen = ({navigation}) => {
    
  const [data, setData] = React.useState({
        email : '',
        password:'',
        checkTextInput : false,
        secureTextEntry: true
  });

  const textInputChange = (val) => {
        if(val.trim().length >= 12 ) {
            setData({
                ...data,
                email:val,
                checkTextInput:true
            });
        } else {
            setData({
                ...data,
                email:val,
                checkTextInput:false
            });
        }
  }

  const handlePasswordChange = (val) => {
            setData({
                ...data,
                password: val,
            })
  }

  const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
  }

    
    return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#009387" />
                <View style={styles.header}> 
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <Animatable.View 
                animation="fadeInUp"
                style={styles.footer}
                > 
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                    <FontAwesome  name="person-outline" color="#05375a" size={20} />
                    <TextInput 
                    placeholder="Your Email" 
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)} 
                    style={styles.textInput}  
                    />
                    {data.checkTextInput ?
                    <Animated.View  animation="bounceIn"  >
                    <Feather 
                    name="check-circle" 
                    color="green" 
                    size={20} 
                    />
                    </Animated.View>
                    : null }
                  </View>
                  <Text style={[styles.text_footer,{ marginTop:35 }]}>
                      Password</Text>
                  <View style={styles.action}>
                    <Feather 
                     name="lock"
                     color="#05375a" 
                     size={20} 
                      />
                    <TextInput 
                    placeholder="Your Password" 
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    secureTextEntry={ data.secureTextEntry ? true : false } 
                    style={styles.textInput}  
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? 
                    <Feather 
                    name="eye-off" 
                    color="green" 
                    size={20} 
                    /> :
                    <Feather 
                    name="eye" 
                    color="green" 
                    size={20} 
                    /> }
                    </TouchableOpacity>
                  </View>
                  <Text style={[styles.text_footer,{ marginTop:35 }]}>
                    Confirm Password</Text>
                  <View style={styles.action}>
                    <Feather 
                     name="lock"
                     color="#05375a" 
                     size={20} 
                      />
                    <TextInput 
                    placeholder="Confirm Password" 
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    secureTextEntry={ data.secureTextEntry ? true : false } 
                    style={styles.textInput}  
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? 
                    <Feather 
                    name="eye-off" 
                    color="green" 
                    size={20} 
                    /> :
                    <Feather 
                    name="eye" 
                    color="green" 
                    size={20} 
                    /> }
                    </TouchableOpacity>
                  </View>
                 
                  <View style={styles.button}>
                    <LinearGradient
                    colors={['#08d4c4','#01ab9d']}  
                     style={styles.signIn} >
                        <Text style={[styles.textSign]}>Sign Up</Text>
                    </LinearGradient>

                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('SignInScreen')}  
                    style={[styles.signIn, {
                        borderColor:'#009387',
                        borderWidth:1,
                        marginTop:15
                     }]}  >
                        <Text style={[styles.textSign,{color:'#009387'}]}>Sign In</Text>
                    </TouchableOpacity>

                  </View>
                </Animatable.View>
            </View>
        )
    }


export default SignInScreen;
 
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        color:'#fff',
        fontWeight: 'bold'
    }
  });