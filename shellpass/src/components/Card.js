import { View, Text, TouchableOpacity} from "react-native";
import Styles from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";

export default function Card() {
    const navigation = useNavigation();
    return(
        <View style={Styles.Card}>
            <View style={{height: 'auto', alignItems: 'center'}}>
                <Text style={{color: 'white', 
                fontFamily: 'System', 
                fontSize: 28, 
                fontWeight: 'bold', 
                marginTop: '5%'}}> Pague e ganhe</Text>
                <Text style={{color: 'white', fontFamily: 'System', fontSize: 17, margin: '2%'}}>Acumule pontos que valem</Text>
                <Text style={{color: 'white', fontFamily: 'System', fontSize: 17, margin: '2%'}}>descontos ou milhas Smiles!</Text>
            </View>
            <TouchableOpacity style={Styles.inputCard} onPress={() => {
                navigation.navigate('QrCode')
            }}>
                <Text style={{color: "#BBBCBB"}}> Digite para pagar</Text>
            </TouchableOpacity>
        </View>
    );
};