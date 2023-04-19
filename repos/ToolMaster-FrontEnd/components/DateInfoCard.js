import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppText from './AppText';
import colors from '../config/colors';
import { Calendar } from 'react-native-calendars';

export default function DateInfoCard({ infoToDisplay, data }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>I dag</AppText>
      <Calendar showWeekNumbers={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    margin: 20,
    shadowOpacity: 0.2,
    shadowColor: colors.dark,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 12,
    borderRadius: 20,
    elevation: 12,
  },
  text: {
    fontSize: 20,
    color: colors.medium,
  },
});
