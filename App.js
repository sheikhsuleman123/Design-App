import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import HomeScreen from    './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




 class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
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

      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;
