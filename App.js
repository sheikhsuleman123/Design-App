import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from    './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

//Drawer Navigation 
import { createDrawerNavigator } from '@react-navigation/drawer';

// Stack Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Drawer Stack Screens

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
 
const HomeStackScreen = ({navigation}) => ( 
      <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle : {
            fontWeight:'bold'
          }
      }}>
        <HomeStack.Screen name="Home"    component={HomeScreen} 
        options = {{ headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" 
          onPress={() => navigation.openDrawer()} > </Icon.Button> )
       }}   />
      </HomeStack.Navigator> 
   );
   const DetailsStackScreen = ({navigation}) => ( 
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle : {
          fontWeight:'bold'
        }
    }}>
      <DetailsStack.Screen name="Detail"  component={DetailsScreen}
       options = {{ headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} color="#fff" 
          onPress={() => navigation.openDrawer()} > </Icon.Button> )
       }}   />
    </DetailsStack.Navigator> 
 );


 class App extends Component {
  render() {

    // const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    return (
      <NavigationContainer>

  {/* Drawer Navigator  */} 
       <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Deatil" component={DetailsStackScreen} />
       </Drawer.Navigator>

  {/* Stack Navigator */}
      {/* <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle : {
            fontWeight:'bold'
          }
      }}>
        <Stack.Screen name="Home"    component={HomeScreen}    />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator> */}

    </NavigationContainer>
    )
  }
}

export default App;
