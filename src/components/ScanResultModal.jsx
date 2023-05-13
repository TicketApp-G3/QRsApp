import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { dateTimeFormatter } from '../utils/formatters';
import CustomButton from './CustomButton';

const ScanResultModal = ({ visible, onClose, data = {} }) => {
  const { ticketId, eventTitle, userId, userName, errorMessage, valid } = data;
  const currentDate = dateTimeFormatter(new Date());
  const navigation = useNavigation();

  const getHashedId = () => {
    if (!ticketId) return '';

    const idUpper = ticketId.toUpperCase();
    return (
      idUpper[0] +
      idUpper[5] +
      idUpper[12] +
      idUpper[18] +
      idUpper[20] +
      idUpper[23]
    );
  };

  const goBack = () => navigation.goBack();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.background}
        onPressOut={onClose}
      />

      <View style={styles.modalContainer}>
        <View>
          {!valid ? (
            <Text style={[styles.errorTitle, styles.title]}>
              Error con el QR <Icon name="closecircle" size={30} />
            </Text>
          ) : (
            <Text style={[styles.successTitle, styles.title]}>
              QR Escaneado{' '}
              <Icon name={!valid ? 'closecircle' : 'checkcircle'} size={30} />
            </Text>
          )}
          <Text style={styles.ticketId}>Ticket ID: {getHashedId()}</Text>
        </View>

        {!valid ? (
          <View>
            <Text style={styles.modalTitleInfo}>
              Ocurrio un error al escanear el QR
            </Text>
            <Text style={styles.modalInfo}>{errorMessage}</Text>
          </View>
        ) : (
          <View style={styles.modalInfoContainer}>
            <Text style={styles.modalTitleInfo}>
              Dueño de la entrada{'\n'}
              <Text style={styles.modalInfo}>
                {userName} ({userId})
              </Text>
            </Text>

            <Text style={styles.modalTitleInfo}>
              Evento {'\n'}
              <Text style={styles.modalInfo}>{eventTitle}</Text>
            </Text>

            <Text style={styles.modalTitleInfo}>
              Fecha de escaneo {'\n'}
              <Text style={styles.modalInfo}>{currentDate}</Text>
            </Text>
          </View>
        )}

        <View style={styles.buttonsContainer}>
          <CustomButton title="Home" variant="outlined" onPress={goBack} />
          <CustomButton title="Escanear de nuevo" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
  modalContainer: {
    backgroundColor: '#fff',
    height: '60%',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: '40%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    position: 'relative',
  },
  errorTitle: {
    color: '#DB162F',
  },
  successTitle: {
    color: '#2AB014',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  modalTitleInfo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalInfo: {
    fontSize: 24,
    fontWeight: 300,
  },
  modalInfoContainer: {
    display: 'flex',
    gap: 20,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  ticketId: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default ScanResultModal;
