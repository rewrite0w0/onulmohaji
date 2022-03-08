import React from 'react';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const clearDB = async () => {
  await AsyncStorage.clear();
};

const ClearDbButton = () => {
  return <Button onPress={clearDB} title="reset" style={{ flex: 1 }} />;
};

export default ClearDbButton;
