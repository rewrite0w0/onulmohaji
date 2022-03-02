import AsyncStorage from '@react-native-async-storage/async-storage';

const modifiedTodo = async item => {
  let e, todoDecode;
  try {
    e = await AsyncStorage.getItem(item.id);
    todoDecode = JSON.parse(e);
  } catch (error) {}
};

export default modifiedTodo;
