import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text>프로젝트</Text>
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

export default ProjectsScreen;