import { StyleSheet, Text, View } from 'react-native';

const ScreenTitle = ({ title, subtitle }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: '#DB162F',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#AB9E9F',
  },
});

export default ScreenTitle;
