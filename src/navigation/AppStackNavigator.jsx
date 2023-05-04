import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  const { loggedUser, isCheckingAuth } = useContext(AuthContext);

  if (isCheckingAuth) return <ActivityIndicator />;

  return !loggedUser ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  ) : (
    <BottomTabNavigator />
  );
};

export default AppStackNavigator;
