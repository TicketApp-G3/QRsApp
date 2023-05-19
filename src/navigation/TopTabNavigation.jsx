import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScanScreen from '../screens/ScanScreen';
import MetricsScreen from '../screens/MetricsScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = ({ route }) => {
  console.log(route, '--------------');

  return (
    <Tab.Navigator>
      <Tab.Screen name="Escaneo" component={ScanScreen} initialParams={route} />
      <Tab.Screen name="Metricas" component={MetricsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
