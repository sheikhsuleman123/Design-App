import React from 'react';
import { View, Text, StyleSheet,useContext } from 'react-native';
import { Avatar, Title, Caption,
     Paragraph, Drawer,TouchableRipple,
     useTheme, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';

import { AuthContext } from '../components/context';

export const DrawerContent = (props) => {

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);

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
                                <Title>Muhammad Suleman</Title>
                                <Caption style={styles.caption}>@itsheikhsuleman</Caption>
                            </View>
                        </View>
                       <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.Paragraph, styles.caption}> 80</Paragraph>
                                <Caption style={styles.caption}> Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.Paragraph, styles.caption}> 190</Paragraph>
                                <Caption style={styles.caption}> Followers</Caption>
                            </View>
                       </View>
                     </View>

                     <Drawer.Section style={styles.drawerSection}>
                     <DrawerItem 
                        icon={({color,size}) => (
                            <Icon 
                            name="home-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Home"
                        onPress={()=> {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                        icon={({color,size}) => (
                            <Icon 
                            name="account-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Profile"
                        onPress={()=> {props.navigation.navigate('ProfileScreen')}}
                        />
                        <DrawerItem 
                        icon={({color,size}) => (
                            <Icon 
                            name="bookmark-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Bookmarks"
                        onPress={()=> {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                        icon={({color,size}) => (
                            <Icon 
                            name="airballoon-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Settings"
                        onPress={()=> {props.navigation.navigate('SettingScreen')} }
                        />
                        <DrawerItem 
                        icon={({color,size}) => (
                            <Icon 
                            name="account-check-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Support"
                        onPress={()=> {props.navigation.navigate('SupportScreen')}}
                        />
                     </Drawer.Section>
                     <Drawer.Section title="Preference">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                  <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                     </Drawer.Section>
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
                 onPress={()=> {signOut()}}
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