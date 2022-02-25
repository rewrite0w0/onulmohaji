import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todo: {
    fontWeight: 'bold',
    fontSize: 50,
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
  titleContainer: {
    flex: 3,
    backgroundColor: 'cyan',
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
  footer: {
    backgroundColor: 'violet',
  },
});

export default styles;
