import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../utils';

const RenderTodos = ({ item }) => {
  // console.log(item.uuid);
  return (
    <Pressable style={styles.item} key={item.id}>
      <Text style={styles.title}>
        {item.todo}
        {/* {item.uuid} */}
      </Text>
    </Pressable>
  );
};

export default RenderTodos;
