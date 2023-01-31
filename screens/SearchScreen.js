import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text, Alert, Modal, StyleSheet, Button } from "react-native";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/resturaunts/resturauntsSlice";

const SearchScreen = () => {
    const resturaunts = useSelector((state) => state.resturaunts);
    const dispatch = useDispatch();
    //Variable to hold JSON data to process... might not need this but it works right now.
    let placeJSON;

    const [showModal, setShowModal] = useState(false);
    const [placeDetails, setPlaceDetails] = useState({});

    const handleAdd = () => {
        const newItem = {
            id: resturaunts.length + 1,
            name: placeDetails.name,
            location: placeDetails.formatted_address,
            website: placeDetails.website,
            url: placeDetails.url,
        };
        console.log(newItem);
        dispatch(addItem(newItem));
    };

    return (
        <>
            <GooglePlacesAutocomplete
                placeholder="Search"
                fetchDetails={true}
                // GooglePlacesDetailsQuery={{ fields: ["name", "address_component"] }}
                onPress={(data, details = null) => {
                    placeJSON = JSON.stringify(details, null, 2);
                    let placeObj = JSON.parse(placeJSON);
                    setShowModal(!showModal);
                    setPlaceDetails(placeObj);
                    // Alert.alert(
                    //     "Add to list",
                    //     "Would you like to add this to your list?",
                    //     [
                    //         {
                    //             text: "Cancel",
                    //             style: "Cancel",
                    //             onPress: () => {
                    //                 console.log("Item not added");
                    //             },
                    //         },
                    //         {
                    //             text: "OK",
                    //             onPress: () => {
                    //                 placeJSON = JSON.stringify(details, null, 2);
                    //                 placeDetails = JSON.parse(placeJSON);
                    //                 console.log(
                    //                     placeDetails.name,
                    //                     placeDetails.formatted_address,
                    //                     placeDetails.url,
                    //                     placeDetails.website
                    //                 );
                    //             },
                    //         },
                    //     ]
                    // );

                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                }}
                query={{
                    key: "AIzaSyAsiK49NIhkIHQKyHL-N4_9dhhBU5K88aU",
                    language: "en",
                }}
            />

            <Modal
                animationType="slide"
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <View style={styles.modalWrapper}>
                    <Text>{placeDetails.name}</Text>
                    <Text>{placeDetails.formatted_address}</Text>
                    <Text>{placeDetails.website}</Text>
                    <Text>{placeDetails.url}</Text>
                    <View style={{ margin: 10 }}>
                        <Button
                            title="Add To List"
                            color="black"
                            onPress={() => {
                                handleAdd();
                                console.log("success");
                                setShowModal(!showModal);
                            }}
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Button
                            title="Cancel"
                            color="black"
                            onPress={() => {
                                console.log("aborted");
                                setShowModal(!showModal);
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
});

export default SearchScreen;
