import {StyleSheet, View} from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';

const List = [
  {name: 'jghcen', id: 1},
  {name: 'yin', id: 2},
];

export default function ListSection() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>DocListScreen</Text> */}
      {List.map(item => (
        <ListItem {...item} key={item.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 10,
    width: '80%',
  },
});
