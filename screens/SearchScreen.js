import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text } from "react-native";

const SearchScreen = () => {
    return (
        <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = true) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            query={{
                key: "AIzaSyAsiK49NIhkIHQKyHL-N4_9dhhBU5K88aU",
                language: "en",
            }}
        />
    );
};

export default SearchScreen;
