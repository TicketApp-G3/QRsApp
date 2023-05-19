import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import TopTabNavigation from './TopTabNavigation';

const Stack = createNativeStackNavigator();

const ScanStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: styles.screenContainer,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
});

export default ScanStackNavigator;
