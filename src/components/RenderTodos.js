import React from 'react';
import { StyleSheet, View, Modal, Text, Pressable } from 'react-native';
import { styles } from '../utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

import removeTodo from './removeTodo';
import togleDoneCheck from './togleDoneCheck';

// useContext 같은거로 충분히 관리할 수 있을 것 같지만 일단 만들고 수정
const modifiedTodo = async item => {
  let e, todoDecode;
  try {
    e = await AsyncStorage.getItem(item.id);
    todoDecode = JSON.parse(e);

    todoDecode.modalVisible = !todoDecode.modalVisible;
    // todoDecode.modifiedDate = new Date();
    await AsyncStorage.mergeItem(item.id, JSON.stringify(todoDecode));

    // 여기에 수정을 가하면 된다.
    // 입력창에서 받아서 => 확인
    // 준비물: 수정시간, 변경된 todo
    console.log(e);
  } catch (error) {}
};

const consoleLike = async item => {
  e = await AsyncStorage.getItem(item.id);
  todoDecode = JSON.parse(e);
  s = JSON.stringify(todoDecode);
  console.log(e);
  console.log(todoDecode);
};

const RenderTodos = ({ item }) => {
  let modalVisible = false;
  return (
    <Pressable
      style={styles.item}
      key={item.id}
      onPress={() => modifiedTodo(item)}
      onLongPress={() => consoleLike(item)}
      // onPress={() => removeTodo(item)}
      // onPress={() => modifiedTodo(item)}
      // onPress={() => togleDoneCheck(item)}
    >
      <Text style={styles.title}>{item.todo}</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => (modalVisible = !modalVisible)}>
        <View>
          <Text>Hello Modal</Text>
        </View>
      </Modal>
    </Pressable>
  );
};

export default RenderTodos;
