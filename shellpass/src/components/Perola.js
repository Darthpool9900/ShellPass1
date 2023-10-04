import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Frase1 from './Frases/Frase1';
import Frase2 from './Frases/Frase2';
import Frase3 from './Frases/Frase3';
import Frase4 from './Frases/Frase4';

export default function Perola() {
    const [mostrarFrase1, setMostrarFrase1] = useState(true); // Inicialmente exibe a Frase1
    const [mostrarFrase2, setMostrarFrase2] = useState(false);
    const [mostrarFrase3, setMostrarFrase3] = useState(false);
    const [mostrarFrase4, setMostrarFrase4] = useState(false);

    const exibirFrase1 = () => {
        setMostrarFrase1(true);
        setMostrarFrase2(false);
        setMostrarFrase3(false);
        setMostrarFrase4(false); 
    };

    const exibirFrase2 = () => {
        setMostrarFrase2(true);
        setMostrarFrase1(false);
        setMostrarFrase3(false); 
        setMostrarFrase4(false);
    };

    const exibirFrase3 = () => {
        setMostrarFrase3(true);
        setMostrarFrase2(false);
        setMostrarFrase1(false); 
        setMostrarFrase4(false);
    };
    const exibirFrase4 = () => {
        setMostrarFrase4(true);
        setMostrarFrase2(false);
        setMostrarFrase1(false);
        setMostrarFrase3(false);
    };


    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={require('../../assets/PerolaPC.png')}
                style={{ width: '30%', height: '90%', marginLeft: '8%', marginTop: '7%' }}
            />
            <View>
                {mostrarFrase1 ? (
                    <Frase1
                        onNext={exibirFrase2}
                    />
                ) : mostrarFrase2 ? (
                    <Frase2
                        onBack={exibirFrase1}
                        onNext={exibirFrase3}
                    />
                ) : mostrarFrase3 ? (
                    <Frase3
                        onBack={exibirFrase2}
                        onNext={exibirFrase4}
                    />
                ) : mostrarFrase4 ? (
                    <Frase4
                        onBack={exibirFrase3}
                    />
                ) : null}
            </View>
        </View>
    )
}