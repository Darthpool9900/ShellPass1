import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { MapStyles } from './MapStyles';
import { ArrowCircleLeft } from "phosphor-react-native";
import axios from 'axios';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Map() {
  const [origin, setOrigin] = useState(null);
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Adicionado estado de carregamento

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
        } catch (error) {
          console.error('Erro ao obter a localização do usuário:', error);
        }
      } else {
        throw new Error('Location permission not granted');
      }
    })();
  }, []);

  const PostosProximos = async () => {
    try {
      const response = await fetch('https://shellgsllocator.geoapp.me/api/v2/locations/nearest_to?lat=-23.555771&lng=-46.639557&limit=50&locale=pt_BR&format=json%27');
      const json = await response.json();
      setData(json.postos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    PostosProximos();
  }, []);

  return (
    <View style={MapStyles.container}>
      <View style={MapStyles.search}>
        <BotaoVolta1 />
        <TouchableOpacity
        style={MapStyles.bloco}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.releaseYear}</Text>
            </View>
          )}
        >
        <Text style={MapStyles.text}>Buscar postos próximos a você</Text>
        </TouchableOpacity >
      </View>

      <MapView
        style={MapStyles.map}
        initialRegion={origin}
        showsUserLocation={true}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
      >
        <Text >Marcadores no mapa, se necessário </Text> 
      </MapView>
    </View>
  );
}

const BotaoVolta1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          paddingTop: 45,
          backgroundColor: '#FFD700',
          width: 32,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <ArrowCircleLeft size={32} />
      </TouchableOpacity>
    </View>
  );
};
