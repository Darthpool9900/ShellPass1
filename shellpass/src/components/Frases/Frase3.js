import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft } from "phosphor-react-native";
import { ArrowRight } from "phosphor-react-native";

export default function Frase3({ onNext, onBack }) {
    return (
        <View
            style={{
                backgroundColor: '#70126A',
                width: 230,
                height: 150,
                marginTop: 50,
                borderRadius: 10,
            }}>

            <Text
                style={{
                    fontSize: 18,
                    color: '#FFD700',
                    marginTop: 10,
                    marginLeft: 6,
                }}> Na opção Tudo sobre seu carro:</Text>
            <Text style={{
                fontSize: 15,
                color: '#FFD700',
                marginTop: 6,
                marginLeft: 6,
            }}>Você verá todas as funcionalidades da manutenção Preventiva.</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 12,
                    marginTop: 5,
                }}>
                <TouchableOpacity onPress={onBack}>
                    <View>
                        <ArrowLeft
                            size={25}
                            color="#fff" />
                    </View>
                </TouchableOpacity>

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