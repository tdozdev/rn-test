import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Text>자기소개</Text>
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

export default SkillsScreen;