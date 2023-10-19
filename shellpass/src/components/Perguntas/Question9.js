import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from 'phosphor-react-native';
import {  updateDoc, doc, collection } from "firebase/firestore"
import { getFirestore } from 'firebase/firestore'
import app from '../../../services/firebaseConfig'

export default function Question9() {
  const db = getFirestore(app);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const question10DocRef = doc(collection(db, 'perguntas'), 'Question10');

  const handleOptionSelect1 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === 'Mínimo') {
      await updateDoc((question10DocRef), {
        resposta1: true,
        resposta2: false
      })
    }
  };
  

  const handleOptionSelect2 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === 'Máximo') {
      await updateDoc((question10DocRef), {
        resposta2: true,
        resposta1: false
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
          <Text style={styles.title}>Qual o nível de fluído do fluído da direção hidráulica?</Text>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === 'Mínimo' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect1('Mínimo')}
          >
            <Text style={[styles.menuText, { color: selectedOption === 'Mínimo' ? 'white' : 'black' }]}>
              Mínimo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === 'Máximo' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect2('Máximo')}
          >
            <Text style={[styles.menuText, { color: selectedOption === 'Máximo' ? 'white' : 'black' }]}>
              Máximo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              { opacity: isNextButtonEnabled ? 1 : 0.2 }
            ]}
            onPress={() => {
              if (isNextButtonEnabled) {
                navigation.navigate('Question10');
              }
            }}
          >
            <Text style={styles.nextButtonText}>
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
  
  nextButton: {
    backgroundColor: '#FFD700',
    width: '25%',
    height: '6%',
    borderRadius: 5,
    alignSelf: 'center',
    paddingTop: 5,
    top: '10%',
  },
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
    marginVertical: '15%',
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
  nextButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
