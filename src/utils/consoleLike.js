import AsyncStorage from '@react-native-async-storage/async-storage';

const consoleDecoder = async item => {
  e = await AsyncStorage.getItem(item.id);
  todoDecode = JSON.parse(e);
  s = JSON.stringify(todoDecode);
  console.log(e);
  return console.log(todoDecode);
};

const consoleAllGet = async () => {
  let e = await AsyncStorage.getAllKeys();
  let m = await AsyncStorage.multiGet(e);
  return m.length;
};

module.exports = {
  consoleDecoder,
  consoleAllGet,
};
