import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button 
            title="Go to Detail screen"
            onPress={() => this.props.navigation.navigate('Detail')}
            />
          </View>
        )
    }
}

export default HomeScreen;
