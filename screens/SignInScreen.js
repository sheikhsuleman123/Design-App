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

import { AuthContext } from '../components/context';



 const SignInScreen = ({navigation}) => {
    
  const [data, setData] = React.useState({
        email : '',
        password:'',
        secureTextEntry: true,
        checkTextInput : false,
        isValidUser : true,
        isValidPassword : true ,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
        if(val.trim().length >= 12 ) {
            setData({
                ...data,
                email:val,
                checkTextInput:true,
                isValidUser:true
            });
        } else {
            setData({
                ...data,
                email:val,
                checkTextInput:false,
                isValidUser:false
            });
        }
  }

  const handlePasswordChange = (val) => {
      if ( val.trim().length >= 8){
            setData({
                ...data,
                password: val,
                isValidPassword:true
            })
  } else {
      setData({
          ...data,
          password : val,
          isValidPassword:false
      })
  } 
}

  const updateSecureTextEntry = (val) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
  }

  const loginHandle = (username,password) => {
        signIn(username,password);
  }

  const handleValidUser = (val) => {
        if ( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser:true
            });
        } else {
            setData({
            ...data,
            isValidUser:false
        });
        }
  }
    
    return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#009387" />
                <View style={styles.header}> 
                    <Text style={styles.text_header}>Welcome</Text>
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
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text) }
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
                { data.isValidUser ? null :
                    <Animated.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Email must be 12 characters long.</Text>
                    </Animated.View>
                    }

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
                 { data.isValidPassword ? null :
                  <Animated.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animated.View>
                    }
              <TouchableOpacity>
                <Text style={{color:'#009387',marginTop:15}}>Forget Password ? </Text>
                </TouchableOpacity>   
                  <View style={styles.button}>
                      <TouchableOpacity
                      style={styles.signIn}
                      onPress={() => {loginHandle(data.email, data.password)}}
                      >
                    <LinearGradient
                    colors={['#08d4c4','#01ab9d']}  
                    style={styles.signIn} >
                        <Text style={[styles.textSign]}>Sign In</Text>
                    </LinearGradient>

                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('SignUpScreen')}  
                    style={[styles.signIn, {
                        borderColor:'#009387',
                        borderWidth:1,
                        marginTop:15
                     }]}  >
                        <Text style={[styles.textSign,{color:'#009387'}]}>Sign Up</Text>
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