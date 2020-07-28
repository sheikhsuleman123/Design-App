import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center',justifyContent:'space-around' }}>
        <Text>Details Screen</Text>
        <Button 
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
        />
         <Button 
        title="Go to Detail screen again"
        onPress={() => this.props.navigation.push('Details')}
        />
         <Button 
        title="Go to Detail screen"
        onPress={() => this.props.navigation.navigate('Details')}
        />
         <Button 
        title="Go to Back"
        onPress={() => this.props.navigation.goBack()}
        />
        <Button 
        title="Go to top 1 screen"
        onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

export default DetailsScreen;
