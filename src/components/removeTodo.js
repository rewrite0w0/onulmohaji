import AsyncStorage from '@react-native-async-storage/async-storage';

const removeTodo = async item => {
  try {
    await AsyncStorage.removeItem(item.id);
    // 이제 어떻게 화면에 반영하는가인데...렌더링을 매번 새로하자니 너무 비싼거같은데...

    // 삭제하고 다시 렌더링이 안되는데?

    // 뭐지 될 때 있고 안될 때 있는데?
    return true;
    // 뭐지 return 넣으니까 되는데?

    // 뭔가 숫자들이 엄청나게 올라가는데? 여기서 뭔가 문제가 있나?

    // 이게 느려도 진행은 된다.
    // 느린 이유는 setState를 사용하면 리렌더링을 큐에 등록하니 앞에 어마무시하게 쌓인 큐들이 다 처리되고 나서야, 지워지므로 느리다.
    // 이거는 RenderFlatList 문제이므로 그거 해결하면 해결될 듯?
  } catch (error) {}
};

export default removeTodo;
