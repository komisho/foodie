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
            <Card.Title>Devlog - v0.0.3</Card.Title>
            <Card.Divider />
            <Text style={{ textAlign: "left", padding: 10 }}>
                Done:
                <Break /> + Headers have been styled
                <Break /> + Home screen has content... even if it's just this
                devlog
                <Break /> + Rendered cards in the list now show an image that
                pulls from the RESTURANTS array
                <Break /> + Slight styling to list cards has been done.
                <Break />
                <Break /> Todo:
                <Break /> + Capture data from search and store it into the array
                with appropriate data.
                <Break /> + Revamp list card component styling, I don't like
                like RNE's layout and want to define my own with the image on
                the left, title on the right, and maybe some chip style
                identifiers under that.
                <Break /> + Add resturaunt details screen, this will also mean
                adding a stack navigator to the list screen.
                <Break /> + Maybe remove search button and instead add a FAB in
                the center of the nav that calls search instead? Might look
                nicer and be more obvious that that's how you add to your list.
                <Break /> + Make sure search is location-aware.
                <Break /> + ...redux?
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
