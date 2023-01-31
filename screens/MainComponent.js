import { PlatformConstants, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ResturauntListScreen from "./ResturauntListScreen";
import ResturauntInfoScreen from "./ResturauntInfoScreen";
import { Icon } from "@rneui/base";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerStyle: { backgroundColor: "#E6393B" },
    headerTintColor: "#fff",
};

//Stack Nav for list and info screen
const ListNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#E6393B" },
                headerTitleStyle: { color: "#fff", fontWeight: "bold" },
                headerBackTitleVisible: false,
                headerBackImage: () => {
                    return (
                        <Icon
                            iconStyle={styles.backButton}
                            type="font-awesome"
                            name="angle-left"
                        />
                    );
                },
            }}
        >
            <Stack.Screen
                name="List"
                component={ResturauntListScreen}
                options={({ navigation }) => ({
                    title: "List",
                })}
            />
            <Stack.Screen
                name="Resturaunt Info"
                component={ResturauntInfoScreen}
                options={({ route }) => ({
                    title: route.params.resturaunts.name,
                })}
            />
        </Stack.Navigator>
    );
};

const MainComponent = () => {
    return (
        //Bottom Tab Nav
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
                headerStyle: { backgroundColor: "#E6393B" },
                headerTitleStyle: { color: "#fff", fontWeight: "bold" },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen
                options={{ headerShown: false }}
                name="List"
                component={ListNavigator}
            />
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 10,
        color: "#fff",
        fontSize: 24,
    },
});

export default MainComponent;
