import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title="Go to Detail screen"
      onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button 
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
      />
       <Button 
      title="Go to Detail screen again"
      onPress={() => navigation.push('Details')}
      />
       <Button 
      title="Go to Detail screen"
      onPress={() => navigation.navigate('Details')}
      />
       <Button 
      title="Go to Back"
      onPress={() => navigation.goBack()}
      />
        <Button 
      title="Go to top 1 screen"
      onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export class App extends Component {
  render() {
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;
