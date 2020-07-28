import React, { Component } from 'react';
import { Text, View ,Button , StyleSheet} from 'react-native';

export class SignInScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>  SignInScreen </Text>
            </View>
        )
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})
