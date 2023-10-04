import { TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SFList5() {
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={{height: 200, width: 282, backgroundColor: "#70126A", marginRight: 10, borderRadius: 15}}
        onPress={() => {
            navigation.navigate('Desconto')
        }}>
            <View style={{height: '80%', width: '80%'}}>
                <View style={{height: 170, width: 252, backgroundColor: "#red", left: 15, borderRadius: 15, marginTop: 15}}>
                    <Image source={require('../../../assets/Flist5.png')}
                    style={{width: 244, height: 180, borderRadius:15, left: 2, marginTop: -5 }}></Image>
                </View>
            </View>
        </TouchableOpacity>
    );
};