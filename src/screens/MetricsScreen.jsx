import { StyleSheet, Text, View } from 'react-native';

const MetricsScreen = () => {
  return (
    <View style={styles.loginScreenContainer}>
      <Text>hola</Text>
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
});

export default MetricsScreen;
