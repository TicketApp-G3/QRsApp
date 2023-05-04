import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const GoogleButton = () => {
  const { login } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={login} style={styles.button}>
      <Text style={styles.text}>Google +</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#DB162F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 200,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DB162F',
  },
});

export default GoogleButton;
