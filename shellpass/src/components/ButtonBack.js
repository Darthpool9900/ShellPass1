import { View, TouchableOpacity } from "react-native";
import { ArrowCircleLeft } from "phosphor-react-native";
import Styles from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";

export default function ButtonBack() {
    const navigation = useNavigation()
    return(
        <View style={Styles.ButtonBack}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home")
            }}>
                 <ArrowCircleLeft size={32} />
            </TouchableOpacity>
        </View>
    );
};