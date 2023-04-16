import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScanResultModal from '../components/ScanResultModal';
import apiProvider from '../api/apiProvider';

const HomeScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [qrData, setQrData] = useState();
  const [openCamera, setOpenCamera] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const getCameraPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handlePressScanButton = async () => {
    if (!hasPermission) await getCameraPermissions();
    setOpenCamera(!openCamera);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleBarCodeScanned = async ({ data }) => {
    const { id } = JSON.parse(data);
    setOpenCamera(false);

    await apiProvider.scanQR({
      ticketId: id,
      onSuccess: (response) => {
        setQrData(JSON.parse(data));
        setOpenModal(true);
        console.log(response);
      },
    });
  };

  const mockedBarCodeScanned = ({ data }) => {
    setOpenCamera(false);
    setQrData({ ...JSON.parse(data), error: 'El QR ya fue escaneado' });
    setOpenModal(true);
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}> Escanea el QR</Text>
      <View style={styles.cameraContainer}>
        {openCamera ? (
          <Camera
            style={styles.cameraPreview}
            ratio="1:1"
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            onBarCodeScanned={hasPermission ? mockedBarCodeScanned : undefined}
          />
        ) : (
          <Text style={styles.cameraInfoMessage}>
            Presione el botón para escanear
          </Text>
        )}
        <Image
          source={require('../assets/qrFrame.png')}
          style={styles.qrFrame}
        />
      </View>

      <TouchableOpacity onPress={handlePressScanButton} style={styles.qrButton}>
        <Icon name="qr-code" color="#FFFFFF" size={45} />
      </TouchableOpacity>

      <ScanResultModal
        data={qrData}
        visible={openModal}
        onClose={handleCloseModal}
      />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraPreview: {
    height: 300,
    aspectRatio: 1,
  },
  qrFrame: {
    height: 300,
    width: 300,
    position: 'absolute',
  },
  qrButton: {
    width: 78,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: '#DB162F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
  cameraInfoMessage: {
    fontSize: 28,
    textAlign: 'center',
  },
});

export default HomeScreen;
