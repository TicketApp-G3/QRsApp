import DateTimePicker from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dateTimeFormatter } from '../utils/formatters';

const TimePickerButton = ({ defaultTime, onSelect, minDate, maxDate }) => {
  const [dateTime, setDateTime] = useState(defaultTime);

  const [time, setTime] = useState(defaultTime);
  const [date, setDate] = useState(defaultTime);

  const [dateLabel, setDateLabel] = useState(dateTimeFormatter(defaultTime));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = ({ type }, selectedDate) => {
    setShowDatePicker(false);

    if (type !== 'dismissed') {
      setDate(selectedDate);
      setShowTimePicker(true);
    }
  };

  const onChangeTime = ({ type }, selectedTime) => {
    setShowTimePicker(false);

    if (type !== 'dismissed') {
      setTime(selectedTime);
      setShowTimePicker(false);
    }
  };

  const handlePressButton = () => {
    setShowDatePicker(true);
  };

  useEffect(() => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const hour = time.getUTCHours();
    const minute = time.getUTCMinutes();
    const second = time.getUTCSeconds();
    const millisecond = time.getUTCMilliseconds();

    const newDateTime = new Date(
      Date.UTC(year, month, day, hour, minute, second, millisecond)
    );

    onSelect(newDateTime);
    setDateTime(newDateTime);
    setDateLabel(dateTimeFormatter(newDateTime));
  }, [time]);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handlePressButton}>
        <Text style={styles.buttonText}>{dateLabel}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dateTime}
          mode="date"
          onChange={onChangeDate}
          minimumDate={minDate}
          maximumDate={maxDate}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={dateTime}
          mode="time"
          is24Hour
          onChange={onChangeTime}
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
