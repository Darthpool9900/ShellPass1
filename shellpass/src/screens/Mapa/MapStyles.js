import React from "react";
import { StyleSheet } from "react-native";



export const MapStyles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#f0f0f0', 
        },
        map: {
            height: '80%',
            width:'100%',

        },
        search: {
            height: '20%',
            backgroundColor: '#FFD700',
        },
        bloco: {
            width: '50%',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'white',
            height: '20%',
            borderRadius: 10,
        },
        text: {
            alignSelf: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 12
        }
      
})