import React, { useState } from 'react';
import { Text } from 'react-native';
import { styles } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const clearDB = async () => {
  await AsyncStorage.clear();
};

export default function Header() {
  const [countDown, setCountDown] = useState(5);

  function easterEggClearDB(n, result = 0) {
    if (n < 1) {
      return 0;
    } else {
      if (countDown < 1) {
        clearDB();
      } else {
        setCountDown(5);
      }
      return easterEggClearDB(n - 1, result - 1);
    }
  }

  return (
    <Text
      style={styles.header}
      onPress={() => {
        setCountDown(preCount => preCount - 1);
        setTimeout(() => easterEggClearDB(1), 1000);
      }}>
      오늘 뭐하지?
    </Text>
  );
}
