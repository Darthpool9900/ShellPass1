import React from "react";
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
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
        backgroundColor: '#d3d3d3'
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

export default CustomButton