import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainComponent from "./screens/MainComponent";

export default function App() {
    return (
        <NavigationContainer>
            <MainComponent />
        </NavigationContainer>
    );
}