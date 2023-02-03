import { Card } from "@rneui/base";
import { FlatList, Pressable, Image } from "react-native";
import { View, Text } from "react-native";
import { CurrentRenderContext } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ResturauntListScreen = ({ navigation }) => {
    const resturaunts = useSelector((state) => state.resturaunts);
    //I don't know why yet, but I think item: unpacks all the items from an object instead of individual destructuring...?
    const renderListItem = ({ item: resturaunts }) => {
        return (
            <Pressable
                onPress={() =>
                    navigation.navigate("Resturaunt Info", { resturaunts })
                }
            >
                <View
                    style={{
                        flex: 1,

                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "white",
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        shadowOffset: {
                            width: 2,
                            height: 2,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        shadowColor: "black",
                    }}
                >
                    <Image
                        style={{
                            height: 100,
                            width: 100,
                            // margin: 10,
                            // borderRadius: 50,
                        }}
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
                                fontWeight: "bold",
                            }}
                        >
                            {resturaunts.name}
                        </Text>
                    </View>
                </View>
            </Pressable>
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

export default ResturauntListScreen;
