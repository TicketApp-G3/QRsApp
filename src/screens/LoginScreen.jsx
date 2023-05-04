import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoogleButton from '../components/GoogleButton';

const LoginScreen = () => {
  return (
    <View style={styles.loginScreenContainer}>
      <Image
        source={require('../assets/loginDetails.png')}
        style={styles.upDetail}
      />
      <Image
        source={require('../assets/loginDetails.png')}
        style={styles.downDetail}
      />

      <View style={styles.loginScreenContent}>
        <Icon style={styles.logo} name="qr-code" color="#DB162F" size={200} />
        <View>
          <Text style={styles.loginScreenText}>
            Ingresa con tu cuenta de Google para continuar.
          </Text>
          <GoogleButton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loginScreenContent: {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    justifyContent: 'space-between',
  },
  loginScreenText: {
    fontSize: 20,
    fontWeight: 300,
    textAlign: 'center',
    marginBottom: 20,
  },
  upDetail: {
    position: 'absolute',
    top: 0,
    width: 400,
    height: 500,
  },
  downDetail: {
    position: 'absolute',
    transform: [{ rotate: '180deg' }],
    bottom: 0,
    width: 400,
    height: 500,
  },
});

export default LoginScreen;
