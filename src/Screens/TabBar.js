import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./Home";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator()

class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: 'Home'
        };
    }
    render() {
        return (

            <Tab.Navigator
            
                screenOptions={{
                    tabBarActiveTintColor: ('rgb(171,172,173)'),
                    tabBarStyle: {
                        backgroundColor: 'black',
                        height:84,
                    
                    },
                    tabBarActiveTintColor: ('rgb(71,162,212)'),
                    tabBarInactiveTintColor:'white'
                }} >
                <Tab.Screen name="Home" component={HomePage}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (

                            <Image style={styles.icon} source={require('../../Images/icons8-home-24.png')} />

                        )
                    }} />

                <Tab.Screen name="Store" component={HomePage}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (

                            <Image style={styles.icon} source={require('../../Images/icons8-shopping-bag-24.png')} />

                        )
                    }} />

                <Tab.Screen name="Channels" component={HomePage}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <View style={styles.grocery}>
                                <Image style={styles.icon} source={require('../../Images/icons8-menu-rounded-50.png')} />

                            </View>
                        )
                    }} />

                <Tab.Screen name="Find" component={HomePage}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Image style={styles.icon} source={require('../../Images/icons8-search-30.png')} />
                        )
                    }} />
                <Tab.Screen name="My Stuff" component={HomePage}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Image style={styles.iconAcc} source={require('../../Images/icons8-male-user-48.png')} />
                        )
                    }} />
            </Tab.Navigator>

        )
    }
}
const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 28
    },
    iconAcc:{
        height:30,
        width:35
    }

})
export default TabBar;
