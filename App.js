import React, { useEffect } from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

//Drawer Navigation 
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import DetailScreen from './screens/DetailsScreen';

import SupportScreen  from './screens/SupportScreen';
import ProfileScreen  from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import BookmarkScreen from './screens/BookMarkScreen';
import { DrawerContent } from './screens/DrawerContent';

import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  //  const [isLoading, setLoading ] = React.useState(true);
  //  const [userToken, setUserToken] = React.useState(null);
  
 const initialLoginState = {
    isLoading : false,
    userToken:null,
    userName:null
  };

  loginReducer = (prevState, action) => {
      switch( action.type ) {
          case 'RETRIEVE_TOKEN' :
          return {
            ...prevState,
            userToken: action.token, 
            isLoading : false
          };
          case 'LOGIN' :
          return {
            ...prevState,
            userName : action.id,
            userToken: action.token,
            isLoading : false
          };
          case 'LOGOUT' :
          return {
            ...prevState,
            userName:null,
            userToken:null,
            isLoading : false
          };
          case 'REGISTER' :
          return {
            ...prevState,
            userName : action.id,
            userToken: action.token,
            isLoading : false
          };
      }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer,initialLoginState)
  
  const authContext = React.useMemo(() => ({
    signIn : async(foundUser) => {

     const userToken = String(foundUser[0].userToken);
     const userName = foundUser[0].username;
  
       try{
        userToken = "admin";
        await AsyncStorage.setItem('userToken', userToken)
       } catch(e) {
         console.log(e);
       }
     dispatch({ type: 'LOGIN', id:userName, token : userToken });
      // setUserToken('ssg');
      // setLoading(false);
    },
    signOut : async() => {
      try{
        await AsyncStorage.removeItem('userToken');
       } catch(e) {
         console.log(e);
       }
      dispatch({ type: 'LOGOUT' });

      // setUserToken(null);
      // setLoading(false);
    },
    signUp : () => {
      // setUserToken('ssg');
      // setLoading(false);
    },
  }), []);

   useEffect(() => {
     setTimeout(async() => {
      //  setLoading(false);
      let userToken;
      userToken = null;
      try{
        userToken =  await AsyncStorage.getItem('userToken')
       } catch(e) {
         console.log(e);
       }
      dispatch({ type: 'REGISTER', token : 'random' });

     },1000);
   },[]);

   if( loginState.isLoading ) {
     return(
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large" color="#009387" />
       </View>
     );
   }
   return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>

      { loginState.userToken !== null ? (
        
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
        <Drawer.Screen name="HomeDrawer"   component={MainTabScreen} />
        <Drawer.Screen name="ProfileScreen"   component={ProfileScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
       </Drawer.Navigator> 
      )  :
      <RootStackScreen />
      }
    </NavigationContainer>
    </AuthContext.Provider>
    )
  }


export default App;
