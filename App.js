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

// import styles from './src/styles/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from './src/components/TodoLists';

import { styles } from './src/utils';

// import { TEMP_Provier } from './src/hooks/GlobalHooks';

import { TEMPProvider } from './src/hooks/Temp';

const Item = ({ todo }) => (
  <View style={styles.container2}>
    <Text style={styles.item}>{todo}</Text>
  </View>
);

const Item2 = ({ todo }) => (
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
  // console.log('----');
  // console.log(todo);
  // console.log('----');

  const renderItem = ({ item }) => <Item todo={item.todo} />;
  const renderItem2 = ({ item }) => <Item todo={item.todo} />;

  // const inputTodos = e => {
  //   let text = e.nativeEvent.text;
  //   const todos = {
  //     id: todoID.current,
  //     todo: text,
  //   };
  //   setTodo(todo.concat(todos));
  //   e.currentTarget.clear();
  //   todoID.current += 1;
  //   AsyncStorage.setItem(
  //     `${todoID.current < 10 ? `0${todoID.current}` : `${todoID.current}`}`,
  //     text,
  //   );
  //   akeys();
  // };

  // const akeys = async () => {
  //   let keys = [];
  //   let values;
  //   try {
  //     keys = await AsyncStorage.getAllKeys();
  //     values = await AsyncStorage.multiGet(keys);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   // console.log(`values= ${values}`);
  // };

  // const outputTodos = async () => {
  //   // clearDB();
  //   let a;
  //   try {
  //     a = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

  //     aaa = a.map(x => ({ id: x[0], todo: x[1] }));
  //     console.log(aaa);

  //     console.log('-------');
  //     console.log(tmp);
  //     setTodos(aaa);
  //   } catch (error) {}
  // };

  // console.log(todo);
  // console.log('vs');
  // console.log(todos);

  const button1 = () => {
    console.log('button1');
  };
  const button2 = () => {
    console.log('button2');
  };

  const buttons = () => {
    button1();
    button2();
  };
  return (
    <SafeAreaView>
      <Title />
      {/* <KeyboardAvoidingView>
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
      </KeyboardAvoidingView> */}

      {/* <SafeAreaView style={styles.container}>
        <FlatList
          data={todo}
          renderItem={renderItem}
          keyExtractor={todos => todos.id}
          nestedScrollEnabled
          windowSize={4}
        />
      </SafeAreaView> */}

      {/* <SafeAreaView style={styles.container}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={todos => todos.id}
          nestedScrollEnabled
          windowSize={4}
        />
      </SafeAreaView> */}

      <GetTextTodo />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={todos => todos.id}
          nestedScrollEnabled
          windowSize={4}
        />
      </SafeAreaView>

      <Button onPress={clearDB} title="reset" />
      {/* <Button onPress={outputTodos} title="console" /> */}

      {/* <Button onPress={buttons} title="buttonTest" /> */}
      <Text>{counter}</Text>
    </SafeAreaView>
  );
};

export default App;
