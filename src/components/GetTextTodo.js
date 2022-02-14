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

const Item = ({ todo }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{todo}</Text>
  </View>
);

export default function GetTextTodo() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);
  const todoID = useRef(1);

  const akeys = async () => {
    let keys = [];
    let values;

    try {
      keys = await AsyncStorage.getAllKeys();
      values = await AsyncStorage.multiGet(keys);
    } catch (e) {}
    // console.log('value');
    // console.log(values);
    // console.log('------');
  };

  const outputTodos = async () => {
    let TODOS;
    let TODOS_TO_OBJECT;

    try {
      TODOS = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

      TODOS_TO_OBJECT = TODOS.map(el => ({ id: el[0], todo: el[1] }));

      setTodos(TODOS_TO_OBJECT);
      // console.log('-------todo to object');
      // console.log(TODOS_TO_OBJECT);
      // console.log('--------');
    } catch (error) {}
  };

  const inputTodos = e => {
    let text = e.nativeEvent.text;
    const todoObj = {
      id: todoID.current,
      todo: text,
    };
    setTodo(todo.concat(todoObj));
    e.currentTarget.clear();

    AsyncStorage.setItem(
      `${todoID.current < 10 ? `0${todoID.current}` : `${todoID.current}`}`,
      text,
    );
    // console.log('-------');
    // console.log('todo');
    // console.log(todo);
    // console.log('vs');
    // console.log('todos');
    // console.log(todos);
    // console.log('-------');

    akeys();
    outputTodos();
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
