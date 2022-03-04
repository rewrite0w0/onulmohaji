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
