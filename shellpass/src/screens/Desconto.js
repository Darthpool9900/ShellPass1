import { View, Text, TouchableOpacity, TextInput} from "react-native";
import Styles from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import {ArrowFatRight} from "phosphor-react-native";

export default function Desconto(){
    return(
        <View  style={Styles.containerF5}>
            <View>
                <BotaoVolta />
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'white',
                marginTop: '40%',
                marginLeft: '20%'
            }}>
                Ative seu código de desconto e aproveite! 
            </Text>
            </View>
            <View style={Styles.BlocoDesconto}>
                <Text style={Styles.TextDiscount}>ATIVAR CÓDIGO</Text>
                <TextInput style={Styles.InputDisconut}></TextInput>
                <Ativar />
            </View>
        </View>
    );
};
const BotaoVolta  = () => {
    const navigation = useNavigation()
    return(
    <View>
        <TouchableOpacity style={{
            marginLeft: 30,
            marginTop: '20%',
        }}
        onPress={() => {
            navigation.navigate('Home');
          }}>
            <Text style={{fontSize: 28}}> X </Text>
        </TouchableOpacity>
    </View>
    );
};
const Ativar = () => {
    return(
        <View>
            <TouchableOpacity style={{backgroundColor: '#FFD700',
        marginLeft: '80%',
        marginTop: '-12%',
        borderRadius: 2}}>
                <ArrowFatRight size={32} />
            </TouchableOpacity>
        </View>
    )
}