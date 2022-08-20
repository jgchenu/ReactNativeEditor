import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppRoute} from '../../hooks';

export default function Doc() {
  const state = useAppRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DocId:{state.params?.docId} </Text>
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
