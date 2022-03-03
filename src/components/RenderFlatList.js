import React, { useState, useEffect, useRef, useContext } from 'react';

import {
  SafeAreaView,
  FlatList,
  Text,
  Pressable,
  StyleSheet,
  View,
  Modal,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import removeTodo from './removeTodo';
import togleDoneCheck from './togleDoneCheck';
// import modifyTodo from './modifyTodo';
import consoleLike from './consoleLike';

// import RenderTodos from './RenderTodos';

// import { VisibleControl } from '../utils/global-state';

import { styles } from '../utils';

const RenderFlatList = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(null);
  const [modifyText, setModifyText] = useState(null);
  const [modalView, setModalView] = useState(null);
  const [visibleControl, setVisibleControl] = useState(false);
  // const [visibleControl, setVisibleControl] = useContext(VisibleControl);
  // console.log(visibleControl);

  const tempOnSubmitEditingFunction = e => {
    let modifying = e.nativeEvent.text;

    setModifyText(modifying);
    console.log(modifyText);
    e.currentTarget.clear();
    setVisibleControl(false);
  };

  const ModalViewer = () => {
    return (
      <View style={st.pointerE}>
        <Modal
          animationType="fade"
          // transparent={true}
          visible={visibleControl}
          onRequestClose={() => {
            console.log('move?');
            setVisibleControl(false);
          }}>
          <View style={st.con1}>
            <View style={st.con2}>
              <Text>Hello Modal</Text>
              <TextInput
                style={st.modalInput}
                placeholder="todo 바꾸기"
                onSubmitEditing={tempOnSubmitEditingFunction}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const modifyModal = async item => {
    console.log('hmmmmmm?');
    setVisibleControl(true);
    console.log(item.id);
    console.log(id);
    console.log(visibleControl);

    // return <ModalViewer />;
  };

  const modifyTodo = async item => {
    let e, todoDecode, modalVisible;

    try {
      e = await AsyncStorage.getItem(item.id);
      todoDecode = JSON.parse(e);

      todoDecode.modalVisible = !todoDecode.modalVisible;
      modalVisible = todoDecode.modalVisible;

      await AsyncStorage.mergeItem(item.id, JSON.stringify(todoDecode));
    } catch (error) {}

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
                onSubmitEditing={tempOnSubmitEditingFunction}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const RenderTodos = ({ item }) => {
    return (
      <Pressable
        style={styles.item}
        key={item.id}
        onPress={() => modifyModal(item)}
        // onPress={() => modifyTodo(item)}
        // onPress={() => consoleLike(item)}
        // onPress={() => removeTodo(item)}
        // onPress={() => modifiedTodo(item)}
        // onPress={() => togleDoneCheck(item)}
      >
        <Text style={styles.title}>{item.todo}</Text>
      </Pressable>
    );
  };

  // const [visibleControl, setVisibleControl] = useContext(VisibleControl);

  // console.log(visibleControl);
  const outputTodos = async () => {
    let TODOS;
    let TODOS_TO_OBJECT;

    try {
      TODOS = await AsyncStorage.multiGet(await AsyncStorage.getAllKeys());

      TODOS_TO_OBJECT = TODOS.map(el => ({
        id: el[0],
        todo: JSON.parse(el[1]).todo,
        createdDate: JSON.parse(el[1]).createdDate,
        modifiedDate: JSON.parse(el[1]).modifiedDate,
        doneDate: JSON.parse(el[1]).doneDate,
        doneCheck: JSON.parse(el[1]).doneCheck,
        uuid: JSON.parse(el[1]).uuidv4,
        modalVisible: JSON.parse(el[1]).modalVisible,
      }));
      // 이게 문제네
      return setTodos(TODOS_TO_OBJECT);

      // 그럼 useState 쓰지 않고서 렌더링하면 하는 방법은?
      // 일단 뒤로 미루자

      // global-state 이용해서, inputtodo에 onSubmitEditing 실행때 마다 보여주는 것은?
    } catch (error) {}
  };
  // 여기가 문제네, console.log(todos) 보니

  const sortTodos = () => {
    todos.sort((x, y) => (x.createdDate < y.createdDate ? 1 : -1));
  };

  const init = () => {
    outputTodos();
    sortTodos();
  };

  init();

  // const count = useRef(1);
  // console.log(`renderflatlist render: ${count.current}`);
  // count.current += 1;

  return (
    <SafeAreaView style={styles.flatListContainer}>
      <FlatList
        data={todos}
        renderItem={RenderTodos}
        keyExtractor={todo => todo.id}
        nestedScrollEnabled
        windowSize={4}
      />

      <View style={st.pointerE}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visibleControl}
          onRequestClose={() => {
            console.log('modal의 onRequest');
            setVisibleControl(false);
            setModifyText(null);
          }}>
          <View style={st.con1}>
            <View style={st.con2}>
              <Text>Hello Modal</Text>
              <TextInput
                style={st.modalInput}
                placeholder="todo 바꾸기"
                onSubmitEditing={tempOnSubmitEditingFunction}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
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
    PointterEvents: 'box-only',
    // PointterEvents: 'auto',
    // zIndex: 10000,
  },
});

export default RenderFlatList;
