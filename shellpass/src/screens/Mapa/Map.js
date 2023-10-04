import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { ArrowCircleLeft, CheckCircle } from "phosphor-react-native";
import { MapStyles } from './MapStyles';
import MapView, {PROVIDER_GOOGLE, LatLng, Marker} from 'react-native-maps';
import { GooglePlacesAutocomplete,
  GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import *  as Location from 'expo-location';
import * as Permissions from 'expo-permissions'

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.02;  
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const INITIAL_POSITION = {
      latitude: -23.5505, 
      longitude: -46.6333, 
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
  };

export default function Map() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const navigation = useNavigation();

  useEffect(() =>{
    (async function(){
        const { status, permissions} = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          let location = await Location.getCurrentPositionAsync({});
        } else {
          throw new Error('Location permission not granted')
        }
    })(); //uma invocation function, invoca ela automaticamente por isso o () no final
  });
  return (
    <View style={MapStyles.container}>
        <MapView
          style={MapStyles.map}
          initialRegion={INITIAL_POSITION}
          provider={PROVIDER_GOOGLE}
        />



      <View style={MapStyles.search}>
          <BotaoVolta1 />
      </View>
    </View>
  );
}
const BotaoVolta1  = () => {
  const navigation = useNavigation()
  return(
  <View>
      <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
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
