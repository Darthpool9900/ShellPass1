import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from 'phosphor-react-native';
import {  updateDoc, doc, collection } from "firebase/firestore"
import { getFirestore } from 'firebase/firestore'
import app from '../../../services/firebaseConfig'

export default function Question12() {
  const db = getFirestore(app);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const question13DocRef = doc(collection(db, 'perguntas'), 'Question13');

  const handleOptionSelect1 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === 'Próximo a 12,3V') {
      await updateDoc((question13DocRef), {
        resposta1: true,
        resposta2: false
      })
    }
  };
  

  const handleOptionSelect2 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === '12,2V ou menos') {
      await updateDoc((question13DocRef), {
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
          <Text style={styles.title}>Qual a carga da bateria?</Text>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === 'Próximo a 12,3V' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect1('Próximo a 12,3V')}
          >
            <Text style={[styles.menuText, { color: selectedOption === 'Próximo a 12,3V' ? 'white' : 'black' }]}>
            Próximo a 12,3V
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === '12,2V ou menos' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect2('12,2V ou menos')}
          >
            <Text style={[styles.menuText, { color: selectedOption === '12,2V ou menos' ? 'white' : 'black' }]}>
            12,2V ou menos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              { opacity: isNextButtonEnabled ? 1 : 0.2 }
            ]}
            onPress={() => {
              if (isNextButtonEnabled) {
                navigation.navigate('Question13');
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
