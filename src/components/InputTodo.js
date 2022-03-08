import React, { useContext, useRef } from 'react';
import { TextInput, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../utils';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
// import { TodoContext } from '../utils/TodosContext';

function InputTodo() {
  const todoID = useRef(uuidv4());
  // const [_todos, _setTodos] = useContext(TodoContext);

  const encodeTodo = e => {
    let text = e.nativeEvent.text;

    const encodeTodoProcess = () => {
      let value = JSON.stringify({
        uuidv4: todoID.current,
        todo: text,
        createdDate: Date(),
        modifiedDate: Date(),
        doneDate: null,
        doneCheck: false,
      });

      const todoObj = {
        id: todoID.current,
        values: value,
      };

      AsyncStorage.setItem(todoObj.id, value);

      e.currentTarget.clear();
      todoID.current = uuidv4();
    };

    text === '' ? 0 : encodeTodoProcess();
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="오늘 뭐하지...?"
        style={styles.input}
        onSubmitEditing={encodeTodo}
      />
    </SafeAreaView>
  );
}

export default InputTodo;
