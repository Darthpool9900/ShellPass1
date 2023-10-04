import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../../styles/Styles';
import { useNavigation } from "@react-navigation/native";


export default function Question7() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const navigation = useNavigation();
  return (
    <View>
        <Text style={{left:'1%', fontSize: 14, fontWeight: 'bold', top: '14%'}}>
            O líquido de arrefecimento é um pequeno tanque de plástico transparente com
            marcações de nível, olhe no reservatório o seu nível.
        </Text>
        <View style={Styles.phoneFrame}>
      <Text style={Styles.title}>Qual o nível de arrefecimento do carro?</Text>
      <View>
        <TouchableOpacity
          style={[
            Styles.menuOption,
            selectedOption === 3 && Styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(3)}
        >
          <Text style={{fontSize: 18, fontWeight: 'bold', left: '20%', top: '20%'}}>Mínimo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.menuOption2,
            selectedOption === 4 && Styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(4)}
        >
          <Text style={{fontSize: 18, fontWeight: 'bold', left: '13%', top: '20%'}}>Máximo</Text>
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
              navigation.navigate('Question8')
            }}>
              Avançar
            </Text>
          </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};