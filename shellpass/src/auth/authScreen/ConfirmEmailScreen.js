import React, {useState} from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, TextInput, TouchableOpacity} from 'react-native';

import CustomButton from "../authComponents/CustomButton";
import { useNavigation } from "@react-navigation/native";



 export default function ConfirmEmailScreen() {
    const [code, setCode] = useState('');
    const {height} = useWindowDimensions();
    const onConfirmPressed = () => {
        console.warn('Confirmou o code ')
    };

    const onSignInPress = () => {
        console.warn('Entrar em uma conta')
        navigation.navigate('Login')

    };

    const onResendPress = () => {
        console.warn('Reenviar código')
    };
   const navigation = useNavigation();
   
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}> Confirme seu Email</Text>

                <TextInput style={styles.input}
                value={code}
                setValue={setCode}
                placeholder="Digite o código" />

                <CustomButton text='Entrar'
                onPress={onConfirmPressed}/>

                

                <TouchableOpacity style={styles.button}
                onPress={onSignInPress}>
                        <Text style={styles.textButton}> Voltar para o Login </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}> Reenviar Código </Text>
                </TouchableOpacity>

                
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 65,
        alignContent: 'center',
        top: '50%'
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
    input: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 5,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 15,
        height: '15%',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'pink',
        width: '70%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        top: '50%',

    },
    textButton:{
        fontWeight: 'bold',
        color: 'black'
    }
}) 