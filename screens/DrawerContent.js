import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer,TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const DrawerContent = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}> 
                        <View style={{flexDirection:'row'}}>
                            <Avatar.Image 
                            style={{marginTop:5}}
                            source = {{
                                uri : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            }}
                            size={50}
                            />
                            <View style={{marginLeft:7}}>
                                <Title>Josh Mathew</Title>
                                <Caption style={styles.caption}>@itsjoshmathew</Caption>
                            </View>
                        </View>
                     </View>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                icon={({color,size}) => (
                    <Icon 
                    name="exit-to-app"
                    color={color}
                    size={size}
                    />
                )}
                 label="Sign out"
                 onPress={()=> {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent : {
        flex : 1,
    },
    userInfoSection: {
        paddingLeft :20
    },
    title : {
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    caption: {
        fontSize : 14,
        lineHeight: 14
    },
    row: {
        marginTop:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    section: {
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    Paragraph : {
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
    },
    preference : {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    },
});