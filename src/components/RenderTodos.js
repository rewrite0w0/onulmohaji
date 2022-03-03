import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { styles } from '../utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

import removeTodo from './removeTodo';
import togleDoneCheck from './togleDoneCheck';
import modifyTodo from './modifyTodo';
import consoleLike from './consoleLike';
// import { VisibleControl } from '../utils/global-state';

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

export default RenderTodos;
