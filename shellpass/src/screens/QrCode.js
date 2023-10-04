import { View, Text, TouchableOpacity, TextInput} from "react-native";
import Styles from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import { QrCode } from "phosphor-react-native";
import ButtonBB from "../components/ButtonBB";
import Payment from "./Payment";

export default function Qrcode() {
    const navigation = useNavigation();
    return(
        <View style={Styles.Corpo}> 
            <Text style={Styles.QrcodeText}>
                Pague pelo App
            </Text>
            <ButtonBB />
            <View></View>
            <View style={Styles.CardCode}>
                <Text style={Styles.CCtext}>Digite o código de pagamento</Text>
                    <TextInput keyboardType="numeric" style={Styles.InText}></TextInput>
                <Text style={Styles.CCtext}>Ou scaneie o QrCode: </Text>
                <IconQR />
            </View>
            <Payment />
        </View>
    );
};
const IconQR = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate('Camera')
        }}>
             < QrCode  size={140} color="white"/>
        </TouchableOpacity>
    );
};