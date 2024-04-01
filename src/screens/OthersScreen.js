import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function OthersScreen() {
  return (
    <View style={styles.container}>
      <Text>기타</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OthersScreen;