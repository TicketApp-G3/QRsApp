import { BarChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { hourAndMinutesFormatter } from '../utils/formatters';

const ScanMetricsBarChart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      <Text style={styles.horizontalAxisLabel}>Hora [ HS ]</Text>
      <Text style={styles.verticalAxisLabel}>Personas escaneadas</Text>
      <BarChart
        width={screenWidth - 20}
        height={270}
        data={data}
        fromZero
        yLabelsOffset={15}
        xLabelsOffset={5}
        showBarTops={false}
        showValuesOnTopOfBars
        chartConfig={{
          formatYLabel: (number) => Math.floor(number),
          formatXLabel: (date) => hourAndMinutesFormatter(date),
          color: () => '#DB162F',
          labelColor: () => '#121212',
          backgroundGradientFrom: 'white',
          backgroundGradientFromOpacity: 'white',
          backgroundGradientTo: 'white',
          fillShadowGradientFromOpacity: 1,
          fillShadowGradientToOpacity: 1,
          barPercentage: 0.3,
          barRadius: 5,
          propsForBackgroundLines: {
            strokeWidth: 1,
            strokeDasharray: null,
            stroke: '#F0F0F0',
          },
        }}
        style={{
          marginVertical: 16,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  horizontalAxisLabel: {
    position: 'absolute',
    bottom: 2,
    left: 160,
    zIndex: 999,
    fontSize: 18,
  },
  verticalAxisLabel: {
    position: 'absolute',
    transform: 'rotate(270deg)',
    bottom: 150,
    left: -70,
    zIndex: 999,
    fontSize: 18,
  },
});

export default ScanMetricsBarChart;
