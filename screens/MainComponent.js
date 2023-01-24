import { PlatformConstants } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const MainComponent = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: { backgroundColor: "#E6393B" },
                tabBarShowLabel: false,
                tabBarIconStyle: { color: "#fff" },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
        </Tab.Navigator>
    );
};

export default MainComponent;
