import React, { useState, useRef } from 'react';
import { KeyboardAvoidingView, TextInput, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

export default function GetTextTodo() {
  const [todo, setTodo] = useState([]);
  const todoID = useRef(1);

  const akeys = async () => {
    const clearDB = async () => {
      await AsyncStorage.clear();
    };
    // clearDB();
    let keys = [];
    let values;

    try {
      keys = await AsyncStorage.getAllKeys();
      values = await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.log(e);
    }

    console.log(values);
  };

  const inputTodos = e => {
    let text = e.nativeEvent.text;
    const todos = {
      id: todoID.current,
      todo: text,
    };
    setTodo(todo.concat(todos));
    e.currentTarget.clear();

    AsyncStorage.setItem(
      `${todoID.current < 10 ? `0${todoID.current}` : `${todoID.current}`}`,
      text,
    );
    akeys();
    todoID.current += 1;
  };

  return (
    <KeyboardAvoidingView>
      <TextInput
        placeholder="qerte"
        style={styles.input}
        onSubmitEditing={inputTodos}
      />
    </KeyboardAvoidingView>
  );
}
