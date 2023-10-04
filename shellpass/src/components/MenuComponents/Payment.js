import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowCircleLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export default function Payments() {
    return(
        <View style={{flex: 1}}> 
            <View style={Bloco1.estilo}>
                <BotaoVolta1 />
            </View>
              <Text style={{fontSize: 28, color: 'black', fontFamily: 'Times New Roman', marginTop: 29, marginLeft: 100}}>Meus Pagamentos</Text>
             <View style={Bloco2.estilo}></View>
        </View>
    );
};

const Bloco1 = StyleSheet.create({
    container: {
        flex: 1
    },
    estilo: {
        height: '9%',
        backgroundColor: '#FFD700',
        marginTop:1,
    },
});
const Bloco2 = StyleSheet.create({
    container: {
        flex: 1
    },
    estilo: {
        height: '8%',
        backgroundColor: '#FFD700',
        marginTop: '165%',
    },
});

const BotaoVolta1  = () => {
    const navigation = useNavigation()
    return(
    <View>
        <TouchableOpacity style={{
            marginLeft: 20,
            marginTop: 40,
        }}
        onPress={() => {
            navigation.navigate('Menu');
          }}>
            <ArrowCircleLeft size={32} />
        </TouchableOpacity>
    </View>
    );
};