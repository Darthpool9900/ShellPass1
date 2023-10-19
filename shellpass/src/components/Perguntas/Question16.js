import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { collection, doc, getFirestore, getDocs } from "firebase/firestore";
import app from '../../../services/firebaseConfig';

export default function Question16() {
  const db = getFirestore(app);
  const [respostas, setRespostas] = useState({}); // Estado para armazenar as respostas

  // Função para buscar respostas no Firestore
  const fetchRespostas = async () => {
    const perguntasCollection = collection(db, 'perguntas');
    const querySnapshot = await getDocs(perguntasCollection);
    let respostasData = {};

    querySnapshot.forEach((doc) => {
      respostasData[doc.id] = doc.data();
    });

    setRespostas(respostasData);
  };

  // Use useEffect para buscar as respostas quando o componente for montado
  useEffect(() => {
    fetchRespostas();
  }, []);

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações com base nas respostas:</Text>
      <Text>Resposta 1: {respostas.Question1?.resposta1 ? 'Sim' : 'Não'}</Text>
      <Text>Resposta 1: {respostas.Question1?.resposta2 ? 'Sim' : 'Não'}</Text>
      <Text>Resposta 2: {respostas.Question2?.resposta1 ? 'Sim' : 'Não'}</Text>
      <Text>Resposta 2: {respostas.Question2?.resposta2 ? 'Sim' : 'Não'}</Text>
      <Text>Resposta 2: {respostas.Question2?.resposta3 ? 'Sim' : 'Não'}</Text>
      <Text>Resposta 2: {respostas.Question2?.resposta4 ? 'Sim' : 'Não'}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
