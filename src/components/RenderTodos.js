import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

import removeTodo from './removeTodo';
import togleDoneCheck from './togleDoneCheck';

const modifiedTodo = async item => {
  let e, todoDecode;
  try {
    e = await AsyncStorage.getItem(item.id);
    todoDecode = JSON.parse(e);
    // 여기에 수정을 가하면 된다.
    // 입력창에서 받아서 => 확인
    // 준비물: 수정시간, 변경된 todo
  } catch (error) {}
};

const RenderTodos = ({ item }) => {
  return (
    <Pressable
      style={styles.item}
      key={item.id}
      onLongPress={() => togleDoneCheck(item)}
      onPress={() => removeTodo(item)}>
      <Text style={styles.title}>{item.todo}</Text>
    </Pressable>
  );
};

export default RenderTodos;
