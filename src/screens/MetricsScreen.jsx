import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ScanMetricsBarChart from '../components/ScanMetricsBarChart';
import ScanMetricsProgressCircle from '../components/ScanMetricsProgressCircle';
import TimePickerButton from '../components/TimePickerButton';
import { hourAndMinutesFormatter } from '../utils/formatters';

const MetricsScreen = () => {
  const today = hourAndMinutesFormatter(new Date());

  const [timeFrom, setTimeFrom] = useState(today);
  const [timeTo, setTimeTo] = useState(today);

  const data = {
    labels: [
      '2023-05-20T22:00:05.305Z',
      '2023-05-20T22:15:05.305Z',
      '2023-05-20T22:30:05.305Z',
      '2023-05-20T22:45:05.305Z',
      '2023-05-20T23:00:05.305Z',
      '2023-05-20T23:15:05.305Z',
      '2023-05-20T23:30:05.305Z',
    ],
    datasets: [
      {
        data: [20, 35, 45, 30, 55, 55, 150],
      },
    ],
  };

  const handleSelectTimeFrom = (time) => setTimeFrom(time);
  const handleSelectTimeTo = (time) => setTimeTo(time);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.timeButtonsContainer}>
        <Text style={styles.text}>Rango</Text>
        <TimePickerButton
          onSelect={handleSelectTimeFrom}
          defaultTime={timeFrom}
        />
        <Text style={styles.text}>a</Text>
        <TimePickerButton onSelect={handleSelectTimeTo} defaultTime={timeTo} />
      </View>
      <ScanMetricsProgressCircle scannedAmount={15} totalAmount={100} />
      <ScanMetricsBarChart data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 30,
    gap: 40,
    display: 'flex',
  },
  timeButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MetricsScreen;
