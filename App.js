import React from 'react';
import { SafeAreaView, Button } from 'react-native';

import {
  Title,
  GetTextTodo,
  RenderFlatList,
  Footer,
} from './src/components/Components';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import RenderFlatList from './src/components/RenderFlatList';

const clearDB = async () => {
  await AsyncStorage.clear();
};

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Title style={{ flex: 1 }} />

      <GetTextTodo style={{ flex: 1 }} />

      <RenderFlatList style={{ flex: 5 }} />

      <Button onPress={clearDB} title="reset" style={{ flex: 1 }} />
      <Footer style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default App;
