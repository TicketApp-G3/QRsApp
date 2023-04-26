import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = ({ onPress, iconName, size = 45, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Icon name={iconName} color="#FFFFFF" size={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 78,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: '#DB162F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
