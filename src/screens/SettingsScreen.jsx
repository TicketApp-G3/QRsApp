import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenTitle from '../components/ScreenTitle';
import { AuthContext } from '../contexts/AuthContext';

const SettingsScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <ScreenTitle title="Opciones" />
      <TouchableOpacity onPress={logout} style={styles.optionButton}>
        <Text style={styles.text}>Cerrar sesión</Text>
        <Icon name="logout" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
  },
});

export default SettingsScreen;
