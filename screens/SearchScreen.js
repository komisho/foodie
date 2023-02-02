import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Button, Overlay, Card, Image } from "@rneui/base";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/resturaunts/resturauntsSlice";
import { GOOGLE_MAPS_API_TOKEN } from "@env";

const SearchScreen = () => {
    const resturaunts = useSelector((state) => state.resturaunts);
    const dispatch = useDispatch();

    const [showOverlay, setShowOverlay] = useState(false);
    const [placeDetails, setPlaceDetails] = useState({});
    const [photo, setPhoto] = useState("");
    const [newItem, setNewItem] = useState({});

    const fetchPhotoUrl = () => {
        const photoReference = placeDetails.photos[0].photo_reference;
        const width = "300";
        const height = "300";

        fetch(
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&maxheight=${height}&photoreference=${photoReference}&key=${GOOGLE_MAPS_API_TOKEN}`
        )
            .then((response) => {
                setPhoto({ uri: response.url });
                console.log(response.url);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    //Function to add a new item to the list

    const handleAdd = () => {
        fetchPhotoUrl();
        const newItem = {
            id: resturaunts.length + 1,
            name: placeDetails.name,
            location: placeDetails.formatted_address,
            website: placeDetails.website,
            url: placeDetails.url,
            photo: photo,
        };
        console.log(newItem);
        dispatch(addItem(newItem));
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
                onPress={(data, details = null) => {
                    //Taking returned details and making them usable
                    let placeObj = JSON.parse(JSON.stringify(details, null, 2));
                    setShowOverlay(!showOverlay);
                    setPlaceDetails(placeObj);
                }}
                query={{
                    key: `${GOOGLE_MAPS_API_TOKEN}`,
                    language: "en",
                }}
            />

            {/* <Modal
                animationType="slide"
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            > */}
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
                            source={require("../assets/img/burger.jpg")}
                        />
                        <Card.Title style={{ fontSize: 16 }}>
                            {placeDetails.name}
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
                                        Linking.openURL(placeDetails.url)
                                    }
                                >
                                    {placeDetails.formatted_address}
                                </Text>
                                <Text
                                    style={{
                                        margin: 5,
                                        textAlign: "center",
                                        fontSize: 14,
                                        color: "blue",
                                    }}
                                    onPress={() =>
                                        Linking.openURL(placeDetails.website)
                                    }
                                >
                                    Website
                                </Text>
                            </View>
                        </View>
                    </Card>

                    {/* <Text>{placeDetails.website}</Text>
                    <Text>{placeDetails.url}</Text> */}
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
            {/* </Modal> */}
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
