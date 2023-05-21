import { StyleSheet, Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const ScanMetricsProgressCircle = ({ scannedAmount, totalAmount }) => {
  const percentage = Math.floor((scannedAmount * 100) / totalAmount);

  return (
    <View style={styles.graphicsContainer}>
      <View>
        <Text style={styles.boldText}>Escaneados</Text>
        <Text style={styles.regularText}>
          {scannedAmount} / {totalAmount}
        </Text>
      </View>
      <ProgressCircle
        percent={percentage}
        radius={40}
        borderWidth={10}
        color="#DB162F"
        shadowColor="#FADFE3"
        bgColor="#fff"
      >
        <Text style={styles.percent}>{`${percentage}%`}</Text>
      </ProgressCircle>
    </View>
  );
};

const styles = StyleSheet.create({
  percent: {
    fontSize: 24,
  },
  screenContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 24,
  },
  graphicsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default ScanMetricsProgressCircle;
