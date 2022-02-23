import React from 'react';
import { SafeAreaView, Button, RefreshControl } from 'react-native';

import { Title, GetTextTodo, Footer } from './src/components/Components';

import AsyncStorage from '@react-native-async-storage/async-storage';

const clearDB = async () => {
  await AsyncStorage.clear();
};

const App = () => {
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
