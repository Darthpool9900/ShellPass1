import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function CustomInput ({value, setValue, placeholder, secureTextEntry}) {
    return(
    <View style={styles.container}>
        <TextInput placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}/>
    </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 5,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 15,
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
    }
})
