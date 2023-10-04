import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from 'phosphor-react-native';

export default function Manualmente() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const navigation = useNavigation();
  return (
    <View>
        <BotaoVolta1 />
        <Text style={{left:'5%', fontSize: 17, fontWeight: 'bold', top: '6%'}}>
            Entenda: Fazer manualmente não é a escolha 
            mais precisa, se deseja maior precisão opte pelo sensor OBD2!
        </Text>
        <View style={Styles.phoneFrame}>
      <Text style={Styles.title}>Seu carro é manual ou automático?</Text>
      <View>
        <TouchableOpacity
          style={[
            Styles.menuOption,
            selectedOption === 3 && Styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(3)}
        >
          <Text style={{fontSize: 18, fontWeight: 'bold', left: '20%', top: '20%'}}>Manual</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.menuOption2,
            selectedOption === 4 && Styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(4)}
        >
          <Text style={{fontSize: 18, fontWeight: 'bold', left: '13%', top: '20%'}}>Automático</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.botaoAvancar}>
          <TouchableOpacity>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              left: '17%',
              top: '60%'
            }} onPress={() => {
              navigation.navigate('Question1')
            }}>
              Avançar
            </Text>
          </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};
const BotaoVolta1  = () => {
    const navigation = useNavigation();
    return(
    <View>
        <TouchableOpacity style={{
            marginLeft: 20,
            marginTop: '15%',
        }}
        onPress={() => {
            navigation.navigate('Home');
          }}>
            <ArrowCircleLeft size={32} />
        </TouchableOpacity>
    </View>
    );
};