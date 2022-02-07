import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const outfutTodos = async () => {
  let a;
  try {
    a = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

    aaa = a.map(x => ({ id: x[0], todo: x[1] }));
    console.log(aaa);
  } catch (error) {}
  console.log('---------');
};

outfutTodos();

// console.log(aaa);
console.log(outfutTodos());

// const console = () => {
//   console.log("move")
// }

// const getAllkey = async () => {
//   let keys = [];
//   let values;
//   try {
//     keys = await AsyncStorage.getAllKeys();
//     values = await AsyncStorage.multiGet(keys);
//   } catch (e) {
//     console.log(e);
//   }
//   // console.log(`values= ${values}`);
//   console.log(values);
// };

const Item = ({ todo }) => (
  <TouchableOpacity style={styles.container2} onPress={console}>
    <Text style={styles.item}>{todo}</Text>
  </TouchableOpacity>
);

export default function TodoList() {
  const renderItem = ({ item }) => <Item todo={item} />;

  // return <FlatList renderItem={renderItem} data={outfutTodos} />;
}
