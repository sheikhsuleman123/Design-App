import React, { Component } from 'react';
import { Text, View ,Button , StyleSheet} from 'react-native';

export class ExploreScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Explore Screen </Text>
            </View>
        )
    }
}

export default ExploreScreen;

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})
