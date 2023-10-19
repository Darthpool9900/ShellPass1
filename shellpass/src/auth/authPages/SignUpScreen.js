import React, {useState} from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Linking} from 'react-native';
import CustomInput from "../authComponents/CustomInput";
import CustomButton from "../authComponents/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebaseConfig";

 export default function SignUpScreen({setUser}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const {height} = useWindowDimensions();
    const handleLogin = () => {
            createUserWithEmailAndPassword(auth, email, password)
                 .then((userCredential) => {
                    navigation.navigate('Home')
                const user = userCredential.user;
                console.log(user);
                setUser(user)
             })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
        // ..
    });
       
    };

    const onSignInPress = () => {
        navigation.navigate('Login')
    };
    const url = 'https://www.freeprivacypolicy.com/live/adc445d0-8687-4f6e-8141-c3cbeae96e9d'
    const openURL = () => {
        Linking.openURL(url).catch((err) => console.error('Erro ai abrir link: ', err))
    }
    const site = 'https://www.termsandconditionsgenerator.com/live.php?token=9kqRbxrgMuL2Kpak1C4Dbfdj04CNyAPM'
    const openSite = () => {
        Linking.openURL(site).catch((err) => console.error('Erro ai abrir link: ', err))
    }

    const navigation = useNavigation();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <View style={styles.root}>
                    <Text style={styles.title}> Crie uma Conta</Text>

                    <CustomInput placeholder='Nome' 
                    value={username} 
                    setValue={setUsername}/>

                    <CustomInput placeholder='Email' 
                    value={email} 
                    setValue={setEmail}/>

                    <CustomInput placeholder="Senha" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}/>

                    <CustomInput placeholder="Repetir senha" 
                    value={passwordRepeat} 
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}/>
                    <CustomButton text='Cadastrar'
                    onPress={handleLogin}/>

                    <Text style={styles.text}>Ao cadastrar, você confirma que você aceita 
                        nossos 
                        <Text style={styles.link} onPress={openSite}> Termos de Uso </Text> e 
                        <Text style={styles.link} onPress={openURL}> Política de Privacidade</Text>
                    </Text>

                    <CustomButton text='Já possui uma conta? Entre' 
                    onPress={onSignInPress} 
                    type="TERTIARY"/>

                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 65,
        marginTop: '45%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        margin: 10
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#fdb075'
    },
    card: {
        height: '30%',
        backgroundColor: '#FFD700',

    }
}) 