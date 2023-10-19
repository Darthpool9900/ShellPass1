import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from 'phosphor-react-native';
import {  updateDoc, doc, collection } from "firebase/firestore"
import { getFirestore } from 'firebase/firestore'
import app from '../../services/firebaseConfig'


export default function Manualmente() {
  const db = getFirestore(app);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const question1DocRef = doc(collection(db, 'perguntas'), 'Question1');


  const handleOptionSelect1 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === 'Manual') {
      await updateDoc((question1DocRef), {
        resposta1: true,
        resposta2: false
      })
    }
  };
  

  const handleOptionSelect2 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === 'Automático') {
      await updateDoc((question1DocRef), {
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
          <Text style={{ left: '5%', fontSize: 17, fontWeight: 'bold', top: '10%' }}>
            Entenda: Fazer manualmente não é a escolha
            mais precisa, se deseja maior precisão opte pelo sensor OBD2!
          </Text>
        </View>
        <View style={styles.phoneFrame}>
          <Text style={styles.title}>Seu carro é manual ou automático?</Text>

          <TouchableOpacity
            style={[
              styles.menuOption,
              selectedOption === 'Manual' ? { backgroundColor: '#70126A' } : null
            ]}
            onPress={() => handleOptionSelect1('Manual')}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: selectedOption === 'Manual' ? '#fff' : '#000' }}>
              Manual
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              selectedOption === 'Automático' ? { backgroundColor: '#70126A' } : null
            ]}
            onPress={() => handleOptionSelect2('Automático')}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: selectedOption === 'Automático' ? '#fff' : '#000' }}>
              Automático
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              // Desabilitar o botão se nenhuma opção for selecionada
              { opacity: isNextButtonEnabled ? 1 : 0.2 }
            ]}
            onPress={() => {
              if (isNextButtonEnabled) {
                navigation.navigate('Question1');
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
})
