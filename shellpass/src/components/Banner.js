import { View, TouchableOpacity,  } from "react-native";
import Styles from "../styles/Styles";
import { List, Question, Bell} from 'phosphor-react-native';
import { useNavigation } from "@react-navigation/native";
import Card from "./Card";


export default function Banner() {
    const navigation = useNavigation()
    return(
       <View style={Styles.Corpo}>
            <View style={Styles.container}>
                <View style={Styles.left}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Menu')
                    }}>
                        <List size={32} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.right}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Bell')
                    }}>
                        <Bell size={32} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '55%'}}
                    onPress={() => {
                        navigation.navigate("Question")
                    }}>
                        <Question size={32} />
                    </TouchableOpacity>
                </View>
            </View>
            <Card />
        </View>
    );
};