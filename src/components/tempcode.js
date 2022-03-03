const visibleControl = async item => {
  e = await AsyncStorage.getItem(item.id);
  todoDecode = JSON.parse(e);
  todoDecode.modalVisible = false;
  await AsyncStorage.mergeItem(item.id, JSON.stringify(todoDecode));
};

const visibleState = async item => {
  let e = await AsyncStorage.getItem(item.id);
  return e.modalVisible;
};

// const modalFactory = item => {
//   async function state(item) {
//     let e = await AsyncStorage.getItem(item.id);
//     return e.modalVisible;
//   }

//   async function control(item) {
//     let e = await AsyncStorage.getItem(item.id);
//     todoDecode = JSON.parse(e);
//     todoDecode.modalVisible = false;
//     await AsyncStorage.mergeItem(item.id, JSON.stringify(todoDecode));
//   }
// };

// const temp = e => {
//   let text = e.nativeEvent.text;

// async () => {
//   AsyncStorage.setItem('tempStorage', text);
//   let getItems = await AsyncStorage.getItem('tempStorage');
//   console.log(getItems);
// };

//   e.currentTarget.clear();
// };

const temp2 = async item => {
  try {
    let getItems = await AsyncStorage.getItem(item.id);
    todoDecode = JSON.parse(getItems);
    todoDecode.todo = text;
    await AsyncStorage.mergeItem(item.id, JSON.stringify(todoDecode));
  } catch (error) {}
};

// 수정기능만하면 일단 기능은 끝인데,
// 수정기능하고 디자인만 완성시키면 배포하자...

const tempAS = async item => {
  let e = await AsyncStorage.getAllKeys();
  console.log(e);
};
let ef = AsyncStorage.getAllKeys();

const tempSE = e => {
  console.log(e.nativeEvent.text);

  e.currentTarget.clear();
};
