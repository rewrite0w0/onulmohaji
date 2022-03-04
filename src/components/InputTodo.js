import React, { useContext, useRef } from 'react';
import { TextInput, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../utils';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../utils/TodosContext';

function InputTodo() {
  const todoID = useRef(uuidv4());
  // const [_todos, _setTodos] = useContext(TodoContext);

  // const outputTodos = async () => {
  //   let TODOS;
  //   let TODOS_TO_OBJECT;

  //   try {
  //     TODOS = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

  //     TODOS_TO_OBJECT = TODOS.map(el => ({
  //       id: el[0],
  //       todo: JSON.parse(el[1]).todo,
  //       createdDate: JSON.parse(el[1]).createdDate,
  //       modifiedDate: JSON.parse(el[1]).modifiedDate,
  //       doneDate: JSON.parse(el[1]).doneDate,
  //       doneCheck: JSON.parse(el[1]).doneCheck,
  //       uuid: JSON.parse(el[1]).uuidv4,
  //     }));
  //     // 이게 문제네
  //     // return _setTodos(TODOS_TO_OBJECT);
  //     // return setTodos(TODOS_TO_OBJECT);

  //     _setTodos(TODOS_TO_OBJECT);

  //     // 그럼 useState 쓰지 않고서 렌더링하면 하는 방법은?
  //     // 일단 뒤로 미루자

  //     // global-state 이용해서, inputTodo에 onSubmitEditing 실행때 마다 보여주는 것은?
  //   } catch (error) {}
  // };

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
      // outputTodos();

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
