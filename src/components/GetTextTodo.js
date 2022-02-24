import React, { useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../utils';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

// const press = async () => {
//   let key;
//   try {
//     key = await AsyncStorage.getItem('');
//     console.log('move');
//   } catch (error) {}
// };

// const getKey = async () => {
//   let key;
//   try {
//     key = await AsyncStorage.getItem('');
//     console.log(key);
//   } catch (error) {}
// };

// const Item = ({ todo }) => (
//   <Pressable style={styles.item} onPress={press}>
//     <Text style={styles.title}>{todo}</Text>
//   </Pressable>
// );
function GetTextTodo() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);

  const todoID = useRef(uuidv4());

  const dom = useRef();

  const press = async () => {
    let key;
    try {
      key = await AsyncStorage.getItem();
      console.log(key);
    } catch (e) {}
  };

  const Item = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>
          {item.todo}
          {/* {item.uuid} */}
        </Text>
      </TouchableOpacity>
    );
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

  // 선택했을 때 id 받기
  // 아니면 아예 재구축하기
  // 그런데 전자로 해결하고 싶음
  // 눌렀을 때 해야할 반응
  // 1) 삭제
  // 2) 수정
  // 3) 체크박스 필요?

  const renderItem = ({ item }) => <Item item={item} />;

  const renderTodos = ({ item }) => {
    // console.log(item);
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>
          {item.todo}
          {/* {item.uuid} */}
        </Text>
      </TouchableOpacity>
    );
  };

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
          renderItem={renderTodos}
          keyExtractor={todo => todo.id}
          nestedScrollEnabled
          windowSize={4}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

// export default React.memo(GetTextTodo);
export default GetTextTodo;
