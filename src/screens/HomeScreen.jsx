import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import apiProvider from '../api/apiProvider';
import ScreenTitle from '../components/ScreenTitle';
import EventCard from '../components/EventCard';

const HomeScreen = () => {
  const getEvents = async () => {
    console.log('asndjas');
  };

  const events = [
    {
      id: '1',
      title: 'Título del evento',
    },
    {
      id: '2',
      title: 'Título del evento',
    },
    {
      id: '3',
      title: 'Título del evento',
    },
  ];

  return (
    <View style={styles.screenContainer}>
      <ScreenTitle
        title="Mis Eventos"
        subtitle="Seleccione el evento para poder escanear las entradas del mismo."
      />
      <ScrollView style={styles.eventsContainer}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    gap: 40,
  },
});

export default HomeScreen;
