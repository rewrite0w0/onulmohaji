import AsyncStorage from '@react-native-async-storage/async-storage';

const removeTodo = async item => {
  try {
    await AsyncStorage.removeItem(item.id);
    return true;
  } catch (error) {}
};

export default removeTodo;
