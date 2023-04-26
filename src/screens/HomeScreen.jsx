import React, { useEffect, useState } from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import apiProvider from '../api/apiProvider';
import ScreenTitle from '../components/ScreenTitle';
import EventCard from '../components/EventCard';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getEvents = () => {
    setRefreshing(true);
    apiProvider().getEvents({
      ownerId: 1,
      onSuccess: (data) => setEvents(data),
    });
    setRefreshing(false);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <View style={styles.screenContainer}>
      <ScreenTitle
        title="Mis Eventos"
        subtitle="Seleccione el evento para poder escanear las entradas del mismo."
      />
      <ScrollView
        style={styles.eventsContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getEvents} />
        }
      >
        {!events.length ? (
          <Text style={styles.noEventsText}>
            No tienes eventos activos en este momento
          </Text>
        ) : (
          events.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    gap: 40,
  },
  noEventsText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#E0E0E0',
    textAlign: 'center',
  },
});

export default HomeScreen;
