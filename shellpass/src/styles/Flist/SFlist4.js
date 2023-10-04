import { TouchableOpacity, View, Image, Linking } from "react-native";


export default function SFList4() {
    const url = 'https://promo.shell.com.br/junte-troque/gp-sp-2023';
    const openURL = () => {
        Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link: ', err));
    };
    return(
        <TouchableOpacity style={{height: 200, width: 282, backgroundColor: "#70126A", marginRight: 10, borderRadius: 15}}
        onPress={openURL}>
            <View style={{height: '80%', width: '80%'}}>
                <View style={{height: 170, width: 252, backgroundColor: "#red", left: 15, borderRadius: 15, marginTop: 15}}>
                    <Image source={require('../../../assets/Flist4.png')}
                    style={{width: 244, height: 180, borderRadius:15, left: 2, marginTop: -5 }}></Image>
                </View>
            </View>
        </TouchableOpacity>
    );
};