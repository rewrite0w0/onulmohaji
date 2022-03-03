import React, { useState, useContext } from 'react';
import { Modal, TextInput, StyleSheet, View, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import { VisibleControl } from '../utils/global-state';

const tempAS = async item => {
  let e = await AsyncStorage.getAllKeys();
  console.log(e);
};
let ef = AsyncStorage.getAllKeys();

const tempSE = (e, todoKey) => {
  console.log(e.nativeEvent.text);
  console.log(todoKey);
  e.currentTarget.clear();
};

function ModifyModal() {
  let visibleControl = true;
  return (
    <View style={st.pointerE}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          console.log('move?');
        }}>
        <View style={st.con1}>
          <View style={st.con2}>
            <Text>Hello Modal</Text>
            <TextInput
              style={st.modalInput}
              placeholder="todo 바꾸기"
              onSubmitEditing={tempSE}
            />
            {/* <View style={st.con3}>
                <View>
                  <Pressable style={st.buttonClose}>
                    <Text style={st.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable style={st.buttonOpen}>
                    <Text style={st.textStyle}>OK</Text>
                  </Pressable>
                </View>
              </View> */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const modifyTodo = async item => {
  // const [visibleControl, setVisibleControl] = useContext(VisibleControl);
  // console.log(visibleControl);
  let e, todoDecode, modalVisible;

  try {
    e = await AsyncStorage.getItem(item.id);
    todoDecode = JSON.parse(e);

    todoDecode.modalVisible = !todoDecode.modalVisible;
    modalVisible = todoDecode.modalVisible;

    await AsyncStorage.mergeItem(item.id, JSON.stringify(todoDecode));
    console.log(e);
    console.log(modalVisible);
  } catch (error) {}
  console.log(modalVisible);
  return (
    <View style={st.pointerE}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('move?');
        }}>
        <View style={st.con1}>
          <View style={st.con2}>
            <Text>Hello Modal</Text>
            <TextInput
              style={st.modalInput}
              placeholder="todo 바꾸기"
              onSubmitEditing={tempSE}
            />
            {/* <View style={st.con3}>
                <View>
                  <Pressable style={st.buttonClose}>
                    <Text style={st.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable style={st.buttonOpen}>
                    <Text style={st.textStyle}>OK</Text>
                  </Pressable>
                </View>
              </View> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const st = StyleSheet.create({
  con1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  con2: {
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 100,
  },

  con3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
  },

  modalInput: {
    height: 42,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'skyblue',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  pointerE: {
    // PointterEvents: 'box-only',
    PointterEvents: 'auto',
    zIndex: 10000,
  },
});

export default modifyTodo;
