import AsyncStorage from '@react-native-async-storage/async-storage';

const removeTodo = async item => {
  try {
    await AsyncStorage.removeItem(item.id);
    // 이제 어떻게 화면에 반영하는가인데...렌더링을 매번 새로하자니 너무 비싼거같은데...
    // 삭제하고 다시 렌더링이 안되는데?

    return true;
    // 뭐지 return 넣으니까 되는데?
  } catch (error) {}
};

export default removeTodo;
