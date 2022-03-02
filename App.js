import React, { useRef } from 'react';
import { SafeAreaView, Button } from 'react-native';

import {
  Header,
  InputTodo,
  RenderFlatList,
  Footer,
} from './src/components/Components';

import AsyncStorage from '@react-native-async-storage/async-storage';

const clearDB = async () => {
  await AsyncStorage.clear();
};

const App = () => {
  const count = useRef(1);
  console.log(`App render ${count.current}`);
  count.current += 1;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header style={{ flex: 1 }} />
      <InputTodo style={{ flex: 1 }} />

      <RenderFlatList style={{ flex: 5 }} />

      <Button onPress={clearDB} title="reset" style={{ flex: 1 }} />

      <Footer style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default App;
