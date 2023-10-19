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
        backgroundColor: '#70126A',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: '#70126A', 
    },
    container_TERTIARY: {
        backgroundColor: '#CAC1FE'
    },
    container_SECONDARY: {
        borderColor: '#70126A',
        borderWidth: 2,
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTIARY:{
        color: 'white'
    },
    text_SECONDARY: {
        color: '#70126A'
    }
})