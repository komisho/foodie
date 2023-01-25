import { View, Text } from "react-native";
import { Image } from "@rneui/themed";
import { Card } from "@rneui/base";

const HomeScreen = () => {
    return (
        <Card style={{ alignItems: "center", flex: 1 }}>
            <Card.Image source={require("../assets/img/foodieLogo.png")} />
        </Card>
    );
};

export default HomeScreen;
