import React from 'react';
import { SafeAreaView, Button } from 'react-native';

import { Title, GetTextTodo, Footer } from './src/components/Components';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderFlatList from './src/components/RenderFlatList';

const clearDB = async () => {
  await AsyncStorage.clear();
};

const d = q => {
  return console.log(q);
};

// 처음 로딩할 때, AsyncStorage 길이 조회해서 길이가 1이상이면 렌더링

// renderScreen > 0 ?<GetTextTodo />:<Text>move</Text>

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Title />

      <GetTextTodo />

      <RenderFlatList />

      <Button onPress={clearDB} title="reset" style={{ flex: 1 }} />
      <Footer style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default App;
