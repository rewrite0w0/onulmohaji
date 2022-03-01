import React from 'react';
import { Modal, TextInput, View } from 'react-native';

export default function ModifyModal({ todoID }) {
  return (
    <Modal>
      <View>
        <TextInput></TextInput>
      </View>
    </Modal>
  );
}
