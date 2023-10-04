import { View, Image, Text} from "react-native";
import Styles from "../styles/Styles";
import ButtonBB from "../components/ButtonBB";

export default function Ponto() {
    return(
        <View style={Styles.containerQ}>
            <View style={Styles.topYellow}>
                <ButtonBB />
            </View>
            <View>
                <ButtonBB />
            </View>
            <View style={{marginTop: '40%', left: '18%'}}>
            <Image source={require('../../assets/perolaW.png')}
            style={{width: '65%', height: '60%'}}>
            </Image>
            </View>
            <View>
                <Text style={{color: '#515151', fontSize: 23, marginTop: '-30%'}}>
                    Ops... Parece que você não tem pontos.
                </Text>
            </View>
        </View>
    );
};