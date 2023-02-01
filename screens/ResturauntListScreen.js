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
                <Card>
                    <Card.Image
                        style={{ margin: 5, marginBottom: 25 }}
                        height="200"
                        width="200"
                        objectFit="cover"
                        source={require("../assets/img/burger.jpg")}
                    />
                    <Card.Title style={{ fontSize: 16 }}>
                        {resturaunts.name}
                    </Card.Title>
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
