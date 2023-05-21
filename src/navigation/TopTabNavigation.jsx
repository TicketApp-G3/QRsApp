import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import ScanScreen from '../screens/ScanScreen';
import MetricsScreen from '../screens/MetricsScreen';
import ScreenTitle from '../components/ScreenTitle';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = ({ route }) => {
  return (
    <>
      <ScreenTitle
        title="Escaneo de entradas"
        subtitle={`Escaneo de entradas para el evento "${route.params.eventTitle}"`}
        canGoBack
      />
      <Tab.Navigator screenOptions={{ ...styles }}>
        <Tab.Screen
          name="Escaneo"
          component={ScanScreen}
          initialParams={route}
        />
        <Tab.Screen
          name="Métricas"
          component={MetricsScreen}
          initialParams={route}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    paddingVertical: 5,
    shadowOffset: 0,
  },
  tabBarIndicatorStyle: {
    height: 3,
    borderRadius: 10,
    backgroundColor: '#DB162F',
  },
});

export default TopTabNavigation;
