import { Text } from "react-native";
import { Card } from "@rneui/base";
import { ScrollView } from "react-native-gesture-handler";

//Utility linebreak component because I don't want to keep typing {'\n'} to format my devlog...
const Break = () => {
    return "\n";
};

const DevLog = () => {
    return (
        <Card>
            <Card.Title>Devlog - v0.7</Card.Title>
            <Card.Divider />
            <Text style={{ textAlign: "left", padding: 10 }}>
                Done:
                <Break /> + Styling is done for now. It's never actually done,
                but it's done for now
                <Break /> + Successfully fetching an image using the
                photo_reference from fetched Place Details call!
                <Break /> + Redux Persist has been added and set up, app now
                persists data!
                <Break /> + Splash screen
                <Break /> + Successfully capturing all data I want from Place
                Details query. Still might add more things, but I'm happy with
                it for now
                <Break /> + Swipe to delete added... logic for it was weird,
                probably need to look at that again later.
                <Break />
                <Break /> Todo:
                <Break /> + Visual confirmation when you add an item
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
