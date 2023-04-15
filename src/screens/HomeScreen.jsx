import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [qrData, setQrData] = useState();
  const [scanned, setScanned] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);

  const getCameraPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handlePressScanButton = async () => {
    if (!hasPermission) await getCameraPermissions();
    setOpenCamera(true);
  };

  const handleBarCodeScanned = ({ data }) => {
    setOpenCamera(false);
    setQrData(data);
    setScanned(true);
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}> Escanea el QR</Text>
      <View style={styles.cameraContainer}>
        {openCamera && (
          <Camera
            style={styles.cameraPreview}
            ratio="1:1"
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            onBarCodeScanned={hasPermission ? handleBarCodeScanned : undefined}
          />
        )}
        <Image
          source={require('../assets/qrFrame.png')}
          style={styles.qrFrame}
        />
      </View>
      <TouchableOpacity onPress={handlePressScanButton} style={styles.qrButton}>
        <Icon name="qr-code" color="#FFFFFF" size={45} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
  },
  cameraContainer: {
    backgroundColor: '#D9D9D9',
    height: 300,
    aspectRatio: 1,
  },
  cameraPreview: {
    height: 300,
    aspectRatio: 1,
  },
  qrFrame: {
    height: 340,
    width: 340,
    top: -20,
    left: -20,
    position: 'absolute',
    borderRadius: 20,
  },
  qrButton: {
    width: 78,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
