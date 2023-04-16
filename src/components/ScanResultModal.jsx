import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ScanResultModal = ({ visible, onClose, data = {}, error = '' }) => {
  const { eventId, eventTitle, status, userId, userName } = data;

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
        {error ? (
          <Text style={[styles.errorTitle, styles.title]}>
            Error con el QR <Icon name="closecircle" size={30} />
          </Text>
        ) : (
          <Text style={[styles.successTitle, styles.title]}>
            QR Escaneado{' '}
            <Icon name={error ? 'closecircle' : 'checkcircle'} size={30} />
          </Text>
        )}

        {error ? (
          <View>
            <Text style={styles.modalTitleInfo}>
              Ocurrio un error al escanear el QR
            </Text>
            <Text style={styles.modalInfo}>{error}</Text>
          </View>
        ) : (
          <View style={styles.modalInfoContainer}>
            <Text style={styles.modalTitleInfo}>
              Dueño de la entrada{'\n'}
              <Text style={styles.modalInfo}>{userName}</Text>
            </Text>

            <Text style={styles.modalTitleInfo}>
              Evento {'\n'}
              <Text style={styles.modalInfo}>{eventTitle}</Text>
            </Text>

            <Text style={styles.modalTitleInfo}>
              Fecha de escaneo {'\n'}
              <Text style={styles.modalInfo}>{userName}</Text>
            </Text>
          </View>
        )}

        <TouchableOpacity onPress={onClose} style={styles.backButton}>
          <Icon name="home" color="#FFFFFF" size={45} />
        </TouchableOpacity>
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
    padding: 20,
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
  backButton: {
    width: 78,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: '#DB162F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  modalInfoContainer: {
    display: 'flex',
    gap: 20,
  },
});

export default ScanResultModal;
