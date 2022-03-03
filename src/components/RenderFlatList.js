import React, { useState, useEffect, useRef, useContext } from 'react';

import { SafeAreaView, FlatList, Text, Pressable } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import removeTodo from './removeTodo';
import togleDoneCheck from './togleDoneCheck';
import modifyTodo from './modifyTodo';
import consoleLike from './consoleLike';

// import RenderTodos from './RenderTodos';

// import { VisibleControl } from '../utils/global-state';

import { styles } from '../utils';

const RenderFlatList = () => {
  const [todos, setTodos] = useState([]);
  const [q, setQ] = useState('move?');

  const RenderTodos = ({ item }) => {
    return (
      <Pressable
        style={styles.item}
        key={item.id}
        onPress={() => modifyTodo(item)}
        // onLongPress={() => consoleLike(item)}
        // onPress={() => removeTodo(item)}
        // onPress={() => modifiedTodo(item)}
        // onPress={() => togleDoneCheck(item)}
      >
        <Text style={styles.title}>{item.todo}</Text>
      </Pressable>
    );
  };

  // const [visibleControl, setVisibleControl] = useContext(VisibleControl);

  // console.log(visibleControl);
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
        doneDate: JSON.parse(el[1]).doneDate,
        doneCheck: JSON.parse(el[1]).doneCheck,
        uuid: JSON.parse(el[1]).uuidv4,
        modalVisible: JSON.parse(el[1]).modalVisible,
      }));
      // 이게 문제네
      setTodos(TODOS_TO_OBJECT);
      // 그럼 useState 쓰지 않고서 렌더링하면 하는 방법은?
      // 일단 뒤로 미루자
    } catch (error) {}
  };
  // 여기가 문제네, console.log(todos) 보니

  const sortTodos = () => {
    todos.sort((x, y) => (x.createdDate < y.createdDate ? 1 : -1));
  };

  const init = () => {
    outputTodos();
    sortTodos();
  };

  init();

  // const count = useRef(1);
  // console.log(`renderflatlist render: ${count.current}`);
  // count.current += 1;

  return (
    <SafeAreaView style={styles.flatListContainer}>
      <FlatList
        data={todos}
        renderItem={RenderTodos}
        keyExtractor={todo => todo.id}
        nestedScrollEnabled
        windowSize={4}
      />
    </SafeAreaView>
  );
};

export default RenderFlatList;
