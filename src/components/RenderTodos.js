import React, { useState, useEffect } from 'react';
import {
  Text,
  Pressable,
  TouchableOpacity,
  Button,
  Modal,
  View,
  Alert,
} from 'react-native';
import { styles } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. 좌우에 버튼을 두어 애니메이션으로 효과를 주기?
//                       or
// 1. 누르면 done, 길게누르면 수정, 옆으로 밀면 삭제?

// onPress => 확인
// onLongPress => 수정
// 삭제는 스와이프로 하고 싶은데 그게 없네....

// @ 렌더링하는 도구에서는 hooks 사용안 됨 최상단이 아니라 그런가?
// 아마 함수 안에 함수라서 그런거 같은데

// 어떤 효과를 줄지는 대충 그렸으니
// 내일은 기능을 만들자.
// asyncStorage 메서드들 이용해서 수정, 삭제구현하자

// 2. 수정할 때는 asyncstorage merge로 해결하기

const togleDone = async item => {
  let e;
  try {
    e = await AsyncStorage.getItem(item.id);
    // alert(e);
    // a = await AsyncStorage.mergeItem(item.id, JSON.stringify());
    alert(e);
  } catch (error) {}
};

const removeTodo = async item => {
  try {
    await AsyncStorage.removeItem(item.id);
    // 이제 어떻게 화면에 반영하는가인데...렌더링을 매번 새로하자니 너무 비싼거같은데...
    // 삭제하고 다시 렌더링이 안되는데?
    return true;
    // 뭐지 return 넣으니까 되는데?
  } catch (error) {}
};

const RenderTodos = ({ item }) => {
  return (
    <Pressable
      style={styles.item}
      key={item.id}
      // onPressIn={() => alert('in')}
      // onPressOut={() => alert('out')}
      onLongPress={() => removeTodo(item)}
      // onPress={() => togleDone(item)}
    >
      <Text style={styles.title}>{item.todo}</Text>
    </Pressable>
  );
};

export default RenderTodos;
