import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EventCard = ({ event }) => {
  const { id, title } = event;
  const navigation = useNavigation();

  const handleClick = () =>
    navigation.navigate('ScanScreen', { selectedEventId: id });

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleClick}>
      <Text style={styles.eventTitle}>{title}</Text>
      <Icon name="qr-code" color="#000000" size={25} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    borderRadius: 10,
    width: '98%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default EventCard;
