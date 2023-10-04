import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from "../authComponents/CustomButton";
import CustomInput from "../authComponents/CustomInput";
import { useNavigation } from "@react-navigation/native";


export default function ForgotPasswordScreen() {
    const [newPassword, setNewPassword] = useState('');
    const [repeatenewpassword, setRepeatnewpassword] = useState('');
    const [email, setEmail] = useState('');
    const { height } = useWindowDimensions();
    const onRegisterPressed = () => {
        console.warn('Registrou nova senha ')
    };

    const navigation = useNavigation();

    return (
        <ScrollView
            
            showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}> Esqueceu a senha? </Text>

                <CustomInput placeholder='Seu email'
                    value={email}
                    setValue={setEmail} />

                <CustomInput placeholder='Nova senha'
                    value={newPassword}
                    setValue={setNewPassword}
                    secureTextEntry={true} />

                <CustomInput placeholder='Confirmar nova senha'
                    value={repeatenewpassword}
                    setValue={setRepeatnewpassword}
                    secureTextEntry={true} />

                <CustomButton text='Registrar'
                    onPress={onRegisterPressed}
                />

                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Login')
                }}>
                    <Text style={styles.textButton}> Voltar para o Login </Text>
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
    textButton: {
        fontWeight: 'bold',
        color: 'black'
    }
})