import React from 'react'
import {Button, StyleSheet, Text, View } from 'react-native'

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Button 
            title="Click here"
            onPress={() => alert('Button Clicked') }
            />
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
