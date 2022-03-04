import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';

import {
  SafeAreaView,
  FlatList,
  Text,
  Pressable,
  View,
  Modal,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import removeTodo from './removeTodo';
import togleDoneCheck from './togleDoneCheck';
import consoleLike from './consoleLike';

import {
  sortingTodosStandardCreatedDate,
  sortingTodosStandardModifiedDate,
} from './sortingFunctions';

import { styles } from '../utils';

// 여기에서 useState 렌더링 숫자가 무한정 오르네...

const RenderFlatList = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(null);
  const [visibleControl, setVisibleControl] = useState(false);

  const modalOnSubmitEditing = e => {
    let modifying = e.nativeEvent.text;

    (async () => {
      let e = await AsyncStorage.getItem(id);
      let todoDecode = JSON.parse(e);
      todoDecode.todo = modifying;
      todoDecode.modifiedDate = Date();

      await AsyncStorage.mergeItem(id, JSON.stringify(todoDecode));
    })();

    e.currentTarget.clear();
    setVisibleControl(false);
  };

  const modifyModal = async item => {
    setVisibleControl(true);
    setId(item.id);
  };

  const RenderTodos = ({ item }) => {
    return (
      <Pressable
        style={styles.item}
        key={item.id}
        onLongPress={() => modifyModal(item)}
        // onPress={() => consoleLike(item)}
        // onPress={() => removeTodo(item)}
        // onPress={() => modifiedTodo(item)}
        onPress={() => togleDoneCheck(item)}>
        <Text
          style={
            item.doneCheck === false ? styles.activeTodo : styles.doneTodo
          }>
          {item.todo}
        </Text>

        {/* <Text style={styles.activeTodo}>{item.todo}</Text> */}
      </Pressable>
    );
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
        doneDate: JSON.parse(el[1]).doneDate,
        doneCheck: JSON.parse(el[1]).doneCheck,
        uuid: JSON.parse(el[1]).uuidv4,
      }));
      // 이게 문제네
      return setTodos(TODOS_TO_OBJECT);

      // 그럼 useState 쓰지 않고서 렌더링하면 하는 방법은?
      // 일단 뒤로 미루자

      // global-state 이용해서, inputTodo에 onSubmitEditing 실행때 마다 보여주는 것은?
    } catch (error) {}
  };
  // 여기가 문제네, console.log(todos) 보니

  const init = () => {
    outputTodos();
    sortingTodosStandardModifiedDate(todos);
  };

  init();

  return (
    <SafeAreaView style={styles.flatListContainer}>
      <FlatList
        data={todos}
        renderItem={RenderTodos}
        keyExtractor={todo => todo.id}
        nestedScrollEnabled
        windowSize={7}
        initialNumToRender={7}
      />

      <View style={styles.pointerE}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visibleControl}
          onRequestClose={() => {
            setVisibleControl(false);
          }}>
          <View style={styles.con1}>
            <View style={styles.con2}>
              <Text>Hello Modal</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="todo 바꾸기"
                onSubmitEditing={modalOnSubmitEditing}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default RenderFlatList;
