import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';

import {
  Header,
  InputTodo,
  RenderFlatList,
  Footer,
} from './src/components/Components';

import { clearDB } from './src/utils';
import { TodoContext } from './src/utils/TodosContext';

const App = () => {
  const [_todos, _setTodos] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header style={{ flex: 1 }} />

      <TodoContext.Provider value={[_todos, _setTodos]}>
        <InputTodo style={{ flex: 1 }} />
        <RenderFlatList style={{ flex: 5 }} />
      </TodoContext.Provider>
      <Button onPress={clearDB} title="reset" style={{ flex: 1 }} />

      <Footer style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default App;
