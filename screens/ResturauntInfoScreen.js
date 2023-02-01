import { View, Text, Linking } from "react-native";
import { Card } from "@rneui/themed";

const ResturauntInfoScreen = ({ route }) => {
    const { resturaunts } = route.params;
    return (
        <Card>
            <Card.Image
                style={{ margin: 5, marginBottom: 25 }}
                height="200"
                width="200"
                objectFit="cover"
                source={require("../assets/img/burger.jpg")}
            />
            <Card.Title style={{ fontSize: 16 }}>{resturaunts.name}</Card.Title>
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
                        onPress={() => Linking.openURL(resturaunts.url)}
                    >
                        {resturaunts.location}
                    </Text>
                    <Text
                        style={{
                            margin: 5,
                            textAlign: "center",
                            fontSize: 14,
                            color: "blue",
                        }}
                        onPress={() => Linking.openURL(resturaunts.website)}
                    >
                        Website
                    </Text>
                </View>
            </View>
        </Card>
    );
};

export default ResturauntInfoScreen;
