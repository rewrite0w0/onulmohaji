import React, { useRef } from 'react';
import { TextInput, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../utils';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

function GetTextTodo() {
  const todoID = useRef(uuidv4());
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

    AsyncStorage.setItem(todoObj.id, value);

    e.currentTarget.clear();
    todoID.current = uuidv4();
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="오늘 뭐하지...?"
        style={styles.input}
        onSubmitEditing={inputTodos}
      />
    </SafeAreaView>
  );
}

export default GetTextTodo;
