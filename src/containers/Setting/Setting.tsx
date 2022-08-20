import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ListSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
