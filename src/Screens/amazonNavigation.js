import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./TabBar";
import SecondScreen from "./SecondScreen";
import Player from "./PlayScreen";
const Stack = createNativeStackNavigator();

class HomeScreen extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={TabBar}
                        options={{ headerShown: false }} />
                    <Stack.Screen name="SecondScreen" component={SecondScreen}
                        options={{ headerShown: true }} />
                    <Stack.Screen name="PlayerScreen" component={Player}
                        options={{ headerShown: true }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default HomeScreen;