import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';

import {
  SafeAreaView,
  FlatList,
  Text,
  Pressable,
  View,
  Modal,
  TextInput,
  Button,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import removeTodo from './removeTodo';
import togleDoneCheck from './togleDoneCheck';

import {
  sortingModifiedDateAndDoneCheck,
  sortingActiveOnly,
  sortingDoneOnly,
} from './sortingFunctions';

import { styles } from '../utils';
import { SortConText, TodoContext } from '../utils/contexts';

// 여기에서 useState 렌더링 숫자가 무한정 오르네...

// 1. flatlist의 render가 무제한으로 움직이게 한다
// 2. async/await가 무제한으로 움직이게 한다.
// 3. try/catch가 무제한으로 움직이게 한다.

// 1 유력..

const RenderFlatList = () => {
  // const [todos, setTodos] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [visibleControl, setVisibleControl] = useState(false);

  const [_todos, _setTodos] = useContext(TodoContext);
  const [sortTodos] = useContext(SortConText);

  const modalOnSubmitEditing = e => {
    let modifying = e.nativeEvent.text;

    const modifyingProcess = () => {
      (async () => {
        let e = await AsyncStorage.getItem(currentId);
        let todoDecode = JSON.parse(e);
        todoDecode.todo = modifying;
        todoDecode.modifiedDate = Date();

        await AsyncStorage.mergeItem(currentId, JSON.stringify(todoDecode));
      })();

      e.currentTarget.clear();
      setVisibleControl(false);
    };

    modifying === '' ? setVisibleControl(false) : modifyingProcess();
  };

  const closeModal = () => {
    return setVisibleControl(false);
  };

  const modifyModal = async item => {
    setVisibleControl(true);
    setCurrentId(item.id);
  };

  const renderTodos = ({ item }) => {
    return (
      <Pressable
        style={styles.item}
        key={item.id}
        onLongPress={() => modifyModal(item)}
        // onPress={() => consoleLike(item)}
        onPress={() => togleDoneCheck(item)}
        // onLongPress={() => removeTodo(item)}
      >
        <Text
          style={
            item.doneCheck === false ? styles.activeTodo : styles.doneTodo
          }>
          {item.todo}
        </Text>
      </Pressable>
    );
  };

  // 현재 방식은 추가될 때마다 배열을 새로 갈아낀다 생각하고 작성했는데,
  // 무한으로 렌더링되는 것 같음
  // 사용하는 위치가 문제인가?

  // 이게 문제네
  const loadTodos = async () => {
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

      _setTodos(TODOS_TO_OBJECT);
    } catch (error) {}
  };
  loadTodos();

  const sortingTodos = (todoitem, sortState) => {
    const checkSortTodosAll = sortState === 'all';
    const checkSortTodosActive = sortState === 'active';
    const checkSortTodosDone = sortState === 'done';

    if (checkSortTodosAll) {
      return sortingModifiedDateAndDoneCheck(todoitem);
    }
    if (checkSortTodosActive) {
      return sortingActiveOnly(todoitem);
    }
    if (checkSortTodosDone) {
      return sortingDoneOnly(todoitem);
    }
  };

  return (
    <View style={styles.flatListContainer} onPressIn={closeModal}>
      <FlatList
        data={sortingTodos(_todos, sortTodos)}
        renderItem={renderTodos}
        keyExtractor={todo => todo.id}
        initialNumToRender={5}
      />

      <View style={styles.modalContainer}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visibleControl}
          onRequestClose={() => {
            setVisibleControl(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.modalInput}
                placeholder="오늘 이거로 하자"
                autoFocus={true}
                onSubmitEditing={modalOnSubmitEditing}
              />
              <View style={styles.modalButtonsContainer}>
                <View style={{ flex: 0.5 }}>
                  <Button
                    title="삭제"
                    color="gray"
                    onPress={() => {
                      removeTodo(currentId);
                      setVisibleControl(false);
                    }}
                  />
                </View>
                <View style={{ flex: 0.5 }}>
                  <Button
                    title="취소"
                    color="pink"
                    onPress={() => setVisibleControl(false)}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default RenderFlatList;
