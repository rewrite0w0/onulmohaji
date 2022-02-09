import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const outfutTodos = async () => {
//   let a;
//   try {
//     a = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

//     aaa = a.map(x => ({ id: x[0], todo: x[1] }));
//     console.log(aaa);
//     return setTest(test.concat(aaa));
//   } catch (error) {}
//   console.log('---------');
// };

// outfutTodos();

// console.log(aaa);
// console.log(outfutTodos());

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
  // const [test, setTest] = useState([]);
  // const outfutTodos = async () => {
  //   let a;
  //   try {
  //     a = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());
  //     aaa = a.map(x => ({ id: x[0], todo: x[1] }));
  //     console.log(aaa);
  //     return setTest(test.concat(aaa));
  //   } catch (error) {}
  //   console.log('---------');
  // };
  // outfutTodos();
  // const renderItem = ({ item }) => <Item todo={item} />;
  // return <FlatList renderItem={renderItem} data={test} />;
}
