import { View, TouchableOpacity, Text} from "react-native";
import Styles from "../styles/Styles";
import { Trophy } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export default function Points() {
    const navigation = useNavigation();
    return(
        <View style={{marginTop: '20%'}}>
            <Text style={{fontSize: 20, 
                fontWeight: 'bold', 
                marginTop: '17%', 
                left: '10%', 
                fontFamily: 'System', 
                backgroundColor: '#F0F0F0', 
                color: '#373D3F'}}> RESGATE DE PONTOS</Text>
            <View style={{display: 'flex', 
            width: '100%', 
            alignItems: 'center', 
            justifyContent: 'center'}}>
                <TouchableOpacity style={Styles.Points} onPress={() => {
                    navigation.navigate('Ponto')
                }}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft:'5%', marginTop: '5%'}}>
                        <Trophy color="#70126A" size={32} /> 
                        <Text style={{
                            marginTop: '2%',
                            fontSize: 23,
                            marginLeft: 5,
                            fontWeight: 'bold',
                            color: '#70126A'
                        }}> 0 PONTOS</Text>
                    </View>
                    <View style={{marginTop: '5%', marginLeft: '5%'}}>
                        <Text style={{fontSize: 15, fontFamily: 'System'}}>Pague pelo app e junte pontos</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};