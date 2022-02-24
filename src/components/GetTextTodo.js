import React, { useState, useRef, useEffect } from 'react';
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

  // const todoID = useRef(1);
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
        uuid: JSON.parse(el[1]).uuidv4,
      }));
      // console.log(TODOS_TO_OBJECT);
      setTodos(TODOS_TO_OBJECT);
    } catch (error) {}
  };

  const inputTodos = e => {
    let text = e.nativeEvent.text;

    let value = JSON.stringify({
      // uuidv4: uuidv4(),
      uuidv4: todoID.current,
      todo: text,
      createdDate: new Date(),
      modifiedDate: new Date(),
    });
    console.log(value);

    const todoObj = {
      id: todoID.current,
      // id: value.uuidv4,
      values: value,
    };
    console.log(todoObj);
    setTodo(todo.concat(todoObj));

    AsyncStorage.setItem(
      // `${todoID.current < 10 ? `0${todoID.current}` : `${todoID.current}`}`,
      todoObj.id,
      value,
    );

    e.currentTarget.clear();
    aGetKeys();
    outputTodos();

    // todoID.current += 1;
    todoID.current = uuidv4();
  };
  console.log('sorting');

  todos.sort((x, y) => (x.createdDate < y.createdDate ? 1 : -1));

  // 날짜로 정렬
  // id에 uuid
  // 재기동시 렌더링

  // console.log(todo);
  // console.log('vs');
  // console.log(todos);

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
