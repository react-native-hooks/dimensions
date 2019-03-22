import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useDimensions from '@rnhooks/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  type: {
    margin: 20,
    fontSize: 20,
  },
});

function App() {
  const {
    fontScale, width, height, scale,
  } = useDimensions('window');

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Width: ${width}`}</Text>
      <Text style={styles.type}>{`Height: ${height}`}</Text>
      <Text style={styles.type}>{`Font Scale: ${fontScale}, Scale: ${scale}`}</Text>
    </View>
  );
}

export default App;
