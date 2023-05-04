import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
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
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon name="qr-code" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Opciones"
        component={SettingsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={40} />
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
});

export default BottomTabNavigator;
