import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { hourAndMinutesFormatter } from '../utils/formatters';

const ScanMetricsBarChart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <BarChart
      width={screenWidth - 20}
      height={300}
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
  );
};

export default ScanMetricsBarChart;
