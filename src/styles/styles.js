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
  },
  titleContainer: {
    flex: 3,
    backgroundColor: 'cyan',
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
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    backgroundColor: 'yellow',
    // marginTop: StatusBar.currentHeight || 0,
    // flex: 1,
  },
  container2: {
    backgroundColor: 'pink',
  },
  footer: {
    // flex: 1,
    backgroundColor: 'violet',
  },
});

export default styles;
