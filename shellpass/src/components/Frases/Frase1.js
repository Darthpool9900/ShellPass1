import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowRight } from "phosphor-react-native";

export default function Frase1({ onNext }) {
    return (
        <View
            style={{
                backgroundColor: '#70126A', 
                width: 235,
                height: 150,
                marginTop: 50,
                borderRadius: 10,

            }}>

            <Text
                style={{
                    fontSize: 22,
                    color: '#FFD700',
                    marginTop: 40,
                    marginLeft: 12,
                }}> Olá, eu sou a Pérola. Sua mecânica virtual </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 12,
                    marginTop: 20,
                    marginLeft: '85%'
                }}>
                <TouchableOpacity onPress={onNext}>
                    <View>
                        <ArrowRight
                            size={25}
                            color="#FFF" />
                    </View>
                </TouchableOpacity>


            </View>
        </View>
    );
}