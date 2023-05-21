import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { hourAndMinutesFormatter } from '../utils/formatters';

const TimePickerButton = ({ defaultTime, onSelect }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    onSelect(hourAndMinutesFormatter(selectedDate));
  };

  const showTimepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={showTimepicker}>
        <Text style={styles.buttonText}>{defaultTime}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
    display: 'flex',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default TimePickerButton;
