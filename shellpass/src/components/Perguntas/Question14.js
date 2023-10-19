import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from 'phosphor-react-native';
import {  updateDoc, doc, collection } from "firebase/firestore"
import { getFirestore } from 'firebase/firestore'
import app from '../../../services/firebaseConfig'

export default function Question14() {
  const db = getFirestore(app);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const question15DocRef = doc(collection(db, 'perguntas'), 'Question15');

  const handleOptionSelect1 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === 'Até 4 meses') {
      await updateDoc((question15DocRef), {
        resposta1: true,
        resposta2: false,
        resposta3: false,
        resposta4: false,
      })
    }
  };
  const handleOptionSelect2 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === '5 - 7 meses') {
      await updateDoc((question15DocRef), {
        resposta1: false,
        resposta2: true,
        resposta3: false,
        resposta4: false,
      })
    }
  };

  const handleOptionSelect3 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === '8 - 12 meses') {
      await updateDoc((question15DocRef), {
        resposta1: false,
        resposta2: false,
        resposta3: true,
        resposta4: false,
      })
    }
  };

  const handleOptionSelect4 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === '+ 1 ano') {
      await updateDoc((question15DocRef), {
        resposta1: false,
        resposta2: false,
        resposta3: false,
        resposta4: true,
      })
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Body}>
        <View style={styles.Corpo}>
          <BotaoVolta1 />
        </View>
        <View style={styles.phoneFrame}>
          <Text style={styles.title}>Qual a última troca das luzes?</Text>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === 'Até 4 meses' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect1('Até 4 meses')}
          >
            <Text style={[styles.menuText, { color: selectedOption === 'Até 4 meses' ? '#fff' : '#000' }]}>Até 4 meses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === '5 - 7 meses' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect2('5 - 7 meses')}
          >
            <Text style={[styles.menuText, { color: selectedOption === '5 - 7 meses' ? '#fff' : '#000' }]}>5 - 7 meses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === '8 - 12 meses' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect3('8 - 12 meses')}
          >
            <Text style={[styles.menuText, { color: selectedOption === '8 - 12 meses' ? '#fff' : '#000' }]}>8 - 12 meses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === '+ 1 ano' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect4('+ 1 ano')}
          >
            <Text style={[styles.menuText, { color: selectedOption === '+ 1 ano' ? '#fff' : '#000' }]}>+ 1 ano</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              // Desabilitar o botão se nenhuma opção for selecionada
              { opacity: isNextButtonEnabled ? 1 : 0.2 }
            ]}
            onPress={() => {
              if (isNextButtonEnabled) {
                navigation.navigate('Question15');
              }
            }}
          >
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Avançar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const BotaoVolta1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={{
        left: '10%',
        marginTop: '10%',
      }}
        onPress={() => {
          navigation.goBack();
        }}>
        <ArrowCircleLeft size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Corpo: {
    height: '20%',
    backgroundColor: '#FFD700'
  },
  container: {
    flex: 1
  },
  Body: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  phoneFrame: {
    backgroundColor: '#fff',
    borderWidth: 10,
    borderColor: '#70126A',
    borderRadius: 20,
    padding: 20,
    width: 320,
    height: 500,
    alignSelf: 'center',
    top: '8%'
  },
  title: {
    color: '#70126A',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  menuOption: {
    backgroundColor: '#FFD400',
    width: '60%',
    height: '10%',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '5%',
  },
  menuText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  advanceButton: {
    backgroundColor: '#FFD700',
    width: '25%',
    height: '6%',
    borderRadius: 5,
    alignSelf: 'center',
    paddingTop: 5,
    top: '10%',
  },
  advanceButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#FFD700',
    width: '25%',
    height: '6%',
    borderRadius: 5,
    alignSelf: 'center',
    paddingTop: 5,
    top: '10%',
  },
});
