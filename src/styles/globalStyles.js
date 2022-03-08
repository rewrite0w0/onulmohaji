import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 50,
  },

  footer: {
    textAlign: 'right',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'green',
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'flex-start',
    padding: 2,
    margin: 2,
    alignContent: 'center',
  },

  activeTodo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    justifyContent: 'flex-start',
    padding: 2,
    margin: 2,
    alignContent: 'center',
  },

  doneTodo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'grey',
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'flex-start',
    padding: 2,
    margin: 2,
    alignContent: 'center',
  },

  titleContainer: {
    flex: 3,
    backgroundColor: 'cyan',
    borderRadius: 7,
    margin: 5,
    padding: 5,
  },

  flatListContainer: {
    flex: 6,
    backgroundColor: 'lavender',
    borderRadius: 7,
    margin: 5,
    padding: 5,
  },

  input: {
    height: 42,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'skyblue',
  },

  item: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 12,
  },

  container: {
    backgroundColor: 'yellow',
    // marginTop: StatusBar.currentHeight || 0,
  },

  container2: {
    backgroundColor: 'pink',
  },

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
    pointerEvents: 'auto',
    // PointterEvents: 'auto',
    // zIndex: 10000,
  },
});

export default styles;
