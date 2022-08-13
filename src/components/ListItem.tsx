import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ListItemProps = {
  name: string;
  id: string | number;
};

export default function ListItem(props: ListItemProps) {
  const {name, id} = props;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text>文件夹id: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#bbb',
    shadowRadius: 2,
    shadowOpacity: 0.6,
    shadowOffset: {width: 2, height: 2},
    borderRadius: 5,
  },
  name: {},
});
