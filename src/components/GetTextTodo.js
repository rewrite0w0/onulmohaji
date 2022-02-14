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
  const [date, setDate] = useState(null);
  const todoID = useRef(1);

  // useEffect(() => {
  //   let today = new Date();
  //   let date =
  //     today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
  //   setDate(date);
  // }, []);

  const getNow = () => {
    let a = () => new Date();
    setDate(a);
  };

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

      TODOS_TO_OBJECT = TODOS.map(el => ({ id: el[0], todo: el[1] }));

      setTodos(TODOS_TO_OBJECT);
    } catch (error) {}
  };

  const inputTodos = e => {
    let text = e.nativeEvent.text;
    getNow();
    const todoObj = {
      id: todoID.current,
      // id: uuidv4(),
      todo: text,
      date: date,
    };

    setTodo(todo.concat(todoObj));
    e.currentTarget.clear();

    AsyncStorage.setItem(
      `${todoID.current < 10 ? `0${todoID.current}` : `${todoID.current}`}`,
      // todoObj.id,
      text,
    );

    aGetKeys();
    outputTodos();
    console.log(date);
    console.log(todo);
    console.log('-------');
    console.log(todos);
    todoID.current += 1;
  };

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
          data={todos.reverse()}
          renderItem={renderItem}
          keyExtractor={todos => todos.id}
          nestedScrollEnabled
          windowSize={4}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
