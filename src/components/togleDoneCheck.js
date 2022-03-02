import AsyncStorage from '@react-native-async-storage/async-storage';

const togleDoneCheck = async item => {
  let e, todoDecode;
  try {
    e = await AsyncStorage.getItem(item.id);
    todoDecode = JSON.parse(e);
    todoDecode.doneCheck = !todoDecode.doneCheck;

    // todoDecode.todo = `${todoDecode.doneCheck}`;

    todoDecode.modifiedDate = new Date();

    todoDecode.doneDate = todoDecode.doneCheck === true ? new Date() : null;

    // new Date() 남발하는 기분인데 다른 방법은 없는가?
    // 스타일링을 어떻게 갱신하는가?
    // 취소선이나, 배경색, 글자색을 바꾸고 싶은데
    // 일단 생각나는건 삼항으로 푸는거
    // AsyncStorage에서 doneCheck 확인한 다음에, true면 x false면 y 이런식으로
    await AsyncStorage.mergeItem(item.id, JSON.stringify(todoDecode));

    return true;
  } catch (error) {}
};

export default togleDoneCheck;
