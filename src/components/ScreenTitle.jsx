import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ScreenTitle = ({ title, subtitle, canGoBack }) => {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <View>
      <View style={styles.titleContainer}>
        {canGoBack && (
          <TouchableOpacity onPress={handleGoBack}>
            <Icon name="arrow-back" color="#DB162F" size={40} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 36,
    color: '#DB162F',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#9E9E9E',
  },
});

export default ScreenTitle;
