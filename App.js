import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

//Drawer Navigation 
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import DetailScreen  from './screens/DetailsScreen';

import { DrawerContent } from './screens/DrawerContent';

 class App extends Component {
  render() {

    const Drawer = createDrawerNavigator();

    return (
      <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
        <Drawer.Screen name="Home"   component={MainTabScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
       </Drawer.Navigator>


    </NavigationContainer>
    )
  }
}

export default App;
