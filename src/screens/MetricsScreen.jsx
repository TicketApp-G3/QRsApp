import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ScanMetricsBarChart from '../components/ScanMetricsBarChart';
import ScanMetricsProgressCircle from '../components/ScanMetricsProgressCircle';
import TimePickerButton from '../components/TimePickerButton';
import apiProvider from '../api/apiProvider';
import { splitDateRangeInNDates } from '../utils/metricsUtils';

const MetricsScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    selectedEventId,
    timeFrom: initialTimeFrom,
    timeTo: initialTimeTo,
  } = route.params;

  const [timeFrom, setTimeFrom] = useState(new Date(initialTimeFrom));
  const [timeTo, setTimeTo] = useState(new Date(initialTimeTo));

  const [timeCheckpoints, setTimeCheckpoints] = useState(
    splitDateRangeInNDates(initialTimeFrom, initialTimeTo, 6)
  );

  const [data, setData] = useState({
    totalTicketAmount: 0,
    totalScannedAmount: 0,
    dataByCheckpoints: [],
    timeCheckpoints,
  });

  const getMetrics = () => {
    setIsLoading(true);
    apiProvider().getMetrics({
      eventId: selectedEventId,
      timeCheckpoints,
      onSuccess: (metrics) => setData({ ...data, ...metrics }),
    });

    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      getMetrics();
    }, [timeCheckpoints])
  );

  useFocusEffect(
    useCallback(() => {
      setTimeCheckpoints(splitDateRangeInNDates(timeFrom, timeTo, 6));
    }, [timeTo, timeFrom])
  );

  const formattedBarChartData = {
    labels: timeCheckpoints,
    datasets: [{ data: data.dataByCheckpoints }],
  };

  const handleSelectTimeFrom = (time) => setTimeFrom(time);
  const handleSelectTimeTo = (time) => setTimeTo(time);

  return (
    <View style={styles.screenContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <ScanMetricsProgressCircle
            scannedAmount={data.totalScannedAmount}
            totalAmount={data.totalTicketAmount}
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
        </>
      )}
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
