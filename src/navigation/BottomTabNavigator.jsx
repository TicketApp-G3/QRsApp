import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SettingsScreen from '../screens/SettingsScreen';
import ScanStackNavigator from './ScanStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Eventos"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#DB162F',
          borderRadius: 8,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#690436',
        tabBarLabelStyle: {
          fontSize: 16,
        },
      }}
      sceneContainerStyle={styles.screenContainer}
    >
      <Tab.Screen
        name="Eventos"
        component={ScanStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="qr-code"
              color={color}
              style={focused && styles.focused}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Opciones"
        component={SettingsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="settings"
              style={focused && styles.focused}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: 'relative',
  },
  focused: {
    backgroundColor: '#F47870',
    borderRadius: 100,
    padding: 10,
  },
});

export default BottomTabNavigator;
