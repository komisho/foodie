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
            <Card.Title>Devlog - v0.6</Card.Title>
            <Card.Divider />
            <Text style={{ textAlign: "left", padding: 10 }}>
                Done:
                <Break /> + Basic styling is basically all done, it'll
                eventually change, but I'm happy with where it is for now. Add
                item is now a popup instead of a modal and is styled, list is
                styled very simply, details view shares the same styling as add
                item right now
                <Break /> + Detailed view contains clickable address and
                website, address will currently lead to the google maps page
                (would like to use device default eventually) and website will
                open browser to... the website
                <Break />
                <Break /> Todo:
                <Break /> + Redux Persist
                <Break /> + Delete logic and swipe gesture
                <Break /> + Somehow figure out how to fetch an image from each
                restaraunt for the list and details view
                <Break /> + Finalize what data I want to save within the app for
                future use
                <Break /> + Some kind of visual confirmation after adding an
                item to your list
                <Break /> + If there is time... make a "What should I eat?"
                button on the homescreen that will randomly pick something from
                your list and pop up the details for it
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
