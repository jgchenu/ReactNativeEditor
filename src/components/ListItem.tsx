import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {DocItemType} from '../types';
import {useAppNavigation} from '../hooks';

type ListItemProps = {
  onClick?: () => void;
} & DocItemType;

export default function ListItem(props: ListItemProps) {
  const {name, docId} = props;
  const navigation = useAppNavigation();

  const handleClick = useCallback(() => {
    navigation.navigate({name: 'Doc', params: {docId, name}});
  }, [docId, name, navigation]);

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>文档id: {docId}</Text>
      </View>
    </TouchableOpacity>
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
