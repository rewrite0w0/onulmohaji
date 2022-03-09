import AsyncStorage from '@react-native-async-storage/async-storage';

const removeTodo = async itemID => {
  try {
    await AsyncStorage.removeItem(itemID);
    return true;
  } catch (error) {}
};

export default removeTodo;
