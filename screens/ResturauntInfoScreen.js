import { View, Text } from "react-native";
import RenderResturaunts from "../features/resturaunts/RenderResturaunts";

const ResturauntInfoScreen = ({ route }) => {
    const { resturaunts } = route.params;
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <RenderResturaunts resturaunts={resturaunts} />
        </View>
    );
};

export default ResturauntInfoScreen;
