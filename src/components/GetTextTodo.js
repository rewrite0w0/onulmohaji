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
import styles from '../styles/styles';

const Item = ({ todo }) => (
  <View style={styles.container2}>
    <Text style={styles.item}>{todo}</Text>
  </View>
);

export default function GetTextTodo() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);
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
    } catch (e) {}
    console.log('value');
    console.log(values);
    console.log('------');
  };

  // const [_todos, _setTodos] = useState([]);
  // const outfutTodos = async () => {
  //   // clearDB();
  //   let a;
  //   try {
  //     a = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

  //     aaa = a.map(x => ({ id: x[0], todo: x[1] }));
  //     console.log(aaa);
  //     console.log(_todos);
  //     _setTodos(_todos.concat(aaa));
  //   } catch (error) {}
  //   console.log('---------');
  //   console.log(_todos);
  //   // console.log('---------');
  // };

  const outputTodos = async () => {
    let TODOS;
    let TODOS_TO_OBJECT;

    try {
      TODOS = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

      TODOS_TO_OBJECT = TODOS.map(el => ({ id: el[0], todo: el[1] }));

      setTodos(TODOS_TO_OBJECT);
      console.log('-------todo to object');
      console.log(TODOS_TO_OBJECT);
      console.log('--------');
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
    console.log('-------');
    console.log('todo');
    console.log(todo);
    console.log('vs');
    console.log('todos');
    console.log(todos);
    console.log('-------');

    akeys();
    outputTodos();
    todoID.current += 1;
  };

  // const onSubmit = () => {
  //   inputTodos();
  //   outputTodos();
  // };

  const renderItem = ({ item }) => <Item todo={item.todo} />;
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <TextInput
          placeholder="qerte"
          style={styles.input}
          onSubmitEditing={inputTodos}
        />
      </KeyboardAvoidingView>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={todos => todos.id}
      />
    </SafeAreaView>
  );
}
