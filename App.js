import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainComponent from "./screens/MainComponent";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainComponent />
            </NavigationContainer>
        </Provider>
    );
}
