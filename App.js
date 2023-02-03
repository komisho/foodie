import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainComponent from "./screens/MainComponent";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Splash from "./screens/Splash";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Splash />} persistor={persistor}>
                <NavigationContainer>
                    <MainComponent />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
