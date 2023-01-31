import { Card } from "@rneui/base";
import { FlatList, Pressable } from "react-native";
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
                <Card
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                    }}
                >
                    <Card.Title>{resturaunts.name}</Card.Title>
                    <Card.Divider />
                    <View>
                        <Text style={{ textAlign: "center", paddingTop: 10 }}>
                            {resturaunts.location}
                        </Text>
                        <Text style={{ textAlign: "center", paddingTop: 10 }}>
                            {resturaunts.website}
                        </Text>
                        <Text style={{ textAlign: "center", paddingTop: 10 }}>
                            {resturaunts.url}
                        </Text>
                    </View>
                </Card>
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
