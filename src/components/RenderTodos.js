import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../utils';

const RenderTodos = ({ item }) => {
  return (
    <Pressable style={styles.item} key={item.id}>
      <Text style={styles.title}>{item.todo}</Text>
    </Pressable>
  );
};

export default RenderTodos;
