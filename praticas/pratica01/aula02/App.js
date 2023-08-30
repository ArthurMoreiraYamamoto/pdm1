import { View, StyleSheet } from 'react-native'
import Box from './components/Box'

// componete
const App = () => (
  <View style={styles.container}>
  <Box color={"red"} size={50}></Box>
  <Box color={"green"} size={50}></Box>
  <Box color={"blue"} size={50}></Box>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
})

export default App;