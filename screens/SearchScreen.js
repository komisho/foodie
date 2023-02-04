import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Button, Overlay, Card } from "@rneui/base";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/resturaunts/resturauntsSlice";
import { GOOGLE_MAPS_API_TOKEN } from "@env";

const SearchScreen = () => {
    const resturaunts = useSelector((state) => state.resturaunts);
    const dispatch = useDispatch();

    const [showOverlay, setShowOverlay] = useState(false);
    const [restaraunt, setRestaraunt] = useState({});

    // const handleData = (data, details) => {
    //     const width = "300";
    //     const height = "300";

    //     fetch(
    //         `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&maxheight=${height}&photoreference=${details.photos[0].photo_reference}&key=${GOOGLE_MAPS_API_TOKEN}`
    //     ).then((results) => {
    //         setRestaraunt({
    //             id: resturaunts.length + 1,
    //             name: details.name,
    //             location: details.formatted_address,
    //             website: details.website,
    //             url: details.url,
    //             photoUrl: results.url,
    //         });
    //         setShowOverlay(!showOverlay);
    //     });
    // };

    //Fetch details, then fetch photo URL, then build item and present it.
    const handleData = async (data, details) => {
        const width = "300";
        const height = "300";

        const results = await fetch(
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&maxheight=${height}&photoreference=${details.photos[0].photo_reference}&key=${GOOGLE_MAPS_API_TOKEN}`
        );
        setRestaraunt({
            id: resturaunts.length + 1,
            name: details.name,
            location: details.formatted_address,
            website: details.website,
            url: details.url,
            photoUrl: results.url,
        });
        setShowOverlay(!showOverlay);
    };

    const handleAdd = () => {
        console.log(restaraunt);
        dispatch(addItem(restaraunt));
    };

    //Screen content
    return (
        <>
            <GooglePlacesAutocomplete
                styles={{
                    container: {
                        margin: 10,
                    },
                }}
                placeholder="Search"
                fetchDetails={true}
                // GooglePlacesDetailsQuery={{ fields: ["name", "address_component"] }}
                onPress={handleData}
                query={{
                    key: `${GOOGLE_MAPS_API_TOKEN}`,
                    language: "en",
                }}
            />

            <Overlay
                isVisible={showOverlay}
                onBackdropPress={() => {
                    setShowOverlay(!showOverlay);
                    console.log("clicked out of overlay, aborted");
                }}
                overlayStyle={{
                    backgroundColor: "#fff",
                    margin: 20,
                }}
            >
                <View style={styles.overlayWrapper}>
                    <Card>
                        <Card.Image
                            style={{ margin: 5, marginBottom: 25 }}
                            height="200"
                            width="200"
                            objectFit="cover"
                            source={{
                                uri: restaraunt.photoUrl,
                            }}
                        />
                        <Card.Title style={{ fontSize: 16 }}>
                            {restaraunt.name}
                        </Card.Title>
                        <Card.Divider />
                        <View>
                            <View>
                                <Text
                                    style={{
                                        margin: 5,
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontSize: 12,
                                    }}
                                    onPress={() =>
                                        Linking.openURL(restaraunt.url)
                                    }
                                >
                                    {restaraunt.location}
                                </Text>
                                <Text
                                    style={{
                                        margin: 5,
                                        textAlign: "center",
                                        fontSize: 14,
                                        color: "blue",
                                    }}
                                    onPress={() =>
                                        Linking.openURL(restaraunt.website)
                                    }
                                >
                                    Website
                                </Text>
                            </View>
                        </View>
                    </Card>
                    <View style={{ margin: 5, marginTop: 25 }}>
                        <Button
                            title="Add To List"
                            color="#E6393B"
                            onPress={() => {
                                handleAdd();
                                console.log("success");
                                setShowOverlay(!showOverlay);
                            }}
                            containerStyle={{ width: 200 }}
                        />
                    </View>
                    <View style={{ margin: 5 }}>
                        <Button
                            title="Cancel"
                            color="grey"
                            onPress={() => {
                                console.log("aborted");
                                setShowOverlay(!showOverlay);
                            }}
                            containerStyle={{ width: 200 }}
                        />
                    </View>
                </View>
            </Overlay>
        </>
    );
};

const styles = StyleSheet.create({
    overlayWrapper: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
});

export default SearchScreen;
