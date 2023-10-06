import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ButtonBB from '../components/ButtonBB';

export default function Camera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    React.useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
      const handleBarCodeScanned = ({ data }) => {
        if (!scanned) {
          setScanned(true);
          alert(`O QRcode foi escaneado com sucesso: ${data}`);
        }
      };
    return(
        <View style={styles.container}>

            {hasPermission === null ? (
        <Text>Esperando a permissão do uso da câmera...</Text>
      ) : hasPermission === false ? (
        <Text>O acesso à câmera foi negado, verifique suas configurações </Text>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}


        <ButtonBB />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });