import React, { useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../utils';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Item = ({ todo }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{todo}</Text>
  </View>
);

export default function GetTextTodo() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);

  const todoID = useRef(uuidv4());

  const aGetKeys = async () => {
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

      setTodos(TODOS_TO_OBJECT);
    } catch (error) {}
  };

  const inputTodos = e => {
    let text = e.nativeEvent.text;

    let value = JSON.stringify({
      uuidv4: todoID.current,
      todo: text,
      createdDate: new Date(),
      modifiedDate: new Date(),
      doneTime: new Date(),
    });

    const todoObj = {
      id: todoID.current,
      values: value,
    };

    setTodo(todo.concat(todoObj));

    AsyncStorage.setItem(todoObj.id, value);

    e.currentTarget.clear();
    aGetKeys();
    outputTodos();

    todoID.current = uuidv4();
  };

  todos.sort((x, y) => (x.createdDate < y.createdDate ? 1 : -1));

  // 재기동시 렌더링

  const renderItem = ({ item }) => <Item todo={item.todo} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView>
        <TextInput
          placeholder="오늘 뭐하지...?"
          style={styles.input}
          onSubmitEditing={inputTodos}
        />
      </KeyboardAvoidingView>

      <SafeAreaView style={styles.titleContainer}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={todos => todos.id}
          nestedScrollEnabled
          windowSize={4}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
