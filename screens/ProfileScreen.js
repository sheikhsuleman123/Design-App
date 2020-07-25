import React, { Component } from 'react';
import { Text, View ,Button , StyleSheet} from 'react-native';

export class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>  ProfileScreen </Text>
            </View>
        )
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})
