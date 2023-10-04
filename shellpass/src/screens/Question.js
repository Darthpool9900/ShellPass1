import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Styles from '../styles/Styles';
import ButtonBack from '../components/ButtonBack';

export default function Question(){
  const [selectedOption, setSelectedOption] = useState(null);
  const transitionValue = useState(new Animated.Value(0))[0];

  const options = [
    {
      text: 'Como usar o Shell Pass',
      description:
        'Para utilizar o Shell Pass, basta você colocar as informações das suas últimas trocas no aplicativo e o app te mostrará qual é a troca mais urgente para você, por exemplo.',
      redirectText: 'Página do Shell Pass',
    },
    {
      text: 'Problemas no pagamento',
      description: 'Ajuda para resolver problemas relacionados ao pagamento.',
      redirectText: 'Página de Problemas de Pagamento',
    },
    {
      text: 'Problemas na minha conta',
      description: 'Soluções para questões relacionadas à sua conta.',
      redirectText: 'Página de Problemas de Conta',
    },
    {
      text: 'Descontos',
      description: 'Informações sobre os descontos disponíveis.',
      redirectText: 'Página de Descontos',
    },
    {
      text: 'Resgate de milhas',
      description: 'Passo a passo para resgatar suas milhas.',
      redirectText: 'Página de Resgate de Milhas',
    },
  ];

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    Animated.timing(transitionValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBackClick = () => {
    setSelectedOption(null);
    Animated.timing(transitionValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const transitionStyle = {
    transform: [
      {
        translateX: transitionValue.interpolate({
          inputRange: [0, 1],
          outputRange: [400, 0],
        }),
      },
    ],
  };

  return (
    <View style={Styles.containerQ}>
      <View style={Styles.yellowBackground}>
      <ButtonBack />
        <Text style={Styles.yellowText}>Como podemos te ajudar?</Text>
      </View>
      <View style={Styles.content}>
        <View style={Styles.optionFrame}>
          <View style={Styles.optionContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={option.text}
                onPress={() => handleOptionClick(index)}
                style={[
                  Styles.option,
                  selectedOption === index && Styles.selectedOption,
                ]}
              >
                <Text
                  style={[
                    Styles.optionText,
                    selectedOption === index && Styles.selectedOptionText,
                  ]}
                >
                  {option.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      {/* Área de transição */}
      <Animated.View style={[Styles.transitionContainer, transitionStyle]}>
        {selectedOption !== null && (
          <View style={[Styles.transitionTab, Styles.centeredContent]}>
            <View style={Styles.transitionTabInner}>
              <Text style={Styles.transitionText}>
                {options[selectedOption]?.description}
              </Text>
            </View>
            <TouchableOpacity onPress={handleBackClick} style={Styles.backButton}>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

