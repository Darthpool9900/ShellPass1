import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Wrench } from "phosphor-react-native";
import Styles from '../styles/Styles';

const linkURL = 'https://www.shell.com.br/motoristas/sobre-os-postos-shell.html';


export default function Ferramenta() {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={Styles.BordaLogoFerramenta}>
                <Wrench
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
                    marginTop: '20%',
                    marginLeft: '2%',
                    borderRadius: 10,
                    justifyContent: 'center', 
                    alignItems: 'center',     
                }}
            >
                <TouchableOpacity
                    onPress={() => { Linking.openURL(linkURL); }}
                >
                    <Text
                        style={{
                            fontSize: 22,       
                            color: '#FFD700',   
                        }}
                    >
                        Serviços de Manutenção
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}