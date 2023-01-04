import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./Home";
import Store from "./StoreScreen";
import Find from "./Find";
const Tab = createBottomTabNavigator()

class TabBar extends Component {
    
    render() {
        return (

            <Tab.Navigator
                screenOptions={{
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

                <Tab.Screen name="Store" component={Store}
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

                <Tab.Screen name="Find" component={Find}
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
