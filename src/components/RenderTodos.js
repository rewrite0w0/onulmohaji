import React from 'react';
import { Text, Pressable, TouchableOpacity } from 'react-native';
import { styles } from '../utils';

// 1. 좌우에 버튼을 두어 애니메이션으로 효과를 주기?

// 2. 수정할 대는 asyncstorage merge로 해결하기

const RenderTodos = ({ item }) => {
  return (
    <Pressable style={styles.item} key={item.id} onPress={() => alert(item.id)}>
      <Text style={styles.title}>{item.todo}</Text>
    </Pressable>
  );
};

export default RenderTodos;
