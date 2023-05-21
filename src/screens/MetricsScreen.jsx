import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ScanMetricsBarChart from '../components/ScanMetricsBarChart';
import ScanMetricsProgressCircle from '../components/ScanMetricsProgressCircle';
import TimePickerButton from '../components/TimePickerButton';

const MetricsScreen = ({ route }) => {
  const data = {
    timeFrom: '2023-05-20T22:00:05.305Z',
    timeTo: '2023-05-21T23:30:05.305Z',
    totalTicketAmount: 150,
    totalScannedAmount: 142,
    timeCheckpoints: [
      '2023-05-20T22:00:05.305Z',
      '2023-05-20T22:15:05.305Z',
      '2023-05-20T22:30:05.305Z',
      '2023-05-20T22:45:05.305Z',
      '2023-05-20T23:00:05.305Z',
      '2023-05-20T23:15:05.305Z',
      '2023-05-20T23:30:05.305Z',
    ],
    dataByCheckpoints: [10, 21, 40, 14, 25, 30, 2],
  };

  const {
    timeFrom: initialTimeFrom,
    timeTo: initialTimeTo,
    totalTicketAmount,
    totalScannedAmount,
    timeCheckpoints,
    dataByCheckpoints,
  } = data;

  const formattedBarChartData = {
    labels: timeCheckpoints,
    datasets: [{ data: dataByCheckpoints }],
  };

  const [timeFrom, setTimeFrom] = useState(new Date(initialTimeFrom));
  const [timeTo, setTimeTo] = useState(new Date(initialTimeTo));

  const handleSelectTimeFrom = (time) => setTimeFrom(time);
  const handleSelectTimeTo = (time) => setTimeTo(time);

  return (
    <View style={styles.screenContainer}>
      <ScanMetricsProgressCircle
        scannedAmount={totalScannedAmount}
        totalAmount={totalTicketAmount}
      />
      <View style={styles.timeButtonsContainer}>
        <Text style={styles.text}>Rango de fechas</Text>
        <TimePickerButton
          onSelect={handleSelectTimeFrom}
          defaultTime={timeFrom}
          minDate={new Date(initialTimeFrom)}
          maxDate={new Date(initialTimeTo)}
        />
        <TimePickerButton
          onSelect={handleSelectTimeTo}
          defaultTime={timeTo}
          minDate={new Date(initialTimeFrom)}
          maxDate={new Date(initialTimeTo)}
        />
      </View>
      <ScanMetricsBarChart data={formattedBarChartData} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 30,
    gap: 15,
    display: 'flex',
  },
  timeButtonsContainer: {
    display: 'flex',
    gap: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MetricsScreen;
