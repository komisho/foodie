import { View, Text, StyleSheet } from "react-native";
import { Card } from "@rneui/base";

const RenderResturaunts = (props) => {
    const { resturaunts } = props;
    return (
        <View>
            <Card style={styles.card}>
                <Card.Title>
                    This is a placeholder page to show detailed resturaunt info
                </Card.Title>

                <Card.Divider />
                <View>
                    <Text style={styles.cardText}>{resturaunts.name}</Text>
                    <Text style={styles.cardText}>{resturaunts.location}</Text>
                    <Text style={styles.cardText}>{resturaunts.website}</Text>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    cardText: {
        textAlign: "center",
        paddingTop: 10,
    },
});

export default RenderResturaunts;
