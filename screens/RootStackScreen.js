import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode="none" initialRouteName="SignInScreen" >
        <RootStack.Screen name="SignInScreen" component={SignInScreen}  />
        <RootStack.Screen name="SplashScreen" component={SplashScreen}  />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}  />
    </RootStack.Navigator>
);

export default RootStackScreen;