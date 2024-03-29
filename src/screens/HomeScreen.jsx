import React, { useContext, useEffect, useState } from 'react';
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
import { AuthContext } from '../contexts/AuthContext';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { loggedUser } = useContext(AuthContext);

  const getEvents = () => {
    setRefreshing(true);
    apiProvider().getEvents({
      ownerId: loggedUser.userId,
      onSuccess: (data) => setEvents(data),
    });
    setRefreshing(false);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getEvents} />
      }
    >
      <ScreenTitle
        title="Mis Eventos"
        subtitle="Seleccione el evento para poder escanear las entradas del mismo."
      />
      <View style={styles.eventsContainer}>
        {!events.length ? (
          <Text style={styles.noEventsText}>
            No tienes eventos activos en este momento
          </Text>
        ) : (
          events.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  noEventsText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#E0E0E0',
    textAlign: 'center',
  },
  eventsContainer: {
    marginTop: 30,
  },
});

export default HomeScreen;
