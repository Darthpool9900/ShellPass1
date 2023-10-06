import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { MapStyles } from './MapStyles';
import { ArrowCircleLeft } from "phosphor-react-native";

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Map() {
  const [origin, setOrigin] = useState(null);
  const [postosShell, setPostosShell] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async function () {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        try {
          const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
          setOrigin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          });

          // Chame a função para buscar postos próximos aqui
          buscarPostosProximosAoUsuario(location.coords.latitude, location.coords.longitude);
        } catch (error) {
          console.error('Erro ao obter a localização do usuário:', error);
        }
      } else {
        throw new Error('Location permission not granted');
      }
    })();
  }, []);

  // Função para buscar postos Shell próximos
  async function buscarPostosShellProximos(latitude, longitude, apiKey) {
    const apiUrl = 'https://api-dev.shell.com/oauth/v1/mobility/token';
    const raioEmMetros = 5000;

    try {
      const response = await axios.get(apiUrl, {
        params: {
          lat: latitude,
          lon: longitude,
          radius: raioEmMetros,
        },
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      // Verifique se a resposta foi bem-sucedida
      if (response.status === 200) {
        // A resposta contém os postos Shell próximos
        const postosShell = response.data;
        return postosShell;
      } else {
        // Trate o erro de resposta não bem-sucedida aqui
        console.error('Erro ao buscar postos Shell próximos:', response.statusText);
        return null;
      }
    } catch (error) {
      // Trate erros de rede ou outras exceções aqui
      console.error('Erro ao buscar postos Shell próximos:', error);
      return null;
    }
  }

  // Função para buscar postos próximos ao usuário
  async function buscarPostosProximosAoUsuario(latitude, longitude, apiKey) {
    const postosProximos = await buscarPostosShellProximos(latitude, longitude, apiKey);

    if (postosProximos) {
      setPostosShell(postosProximos);
    } else {
      // Lide com o erro ou falha na busca dos postos Shell
      console.error('Não foi possível buscar postos Shell próximos');
    }
  }

  return (
    <View style={MapStyles.container}>
      <View style={MapStyles.search}>
        <BotaoVolta1 />
        <TouchableOpacity
          style={MapStyles.bloco}
          onPress={() => {
            buscarPostosProximosAoUsuario(origin.latitude, origin.longitude);
          }}
        >
          <Text style={MapStyles.text}>Buscar postos próximos a você</Text>
        </TouchableOpacity>
      </View>
      <MapView
        style={MapStyles.map}
        initialRegion={origin}
        showsUserLocation={true}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
      >
        {postosShell.map((posto, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: posto.latitude,
              longitude: posto.longitude,
            }}
            title={posto.nome}
            description={posto.endereco}
          />
        ))}
      </MapView>
    </View>
  );
}
const BotaoVolta1  = () => {
  const navigation = useNavigation()
  return(
  <View>
      <TouchableOpacity style={{
          justifyContent: 'center',
          paddingTop: 45,
          backgroundColor: '#FFD700',
          width: 32
      }}
      onPress={() => {
          navigation.goBack();
        }}>
          <ArrowCircleLeft size={32}  />
      </TouchableOpacity>
  </View>
  );
};