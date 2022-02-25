import React, { useState } from 'react';
import { SafeAreaView, FlatList, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../utils';
import RenderTodos from './RenderTodos';

const RenderFlatList = () => {
  const [_todos, _setTodos] = useState([]);

  const getAllKeys = async () => {
    let keys = [];
    let values;
    try {
      keys = await AsyncStorage.getAllKeys();
      values = await AsyncStorage.multiGet(keys);
    } catch (e) {}
  };

  const outputTodos = async () => {
    let TODOS;
    let TODOS_TO_OBJECT;

    try {
      TODOS = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

      TODOS_TO_OBJECT = TODOS.map(el => ({
        id: el[0],
        todo: JSON.parse(el[1]).todo,
        createdDate: JSON.parse(el[1]).createdDate,
        modifiedDate: JSON.parse(el[1]).modifiedDate,
        doneTime: JSON.parse(el[1]).doneTime,
        uuid: JSON.parse(el[1]).uuidv4,
      }));
      _setTodos(TODOS_TO_OBJECT);
    } catch (error) {}
  };

  // getAllKeys().then(() => outputTodos());
  getAllKeys();
  outputTodos();
  _todos.sort((x, y) => (x.createdDate < y.createdDate ? 1 : -1));

  return (
    <SafeAreaView style={styles.flatListContainer}>
      {/* <KeyboardAvoidingView> */}
      <FlatList
        data={_todos}
        renderItem={RenderTodos}
        keyExtractor={todo => todo.id}
        nestedScrollEnabled
        windowSize={4}
      />
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

export default RenderFlatList;
