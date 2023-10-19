import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from "../authComponents/CustomInput";
import CustomButton from "../authComponents/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

 export default function SignInScreen({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();



    const onSignInPressed = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        navigation.navigate('Home')
        const user = userCredential.user;
        // ...
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
        
    };

    const IrparaCadastro = () => {
        console.warn('Criar uma conta')
        navigation.navigate('Cadastro')
    };
    const navigation = useNavigation();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <View style={styles.root}>
                    <Image 
                    source={require('../../../assets/perolaW.png')}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"/>

                    <CustomInput placeholder='Email' 
                    value={email} 
                    setValue={setEmail}/>

                    <CustomInput placeholder="Senha" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}/>

                    <CustomButton text='Entrar'
                    onPress={onSignInPressed}/>

                    <CustomButton text='Não tem uma conta? Crie uma' 
                    onPress={IrparaCadastro} 
                    type="TERTIARY"/>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200
    },
    root: {
        alignItems: 'center',
        padding: 65,
        marginTop: '30%'
    },
    card: {
        height: '30%',
        backgroundColor: '#FFD700',

    }
})