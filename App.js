import React from 'react';
import {
  SafeAreaView,
  Button,
  StatusBar,
  View,
  ScrollView,
} from 'react-native';

import { Title, GetTextTodo, Footer } from './src/components/Components';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './src/styles/styles';

const clearDB = async () => {
  await AsyncStorage.clear();
};

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Bar /> */}
      <Title style={{ flex: 1 }} />

      <GetTextTodo />

      <Button onPress={clearDB} title="reset" style={{ flex: 1 }} />
      <Footer style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default App;
