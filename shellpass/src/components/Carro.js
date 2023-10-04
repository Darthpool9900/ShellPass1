import { View, Text, TouchableOpacity } from 'react-native';
import { Car } from "phosphor-react-native";
import Styles from '../styles/Styles';
import { useNavigation  } from '@react-navigation/native';


export default function Carro() {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={Styles.BordaLogoCarro}>
                <Car
                    size={80}
                    color='#70126A'
                    style={{ marginLeft: 17, marginTop: 20 }}
                />
            </View>

            <View
                style={{
                    backgroundColor: '#70126A', 
                    width: '60%',
                    height: '40%',
                    marginTop: '15%',
                    marginLeft: '2%',
                    borderRadius: 10,
                    justifyContent: 'center', 
                    alignItems: 'center',     
                }}
            >
                <TouchableOpacity
                    onPress={() => { 
                        navigation.navigate('OptionManu')
                    }}
                >
                    <Text
                        style={{
                            fontSize: 23,       
                            color: '#FFD700',   
                        }}
                    >
                        Tudo sobre o seu carro
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}