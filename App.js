import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import {
  Header,
  InputTodo,
  RenderFlatList,
  Footer,
} from './src/components/Components';

import { ClearDbButton } from './src/utils';
import { TodoContext, SortConText } from './src/utils/contexts';

import { consoleAllGet, consoleDecoder } from './src/utils/consoleLike';
import SortButtons from './src/components/SortButtons';

const App = () => {
  const [_todos, _setTodos] = useState([]);
  const [sortTodos, setSortTodos] = useState('all');
  // "all", "active", "done"

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header style={{ flex: 1 }} />

      <TodoContext.Provider value={[_todos, _setTodos]}>
        <SortConText.Provider value={[sortTodos, setSortTodos]}>
          <InputTodo style={{ flex: 1 }} />
          <RenderFlatList style={{ flex: 6 }} />
          <SortButtons />
        </SortConText.Provider>
      </TodoContext.Provider>

      <Footer style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default App;
