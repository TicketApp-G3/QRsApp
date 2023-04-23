import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress, variant = 'contained' }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, styles[variant]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`text_${variant}`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  contained: {
    backgroundColor: '#DB162F',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#DB162F',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_outlined: {
    color: '#DB162F',
  },
  text_contained: {
    color: '#FFFFFF',
  },
});

export default CustomButton;
