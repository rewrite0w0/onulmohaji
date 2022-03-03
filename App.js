import React, { useRef, useState } from 'react';
import { SafeAreaView, Button } from 'react-native';

import {
  Header,
  InputTodo,
  RenderFlatList,
  Footer,
} from './src/components/Components';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import ModalTemp from './src/components/ModalTemp';
// import { VisibleControl } from './src/utils/global-state';

const clearDB = async () => {
  await AsyncStorage.clear();
};

const App = () => {
  const count = useRef(1);
  console.log(`App render ${count.current}`);
  count.current += 1;
  // const [visibleControl, setVisibleControl] = useState(undefined);

  // const f = async () => {
  //   let e = await AsyncStorage.getItem('b8bd32eb-5ddc-41eb-9688-2a0f2390c031');
  //   console.log(e);
  // };
  // f();

  // const z = async () => {
  //   let e = await AsyncStorage.getItem('b8bd32eb-5ddc-41eb-9688-2a0f2390c031');
  //   let v = JSON.parse(e);
  //   v.todo = 'zzzzzzzzzzzzz';
  //   console.log(v);

  //   let s = JSON.stringify(v);
  //   await AsyncStorage.mergeItem('b8bd32eb-5ddc-41eb-9688-2a0f2390c031', s);
  // };
  // z();

  // const ff = async () => {
  //   let e = await AsyncStorage.getItem('b8bd32eb-5ddc-41eb-9688-2a0f2390c031');
  //   console.log(e);
  // };
  // ff();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header style={{ flex: 1 }} />
      <InputTodo style={{ flex: 1 }} />
      {/* <VisibleControl.Provider value={[visibleControl, setVisibleControl]}> */}
      <RenderFlatList style={{ flex: 5 }} />
      {/* </VisibleControl.Provider> */}

      <Button onPress={clearDB} title="reset" style={{ flex: 1 }} />
      {/* <ModalTemp /> */}
      <Footer style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default App;
