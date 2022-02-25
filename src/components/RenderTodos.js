import React from 'react';
import { Text, Pressable } from 'react-native';

const renderTodos = ({ item }) => {
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
