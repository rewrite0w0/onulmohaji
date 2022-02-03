import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const Item = ({ todo }) => (
  <View style={styles.container2}>
    <Text style={styles.item}>{todo}</Text>
  </View>
);
const App = () => {
  const [todo, setTodo] = useState([]);
  const todoID = useRef(1);

  console.log(todo);

  const renderItem = ({ item }) => <Item todo={item.todo} />;

  return (
    <View>
      <Text style={styles.todo}>오늘 뭐하지?</Text>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          placeholder="오늘 뭐하지?"
          onSubmitEditing={e => {
            let text = e.nativeEvent.text;
            const todos = {
              id: todoID.current,
              todo: text,
            };
            setTodo(todo.concat(todos));
            e.currentTarget.clear();
            todoID.current += 1;
          }}
        />
      </KeyboardAvoidingView>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.item}
          data={todo}
          renderItem={renderItem}
          keyExtractor={todos => todos.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  input: {
    height: 42,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'skyblue',
  },
  item: {
    fontSize: 25,
    color: 'green',
  },
  container: {
    backgroundColor: 'yellow',
  },
  container2: {
    backgroundColor: 'pink',
  },
});

export default App;
