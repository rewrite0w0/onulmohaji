import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Button,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import { Title, GetTextTodo } from './src/components/Components';

import styles from './src/styles/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from './src/components/TodoLists';

const Item = ({ todo }) => (
  <View style={styles.container2}>
    <Text style={styles.item}>{todo}</Text>
  </View>
);

const clearDB = async () => {
  await AsyncStorage.clear();
};

function useRenderTimes() {
  const renderRef = React.useRef(0);

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return renderRef.current;
}

const App = () => {
  // clearDB();
  const [todos, setTodos] = useState([]);

  const counter = useRenderTimes();

  const [todo, setTodo] = useState([]);

  const todoID = useRef(1);
  console.log(todo);

  const renderItem = ({ item }) => <Item todo={item.todo} />;

  const inputTodos = e => {
    let text = e.nativeEvent.text;
    const todos = {
      id: todoID.current,
      todo: text,
    };
    setTodo(todo.concat(todos));
    e.currentTarget.clear();
    todoID.current += 1;
    AsyncStorage.setItem(
      `${todoID.current < 10 ? `0${todoID.current}` : `${todoID.current}`}`,
      text,
    );
    akeys();
  };

  const akeys = async () => {
    let keys = [];
    let values;
    try {
      keys = await AsyncStorage.getAllKeys();
      values = await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.log(e);
    }
    // console.log(`values= ${values}`);
  };

  const outfutTodos = async () => {
    // clearDB();
    let a;
    try {
      a = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

      aaa = a.map(x => ({ id: x[0], todo: x[1] }));
      console.log(aaa);
      // setTodos(todos.concat(aaa));
    } catch (error) {}
    console.log('---------');
    // console.log(todos);
    console.log('---------');
  };

  return (
    <SafeAreaView>
      <Title />
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          placeholder="오늘 뭐하지?"
          onSubmitEditing={e => {
            let text = e.nativeEvent.text;
            const todos = {
              id: todoID.current,
              todo: text,
            };
            setTodo(todo.concat(todos));
            AsyncStorage.setItem(
              `${
                todoID.current < 10 ? `0${todoID.current}` : `${todoID.current}`
              }`,
              text,
            );
            e.currentTarget.clear();
            todoID.current += 1;

            const akeys = async () => {
              let keys = [];
              let values;
              try {
                keys = await AsyncStorage.getAllKeys();
                values = await AsyncStorage.multiGet(keys);
              } catch (e) {
                console.log(e);
              }
            };

            akeys();
          }}
        />
      </KeyboardAvoidingView>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={todo}
          renderItem={renderItem}
          keyExtractor={todos => todos.id}
          nestedScrollEnabled
          windowSize={4}
        />
      </SafeAreaView>

      <GetTextTodo />
      <Button onPress={clearDB} title="reset" />
      <Button onPress={outfutTodos} title="console" />

      {/* <SafeAreaView>
        <FlatList data={} renderItem={} keyExtractor ={}/>
      </SafeAreaView> */}

      {/* <SafeAreaView> */}
      {/* <TodoList /> */}
      {/* </SafeAreaView> */}

      <Text>{counter}</Text>
    </SafeAreaView>
  );
};

export default App;
