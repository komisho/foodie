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
            <Card.Title>Devlog - v0.4</Card.Title>
            <Card.Divider />
            <Text style={{ textAlign: "left", padding: 10 }}>
                Done:
                <Break /> + Successfully captured data from Places API
                <Break /> + Processed captured data and laid groundwork for
                adding to list... you can now add items, but they do not persist
                reload
                <Break /> + Added confirmation modal that shows details and
                gives you a button to add to the list and a button to cancel...
                needs styling, purely functional right now
                <Break />
                <Break /> Todo:
                <Break /> + Need to add Redux for global state management... I
                can already tell it's going to get messy otherwise and it'll
                just make things simpler in the long run
                <Break /> + Add persistence
                <Break /> + Gestures for swipe to delete, swipe down to get rid
                of the modal...
                <Break /> + possibly make search a modal instead of its own
                screen so I can easily make it go away after a successful search
                and add
                <Break /> + List items need styling bad. Consider something like
                Material UI. Also need to figure out how to create links that
                will open the browser
                <Break /> + how the HECKING HECK do I pull an image from the
                place details query?! I have the data but getting a usable URL
                is a whole different story...
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
