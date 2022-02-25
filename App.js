import React from 'react';
import { SafeAreaView, Button } from 'react-native';

import { Title, GetTextTodo, Footer } from './src/components/Components';

import AsyncStorage from '@react-native-async-storage/async-storage';

const clearDB = async () => {
  await AsyncStorage.clear();
};

const d = q => {
  return console.log(q);
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
      doneTime: JSON.parse(el[1]).doneTime,
      uuid: JSON.parse(el[1]).uuidv4,
    }));
    console.log('=-=========================================');
    console.log(TODOS_TO_OBJECT);
    console.log('=-=========================================');
    // setTodos(TODOS_TO_OBJECT);
  } catch (error) {}
};
outputTodos();
// 처음 로딩할 때, AsyncStorage 길이 조회해서 길이가 1이상이면 렌더링

// renderScreen > 0 ?<GetTextTodo />:<Text>move</Text>

async function renderScreen() {
  let keys = [];
  keys = await AsyncStorage.getAllKeys();
  // try {
  //   keys = await AsyncStorage.getAllKeys();
  //   // console.log(keys.length);
  // } catch (e) {}
  // finally {
  //   console.log(keys);
  //   return keys;
  // }
  a = keys.map(x => x);
  // console.log(a);
  return a;
}
renderScreen();

const App = () => {
  // const init = useRef(renderScreen);
  // console.log(init);
  // console.log(renderScreen());
  // await renderScreen();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Title />

      <GetTextTodo />

      <Button onPress={clearDB} title="reset" />
      <Footer />
    </SafeAreaView>
  );
};

export default App;
