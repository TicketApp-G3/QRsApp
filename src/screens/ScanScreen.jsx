import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import ScanResultModal from '../components/ScanResultModal';
import apiProvider from '../api/apiProvider';
import IconButton from '../components/IconButton';
import ScreenTitle from '../components/ScreenTitle';

const ScanScreen = ({ route }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [qrData, setQrData] = useState();
  const [openCamera, setOpenCamera] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { selectedEventId, eventTitle } = route.params;

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
    const { ticketId, eventId, userId, userName } = JSON.parse(data);
    setOpenCamera(false);

    if (eventId !== selectedEventId) {
      setQrData({
        errorMessage: 'Este QR no pertenece a este evento',
      });
    } else {
      await apiProvider().validateQR({
        ticketId,
        onSuccess: ({ message: errorMessage, valid }) => {
          console.log({ errorMessage, valid });
          setQrData({ errorMessage, valid, eventTitle, userId, userName });
        },
      });
    }
    setOpenModal(true);
  };

  return (
    <View style={styles.screenContainer}>
      <ScreenTitle
        title="Escanea el QR"
        subtitle="Presione el botón para escanear el QR de la entrada."
        canGoBack
      />
      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitleLabel}>Evento</Text>
        <Text style={styles.eventTitle}>{eventTitle}</Text>
      </View>
      <View style={styles.qrContainer}>
        <View style={styles.cameraContainer}>
          {openCamera && (
            <Camera
              style={styles.cameraPreview}
              ratio="1:1"
              barCodeScannerSettings={{
                barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
              }}
              onBarCodeScanned={
                hasPermission ? handleBarCodeScanned : undefined
              }
            />
          )}
          <Image
            source={require('../assets/qrFrame.png')}
            style={styles.qrFrame}
          />
        </View>
        <IconButton onPress={handlePressScanButton} iconName="qr-code" />
      </View>

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
    gap: 40,
    flex: 1,
  },
  eventTitle: {
    fontSize: 20,
    color: '#212121',
  },
  eventTitleLabel: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#212121',
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  cameraContainer: {
    backgroundColor: '#F1F1F1',
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
  title: {
    fontSize: 32,
  },
  cameraInfoMessage: {
    fontSize: 28,
    textAlign: 'center',
  },
});

export default ScanScreen;
