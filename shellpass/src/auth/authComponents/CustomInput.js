import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
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
        height: '8%',
        justifyContent: 'center'
    },
    input: {
       
    }
})
export default CustomInput