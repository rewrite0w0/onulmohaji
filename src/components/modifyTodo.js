import React, { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal, TextInput } from 'react-native';

const modifyTodo = async item => {
  let e, todoDecode;
  try {
    e = await AsyncStorage.getItem(item.id);

    // alert(e);
  } catch (error) {}
};

export default modifyTodo;
