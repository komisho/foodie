import {
    FlatList,
    Pressable,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { View, Text, Alert } from "react-native";
import { CurrentRenderContext } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { SwipeRow } from "react-native-swipe-list-view";
import { removeItem } from "../features/resturaunts/resturauntsSlice";

const ResturauntListScreen = ({ navigation }) => {
    const resturaunts = useSelector((state) => state.resturaunts);
    const dispatch = useDispatch();
    //I don't know why yet, but I think item: unpacks all the items from an object instead of individual destructuring...?
    const renderListItem = ({ item: resturaunts }) => {
        return (
            <SwipeRow rightOpenValue={-100}>
                <View style={styles.deleteView}>
                    <TouchableOpacity
                        style={styles.deleteTouchable}
                        onPress={() =>
                            Alert.alert(
                                "Delete item?",
                                "Are you sure you wish to delete " +
                                    resturaunts.name +
                                    "?",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () =>
                                            console.log(
                                                resturaunts.name + "Not Deleted"
                                            ),
                                        style: "cancel",
                                    },
                                    {
                                        text: "OK",
                                        onPress: () =>
                                            dispatch(
                                                removeItem(resturaunts.name)
                                            ),
                                    },
                                ],
                                { cancelable: false }
                            )
                        }
                    >
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <Pressable
                    onPress={() => {
                        navigation.navigate("Resturaunt Info", { resturaunts });
                        console.log(resturaunts);
                    }}
                >
                    <View style={styles.itemWrapper}>
                        <Image
                            style={styles.itemImage}
                            source={{
                                uri: resturaunts.photoUrl,
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                width: "60%",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    textAlign: "center",
                                }}
                            >
                                {resturaunts.name}
                            </Text>
                        </View>
                    </View>
                </Pressable>
            </SwipeRow>
        );
    };

    return (
        <FlatList
            data={resturaunts}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    deleteView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
    },
    deleteTouchable: {
        backgroundColor: "red",
        height: "98%",
        justifyContent: "center",
    },
    deleteText: {
        color: "white",
        fontWeight: "700",
        textAlign: "center",
        fontSize: 16,
        width: 100,
    },
    itemWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowColor: "black",
    },
    itemImage: {
        height: 100,
        width: 100,
    },
});
export default ResturauntListScreen;
