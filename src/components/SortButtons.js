import React, { useContext } from 'react';
import { SafeAreaView, Button } from 'react-native';

import { SortConText } from '../utils/contexts';

export default function SortButtons() {
  const [sortTodos, setSortTodos] = useContext(SortConText);

  return (
    <SafeAreaView
      style={{
        flex: 0.6,
        flexDirection: 'row',
      }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Button title="all" onPress={() => setSortTodos('all')} />
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1 }}>
        <Button
          title="active"
          color="skyblue"
          onPress={() => setSortTodos('active')}
        />
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1 }}>
        <Button
          title="done"
          color="gray"
          onPress={() => setSortTodos('done')}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
