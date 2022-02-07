import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todo: {
    fontWeight: 'bold',
    fontSize: 50,
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
    color: 'green',
    // marginVertical: 1,
    // marginHorizontal: 10,
    // padding: 20,
  },
  container: {
    backgroundColor: 'yellow',
    // marginTop: StatusBar.currentHeight || 0,
  },
  container2: {
    backgroundColor: 'pink',
  },
});

export default styles;
