import { PlatformConstants } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ResturauntListScreen from "./ResturauntListScreen";
import { Icon } from "@rneui/base";

const Tab = createBottomTabNavigator();

const MainComponent = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#E6393B" },
                tabBarShowLabel: false,
                tabBarIconStyle: { color: "#fff" },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    let iconColor;

                    if (rn === "Home") {
                        iconName = "home";
                    } else if (rn === "List") {
                        iconName = "list";
                    } else if (rn === "Search") {
                        iconName = "search";
                    }

                    iconColor = focused ? "white" : "black";

                    return (
                        <Icon
                            type="font-awesome"
                            name={iconName}
                            size={size}
                            color={iconColor}
                        />
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="List" component={ResturauntListScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
};

export default MainComponent;
