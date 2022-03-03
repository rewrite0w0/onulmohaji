import AsyncStorage from '@react-native-async-storage/async-storage';

const consoleLike = async item => {
  e = await AsyncStorage.getItem(item.id);
  todoDecode = JSON.parse(e);
  s = JSON.stringify(todoDecode);
  console.log(e);
  console.log(todoDecode);
};

export default consoleLike;
