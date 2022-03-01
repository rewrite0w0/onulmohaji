import AsyncStorage from '@react-native-async-storage/async-storage';

const togleDoneCheck = async item => {
  let e, todoDecode;
  try {
    e = await AsyncStorage.getItem(item.id);
    todoDecode = JSON.parse(e);
    todoDecode.doneCheck = !todoDecode.doneCheck;
    todoDecode.doneDate = new Date();

    // new Date() 남발하는 기분인데 다른 방법은 없는가?

    await AsyncStorage.mergeItem(item.id, JSON.stringify(todosDecode));
  } catch (error) {}
};

export default togleDoneCheck;
