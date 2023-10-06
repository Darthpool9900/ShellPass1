import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CustomButton ({ onPress, text, type = 'PRIMARY', bgColor, fgColor, logo }) {
    return(
        <TouchableOpacity 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {}
        ]}
        onPress={onPress}>
            <Text style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {}
                ]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b71f3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: '#3b71f3', 
    },
    container_TERTIARY: {
        backgroundColor: '#f0f0f0'
    },
    container_SECONDARY: {
        borderColor: '#3b71f3',
        borderWidth: 2,
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTIARY:{
        color: 'gray'
    },
    text_SECONDARY: {
        color: '#3b71f3'
    }
})
