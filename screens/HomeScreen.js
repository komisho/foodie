import { View, Text } from "react-native";
import { Image } from "@rneui/themed";
import { Card } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

//Utility linebreak component because I don't want to keep typing {'\n'} to format my devlog...
const Break = () => {
    return "\n";
};

const DevLog = () => {
    return (
        <Card>
            <Card.Title>Devlog - v0.5</Card.Title>
            <Card.Divider />
            <Text style={{ textAlign: "left", padding: 10 }}>
                Done:
                <Break /> + Implemented Redux for state/data management
                <Break /> + Changed the logic for adding a new item to the list
                from search to use redux
                <Break /> + Added stack navigator to list tab
                <Break /> + Added a restaurant details screen to list stack
                <Break /> + Styled the new stack navigator to be in-line with
                the rest of the app
                <Break />
                <Break /> Todo:
                <Break /> + Add persistence
                <Break /> + Gestures for swipe to delete and other things
                <Break /> + LOTS of styling for list view, details screen,
                search screen, confirm add screen, etc...
                <Break /> + Some subtle animations to add some flair
                <Break /> + apparently I can't spell the word restaurant and
                need to fix that typo throughout the app
            </Text>
        </Card>
    );
};

const HomeScreen = () => {
    return (
        <ScrollView>
            <Card style={{ alignItems: "center", flex: 1 }}>
                <Card.Image source={require("../assets/img/foodieLogo.png")} />
                <Card.Divider />

                <Text style={{ textAlign: "center" }}>
                    FOODIE! is an app all about keeping track of all those
                    places you wanted to try but were left forgetten deep within
                    your notes app.
                </Text>
            </Card>
            <DevLog />
        </ScrollView>
    );
};

export default HomeScreen;
