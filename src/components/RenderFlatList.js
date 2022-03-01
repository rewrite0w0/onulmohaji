import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../utils';
import RenderTodos from './RenderTodos';

const RenderFlatList = () => {
  const [todos, setTodos] = useState([]);

  // const getAllKeys = async () => {
  //   let keys = [];
  //   let values;
  //   try {
  //     keys = await AsyncStorage.getAllKeys();
  //     values = await AsyncStorage.multiGet(keys);
  //   } catch (e) {}
  // };

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
      }));
      setTodos(TODOS_TO_OBJECT);
    } catch (error) {}
  };

  const sortTodos = () => {
    todos.sort((x, y) => (x.createdDate < y.createdDate ? 1 : -1));
  };

  const init = () => {
    // sortTodos();
    // outputTodos();
    // 위처럼 해도 아래처럼 해도 생각하는대로는 작동하는데..?
    // getAllKeys();
    outputTodos().then(sortTodos());
    // sortTodos();

    // then으로 붙여도 생각대로 작동하고 그냥 따로 요청해도 작동하는데 뭐가 더 좋은걸까?
    // 이게 비동기요청인가?
    // 순서는 오브젝트를 useState에 todos 담아서 그걸 정렬하는건데, 어차피 순서대로 실행되니까 똑같은거 아닌가?
  };

  init();

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
