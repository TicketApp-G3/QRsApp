import React from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <ScrollView>
      <Text>Settings</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  noEventsText: {
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#E0E0E0',
    textAlign: 'center',
  },
});

export default SettingsScreen;
