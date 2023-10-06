import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from "../authComponents/CustomInput";
import CustomButton from "../authComponents/CustomButton";
import SocialSignInButtons from "../authComponents/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";


 export default function SignInScreen({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();

    const handleLogin = () => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {   
                const user = userCredential.user;
                console.log(user);
                setUser(user);
                    
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }



    const onSignInPressed = () => {
        console.warn('Sign in ')
        navigation.navigate('Home')
    };
    const onForgotPasswordPressed = () => {
        console.warn('Esqueceu a senha')
        navigation.navigate('Esqueceu')
    };

    const onSignUpPress = () => {
        console.warn('Criar uma conta')
        navigation.navigate('Cadastro')
    };
    const navigation = useNavigation();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
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
                onPress={handleLogin}/>

                <CustomButton text='Esqueceu a senha?' 
                onPress={onForgotPasswordPressed} 
                type="TERTIARY"/>

                <SocialSignInButtons />

                <CustomButton text='Não tem uma conta? Crie uma' 
                onPress={onSignUpPress} 
                type="TERTIARY"/>
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
        padding: 65
    }
})