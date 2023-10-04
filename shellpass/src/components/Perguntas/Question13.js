import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../../styles/Styles';
import { useNavigation } from "@react-navigation/native";


export default function Question13() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const navigation = useNavigation();
  return (
    <View>
        <View style={Styles.phoneFrame}>
      <Text style={Styles.title}>Qual a carga da bateria?</Text>
      <View>
        <TouchableOpacity
          style={[
            Styles.menuOption,
            selectedOption === 3 && Styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(3)}
        >
          <Text style={{fontSize: 18, fontWeight: 'bold', left: '20%', top: '20%'}}>Perto de 12,3 V</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.menuOption2,
            selectedOption === 4 && Styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(4)}
        >
          <Text style={{fontSize: 18, fontWeight: 'bold', left: '13%', top: '20%'}}>Menos de 12,2 V</Text>
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
              navigation.navigate('Question14')
            }}>
              Avançar
            </Text>
          </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};