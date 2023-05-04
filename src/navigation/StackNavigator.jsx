import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, StyleSheet } from 'react-native';
import ScanScreen from '../screens/ScanScreen';
import HomeScreen from '../screens/HomeScreen';
import { AuthContext } from '../contexts/AuthContext';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { loggedUser, isCheckingAuth } = useContext(AuthContext);

  if (isCheckingAuth) return <ActivityIndicator />;

  return !loggedUser ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: styles.screenContainer,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
    </Stack.Navigator>
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

export default StackNavigator;
