import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from 'phosphor-react-native';
import {  updateDoc, doc, collection } from "firebase/firestore"
import { getFirestore } from 'firebase/firestore'
import app from '../../../services/firebaseConfig'

export default function Question6() {
  const db = getFirestore(app);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const question7DocRef = doc(collection(db, 'perguntas'), 'Question7');

  const handleOptionSelect1 = async (option) => {
    setSelectedOption(option);
    setIsNextButtonEnabled(true);
    if (option === '1 - 3 semanas atrás') {
      await updateDoc((question7DocRef), {
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
    if (option === '4 - 5 semanas atrás') {
      await updateDoc((question7DocRef), {
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
    if (option === '2 - 5 meses atrás') {
      await updateDoc((question7DocRef), {
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
    if (option === '+ 6 meses atrás') {
      await updateDoc((question7DocRef), {
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
          <Text style={styles.title}>Qual a última vez que trocou o filtro de óleo?   </Text>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === '1 - 3 semanas atrás' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect1('1 - 3 semanas atrás')}
          >
            <Text style={[styles.menuText, { color: selectedOption === '1 - 3 semanas atrás' ? '#fff' : '#000' }]}>1 - 3 semanas atrás</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === '4 - 5 semanas atrás' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect2('4 - 5 semanas atrás')}
          >
            <Text style={[styles.menuText, { color: selectedOption === '4 - 5 semanas atrás' ? '#fff' : '#000' }]}>4 - 5 semanas atrás</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === '2 - 5 meses atrás' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect3('2 - 5 meses atrás')}
          >
            <Text style={[styles.menuText, { color: selectedOption === '2 - 5 meses atrás' ? '#fff' : '#000' }]}>2 - 5 meses atrás</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.menuOption,
              { backgroundColor: selectedOption === '+ 6 meses atrás' ? '#70126A' : '#FFD400' }
            ]}
            onPress={() => handleOptionSelect4('+ 6 meses atrás')}
          >
            <Text style={[styles.menuText, { color: selectedOption === '+ 6 meses atrás' ? '#fff' : '#000' }]}>+ 6 meses atrás</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              // Desabilitar o botão se nenhuma opção for selecionada
              { opacity: isNextButtonEnabled ? 1 : 0.2 }
            ]}
            onPress={() => {
              if (isNextButtonEnabled) {
                navigation.navigate('Question7');
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
